// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

import {Receiver} from "solady/accounts/Receiver.sol";
import {UUPSUpgradeable} from "solady/utils/UUPSUpgradeable.sol";

import {MultiSendCallOnly} from "../utils/MultiSend.sol";
import {ECDSA} from "../utils/ECDSA.sol";
import {P256} from "../utils/P256.sol";
import {WebAuthnP256} from "../utils/WebAuthnP256.sol";
import {SignatureVerification} from "../SignatureVerification.sol";

/// @title ExperimentalDelegation
/// @author jxom <https://github.com/jxom>
/// @notice Experimental EIP-7702 Delegation contract that allows authorized Keys to invoke calls on behalf of an EOA.
contract ExperimentalDelegation is Receiver, MultiSendCallOnly {
    ////////////////////////////////////////////////////////////////////////
    // Errors
    ////////////////////////////////////////////////////////////////////////

    /// @notice Thrown when the EOA has already been initialized.
    error AlreadyInitialized();

    /// @notice Thrown when a key is expired or unauthorized.
    error KeyExpiredOrUnauthorized();

    /// @notice Thrown when the sender is not the EOA.
    error InvalidAuthority();

    /// @notice Thrown when a signature is invalid.
    error InvalidSignature();

    ////////////////////////////////////////////////////////////////////////
    // Functions
    ////////////////////////////////////////////////////////////////////////

    /// @notice Label to associate with the EOA.
    string public label;

    /// @notice List of keys associated with the EOA.
    SignatureVerification.Key[] public keys;

    /// @notice Authorization nonce used for replay protection.
    uint256 public nonce;

    /// @notice Initializes the EOA with a public key to authorize.
    /// @param label_ - The label to associate with the EOA.
    /// @param keys_ - The keys to authorize.
    function initialize(string calldata label_, SignatureVerification.Key[] calldata keys_) public onlyOwner {
        if (keys.length > 0) revert AlreadyInitialized();

        label = label_;

        _authorize(keys_);
    }

    /// @notice Initializes the EOA with a public key to authorize, provided the EOA's signature.
    /// @param label_ - The label to associate with the EOA.
    /// @param keys_ - The key to authorize.
    /// @param signature - The signature over the key: `sign(keccak256(abi.encode(nonce, key)))`.
    function initialize(
        string calldata label_,
        SignatureVerification.Key[] calldata keys_,
        ECDSA.Signature calldata signature
    ) public {
        bytes32 digest = keccak256(abi.encode(nonce++, label_, keys_));

        address signer = ecrecover(digest, signature.yParity == 0 ? 27 : 28, bytes32(signature.r), bytes32(signature.s));
        if (signer != address(this)) revert InvalidSignature();

        if (keys.length > 0) revert AlreadyInitialized();

        label = label_;

        _authorize(keys_);
    }

    /// @notice Authorizes a new public key.
    /// @param keys_ - The key to authorize.
    function authorize(SignatureVerification.Key[] calldata keys_) public onlyOwner {
        _authorize(keys_);
    }

    /// @notice Authorizes a new public key on behalf of the EOA, provided the EOA's signature.
    /// @param keys_ - The keys to authorize.
    /// @param signature - The signature over the keys: `sign(keccak256(abi.encode(nonce, keys)))`.
    function authorize(SignatureVerification.Key[] calldata keys_, bytes calldata signature) public {
        SignatureVerification.WrappedSignature memory wrappedSignature = SignatureVerification.parseSignature(signature);
        SignatureVerification.Key memory authorizingKey = keys[wrappedSignature.keyIndex];

        // Revert for expiring keys. Assume that non-expiring keys are "admins".
        if (authorizingKey.expiry != 0) revert KeyExpiredOrUnauthorized();

        bytes32 digest = keccak256(abi.encode(nonce++, keys_));
        SignatureVerification.assertSignature(digest, signature, authorizingKey);

        _authorize(keys_);
    }

    /// @notice Revokes an authorized public key.
    /// @param keyIndex - The index of the public key to revoke.
    function revoke(uint32 keyIndex) public onlyOwner {
        keys[keyIndex].expiry = 1;
    }

    /// @notice Revokes an authorized public key on behalf of the EOA, provided the EOA's signature.
    /// @param keyIndex - The index of the public key to revoke.
    /// @param signature - The signature over the key index: `sign(keccak256(abi.encodePacked(nonce, keyIndex)))`.
    function revoke(uint32 keyIndex, bytes calldata signature) public {
        SignatureVerification.WrappedSignature memory wrappedSignature = SignatureVerification.parseSignature(signature);
        SignatureVerification.Key memory authorizingKey = keys[wrappedSignature.keyIndex];

        // Revert for expiring keys. Assume that non-expiring keys are "admins".
        if (authorizingKey.expiry != 0) revert KeyExpiredOrUnauthorized();

        bytes32 digest = keccak256(abi.encodePacked(nonce++, keyIndex));
        SignatureVerification.assertSignature(digest, signature, authorizingKey);

        keys[keyIndex].expiry = 1;
    }

    /// @notice Executes a set of calls.
    /// @param calls - The calls to execute.
    function execute(bytes memory calls) public onlyOwner {
        multiSend(calls);
    }

    /// @notice Executes a set of calls on behalf of the EOA, provided a signature that was signed by an authorized key.
    /// @param calls - The calls to execute.
    /// @param signature - The wrapped signature over the calls.
    function execute(bytes memory calls, bytes calldata signature) public {
        SignatureVerification.WrappedSignature memory wrappedSignature = SignatureVerification.parseSignature(signature);
        SignatureVerification.Key memory authorizingKey = keys[wrappedSignature.keyIndex];
        bytes32 digest = keccak256(abi.encodePacked(nonce++, calls));
        SignatureVerification.assertSignature(digest, signature, authorizingKey);

        multiSend(calls);
    }

    /// @notice Gets the keys associated with the EOA.
    function getKeys() public view returns (SignatureVerification.Key[] memory) {
        return keys;
    }

    ////////////////////////////////////////////////////////////////////////
    // Modifiers
    ////////////////////////////////////////////////////////////////////////

    /// @notice Modifier to ensure the caller is the owner.
    modifier onlyOwner() {
        if (msg.sender != address(this)) revert InvalidAuthority();
        _;
    }

    ////////////////////////////////////////////////////////////////////////
    // Internal
    ////////////////////////////////////////////////////////////////////////

    /// @notice Authorizes a new public key.
    /// @param keys_ - The keys to authorize.
    function _authorize(SignatureVerification.Key[] calldata keys_) internal {
        for (uint32 i = 0; i < keys_.length; i++) {
            keys.push(keys_[i]);
        }
    }
}
