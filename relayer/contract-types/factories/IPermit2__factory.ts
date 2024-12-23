/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type { Provider } from '@ethersproject/providers'
import { Contract, type Signer, utils } from 'ethers'
import type { IPermit2, IPermit2Interface } from '../IPermit2'

const _abi = [
  {
    type: 'function',
    name: 'permitWitnessTransferFrom',
    inputs: [
      {
        name: 'permit',
        type: 'tuple',
        internalType: 'struct IPermit2.PermitTransferFrom',
        components: [
          {
            name: 'permitted',
            type: 'tuple',
            internalType: 'struct IPermit2.TokenPermissions',
            components: [
              {
                name: 'token',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'amount',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
          {
            name: 'nonce',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'deadline',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
      },
      {
        name: 'transferDetails',
        type: 'tuple',
        internalType: 'struct IPermit2.SignatureTransferDetails',
        components: [
          {
            name: 'to',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'requestedAmount',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
      },
      {
        name: 'owner',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'witness',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: 'witnessTypeString',
        type: 'string',
        internalType: 'string',
      },
      {
        name: 'signature',
        type: 'bytes',
        internalType: 'bytes',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'transferFrom',
    inputs: [
      {
        name: 'from',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'to',
        type: 'address',
        internalType: 'address',
      },
      {
        name: 'amount',
        type: 'uint160',
        internalType: 'uint160',
      },
      {
        name: 'token',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

export class IPermit2__factory {
  static readonly abi = _abi
  static createInterface(): IPermit2Interface {
    return new utils.Interface(_abi) as IPermit2Interface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): IPermit2 {
    return new Contract(address, _abi, signerOrProvider) as IPermit2
  }
}
