import type { Provider, TransactionRequest } from '@ethersproject/providers'
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  type Overrides,
  type Signer,
  utils,
} from 'ethers'
import type {
  ExperimentalDelegation,
  ExperimentalDelegationInterface,
} from '../../ExperimentalDelegation.sol/ExperimentalDelegation'

const _abi = [
  {
    type: 'constructor',
    inputs: [
      {
        name: '_destinationSettler',
        type: 'address',
        internalType: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'fallback',
    stateMutability: 'payable',
  },
  {
    type: 'receive',
    stateMutability: 'payable',
  },
  {
    type: 'function',
    name: 'DESTINATION_SETTLER',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'address',
        internalType: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'authorize',
    inputs: [
      {
        name: 'keys_',
        type: 'tuple[]',
        internalType: 'struct SignatureVerification.Key[]',
        components: [
          {
            name: 'expiry',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'keyType',
            type: 'uint8',
            internalType: 'enum SignatureVerification.KeyType',
          },
          {
            name: 'publicKey',
            type: 'tuple',
            internalType: 'struct ECDSA.PublicKey',
            components: [
              {
                name: 'x',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'y',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'authorize',
    inputs: [
      {
        name: 'keys_',
        type: 'tuple[]',
        internalType: 'struct SignatureVerification.Key[]',
        components: [
          {
            name: 'expiry',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'keyType',
            type: 'uint8',
            internalType: 'enum SignatureVerification.KeyType',
          },
          {
            name: 'publicKey',
            type: 'tuple',
            internalType: 'struct ECDSA.PublicKey',
            components: [
              {
                name: 'x',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'y',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
        ],
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
    name: 'execute',
    inputs: [
      {
        name: 'calls',
        type: 'bytes',
        internalType: 'bytes',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'execute',
    inputs: [
      {
        name: 'calls',
        type: 'bytes',
        internalType: 'bytes',
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
    name: 'getKeys',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'tuple[]',
        internalType: 'struct SignatureVerification.Key[]',
        components: [
          {
            name: 'expiry',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'keyType',
            type: 'uint8',
            internalType: 'enum SignatureVerification.KeyType',
          },
          {
            name: 'publicKey',
            type: 'tuple',
            internalType: 'struct ECDSA.PublicKey',
            components: [
              {
                name: 'x',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'y',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'initialize',
    inputs: [
      {
        name: 'label_',
        type: 'string',
        internalType: 'string',
      },
      {
        name: 'keys_',
        type: 'tuple[]',
        internalType: 'struct SignatureVerification.Key[]',
        components: [
          {
            name: 'expiry',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'keyType',
            type: 'uint8',
            internalType: 'enum SignatureVerification.KeyType',
          },
          {
            name: 'publicKey',
            type: 'tuple',
            internalType: 'struct ECDSA.PublicKey',
            components: [
              {
                name: 'x',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'y',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
        ],
      },
      {
        name: 'signature',
        type: 'tuple',
        internalType: 'struct ECDSA.Signature',
        components: [
          {
            name: 'r',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 's',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'yParity',
            type: 'uint8',
            internalType: 'uint8',
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'initialize',
    inputs: [
      {
        name: 'label_',
        type: 'string',
        internalType: 'string',
      },
      {
        name: 'keys_',
        type: 'tuple[]',
        internalType: 'struct SignatureVerification.Key[]',
        components: [
          {
            name: 'expiry',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'keyType',
            type: 'uint8',
            internalType: 'enum SignatureVerification.KeyType',
          },
          {
            name: 'publicKey',
            type: 'tuple',
            internalType: 'struct ECDSA.PublicKey',
            components: [
              {
                name: 'x',
                type: 'uint256',
                internalType: 'uint256',
              },
              {
                name: 'y',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'keys',
    inputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: 'expiry',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'keyType',
        type: 'uint8',
        internalType: 'enum SignatureVerification.KeyType',
      },
      {
        name: 'publicKey',
        type: 'tuple',
        internalType: 'struct ECDSA.PublicKey',
        components: [
          {
            name: 'x',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'y',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'label',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'string',
        internalType: 'string',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'nonce',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'revoke',
    inputs: [
      {
        name: 'keyIndex',
        type: 'uint32',
        internalType: 'uint32',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'revoke',
    inputs: [
      {
        name: 'keyIndex',
        type: 'uint32',
        internalType: 'uint32',
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
    name: 'xExecute',
    inputs: [
      {
        name: 'userCalls',
        type: 'tuple',
        internalType: 'struct CallByUser',
        components: [
          {
            name: 'user',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'nonce',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'asset',
            type: 'tuple',
            internalType: 'struct Asset',
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
            name: 'chainId',
            type: 'uint64',
            internalType: 'uint64',
          },
          {
            name: 'signature',
            type: 'bytes',
            internalType: 'bytes',
          },
          {
            name: 'calls',
            type: 'tuple[]',
            internalType: 'struct Call[]',
            components: [
              {
                name: 'target',
                type: 'address',
                internalType: 'address',
              },
              {
                name: 'callData',
                type: 'bytes',
                internalType: 'bytes',
              },
              {
                name: 'value',
                type: 'uint256',
                internalType: 'uint256',
              },
            ],
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'error',
    name: 'AlreadyInitialized',
    inputs: [],
  },
  {
    type: 'error',
    name: 'CallReverted',
    inputs: [
      {
        name: 'index',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'calls',
        type: 'tuple[]',
        internalType: 'struct Call[]',
        components: [
          {
            name: 'target',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'callData',
            type: 'bytes',
            internalType: 'bytes',
          },
          {
            name: 'value',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
      },
    ],
  },
  {
    type: 'error',
    name: 'InvalidAuthority',
    inputs: [],
  },
  {
    type: 'error',
    name: 'InvalidCall',
    inputs: [
      {
        name: 'index',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'calls',
        type: 'tuple[]',
        internalType: 'struct Call[]',
        components: [
          {
            name: 'target',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'callData',
            type: 'bytes',
            internalType: 'bytes',
          },
          {
            name: 'value',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
      },
    ],
  },
  {
    type: 'error',
    name: 'InvalidSignature',
    inputs: [],
  },
  {
    type: 'error',
    name: 'InvalidSignature',
    inputs: [],
  },
  {
    type: 'error',
    name: 'KeyExpiredOrUnauthorized',
    inputs: [],
  },
  {
    type: 'error',
    name: 'NotCalledByDestinationSettler',
    inputs: [],
  },
  {
    type: 'error',
    name: 'ReentrancyGuardReentrantCall',
    inputs: [],
  },
] as const

const _bytecode =
  '0x60a034607157601f611c8338819003918201601f19168301916001600160401b03831184841017607557808492602094604052833981010312607157516001600160a01b038116810360715760015f55608052604051611bf9908161008a8239608051818181610a360152610fdd0152f35b5f80fd5b634e487b7160e01b5f52604160045260245ffdfe6080604052600436101561001e575b361561001c5761001c611140565b005b5f3560e01c806309c5eabe146100fd5780630cb6aaf1146100f85780631219ec42146100f3578063135d0480146100ee578063145a3fc2146100e95780631f6a1eb9146100e45780632150c518146100df5780635a2e7a55146100da5780635fce1927146100d55780638059a8a7146100d05780638530f6ea146100cb578063aea0fd47146100c6578063affed0e0146100c15763cb4774c40361000e57610cf3565b610c56565b610ba0565b610ae6565b610aa6565b610a73565b610a21565b61092c565b61086e565b6107ae565b610550565b610414565b61034b565b61025f565b634e487b7160e01b5f52604160045260245ffd5b604081019081106001600160401b0382111761013157604052565b610102565b606081019081106001600160401b0382111761013157604052565b608081019081106001600160401b0382111761013157604052565b60a081019081106001600160401b0382111761013157604052565b60c081019081106001600160401b0382111761013157604052565b90601f801991011681019081106001600160401b0382111761013157604052565b604051906101d082610187565b565b604051906101d082610136565b604051906101d082610151565b6001600160401b03811161013157601f01601f191660200190565b929192610213826101ec565b9161022160405193846101a2565b82948184528183011161023d578281602093845f960137010152565b5f80fd5b9080601f8301121561023d5781602061025c93359101610207565b90565b3461023d57602036600319011261023d576004356001600160401b03811161023d5761028f903690600401610241565b30330361029f5761001c9061116c565b604051636f6a1b8760e11b8152600490fd5b634e487b7160e01b5f52603260045260245ffd5b6002548110156102fd5760025f5260021b7f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace01905f90565b6102b1565b9060405161030f81610116565b602060018294805484520154910152565b6002111561032a57565b634e487b7160e01b5f52602160045260245ffd5b90600282101561032a5752565b3461023d57602036600319011261023d5760043560025481101561023d576103746080916102c5565b506103b58154916103a3610392600260ff6001850154169301610302565b91604051948552602085019061033e565b80516040840152602001516060830152565bf35b9181601f8401121561023d578235916001600160401b03831161023d576020838186019501011161023d57565b9181601f8401121561023d578235916001600160401b03831161023d576020808501948460071b01011161023d57565b3461023d5760a036600319011261023d576001600160401b0360043581811161023d576104459036906004016103b7565b9160243590811161023d5761045e9036906004016103e4565b91606036604319011261023d5760205f60035461048261047d82610dd3565b600355565b6040516104a88161049a89898c8a8a86019889610e55565b03601f1981018352826101a2565b51902060ff6104b5610ea0565b1615821461054857601b905b6040805191825260ff92909216602082015260443591810191909152606435606082015281805260809060015afa15610543575f51306001600160a01b0390911603610531576002546105205761001c9361051b91610f15565b6111e1565b60405162dc149f60e41b8152600490fd5b604051638baa579f60e01b8152600490fd5b610eac565b601c906104c1565b3461023d57604036600319011261023d576001600160401b0360043581811161023d576105819036906004016103b7565b909160243581811161023d5761059b9036906004016103e4565b92909130330361029f57600254610520578111610131576001906105c8816105c38454610c86565b610eb7565b5f601f821160011461060b5790806105f99261001c975f92610600575b50508160011b915f199060031b1c19161790565b90556111e1565b013590505f806105e5565b60015f52601f198216905f80516020611ba4833981519152915f5b818110610664575096839291859461001c991061064b575b505050811b0190556111e1565b01355f19600384901b60f8161c191690555f808061063e565b8883013584559285019260209283019201610626565b35906001600160a01b038216820361023d57565b919082604091031261023d576040516106a681610116565b60208082946106b48161067a565b84520135910152565b35906001600160401b038216820361023d57565b6001600160401b0381116101315760051b60200190565b9080601f8301121561023d57813591602091610703846106d1565b9360409261071460405196876101a2565b818652848087019260051b8201019383851161023d57858201925b858410610740575050505050505090565b6001600160401b03843581811161023d57840191606080601f19858a03011261023d5784519061076f82610136565b61077a8b860161067a565b82528585013593841161023d57846107998a8d80989781980101610241565b8584015201358582015281520193019261072f565b3461023d5760031960203682011261023d57600435906001600160401b039081831161023d5760e090833603011261023d576107e86101c3565b906107f58360040161067a565b82526024830135602083015261080e366044850161068e565b604083015261081f608484016106bd565b606083015260a483013581811161023d576108409060043691860101610241565b608083015260c483013590811161023d5761001c92600461086492369201016106e8565b60a0820152610fce565b3461023d57604036600319011261023d576001600160401b0360043581811161023d5761089f903690600401610241565b60243591821161023d576109276108bd61001c9336906004016103b7565b6109216108eb6108e563ffffffff6108de6108d9368789610207565b6114a0565b51166102c5565b506110f0565b926003546108f881610dd3565b600355604051602081019182526109168161049a604082018b61112e565b519020923691610207565b9061154a565b61116c565b3461023d575f36600319011261023d57600254610948816106d1565b60409161095860405192836101a2565b8082526020808301918260025f527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace5f915b8383106109fe57505050506040519281840190828552518091526040840192915f5b8281106109b95785850386f35b909192938260806001926109f28a8951805184526109dd868201518786019061033e565b01518b83019060208091805184520151910152565b019501939291016109ac565b600485600192610a10859a989a6110f0565b81520192019201919095939561098a565b3461023d575f36600319011261023d576040517f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152602090f35b63ffffffff81160361023d57565b3461023d57602036600319011261023d57600435610a9081610a65565b30330361029f57610aa26001916102c5565b5055005b3461023d57602036600319011261023d576004356001600160401b03811161023d57610ad69036906004016103e4565b30330361029f5761001c916111e1565b3461023d57604036600319011261023d576001600160401b0360043581811161023d57610b179036906004016103e4565b909160243590811161023d57610b319036906004016103b7565b9290610b4c6108e563ffffffff6108de6108d9368987610207565b8051610b8e5761001c9461092161051b93600354610b6981610dd3565b600355604051602081019182526040808201526109168161049a606082018c8c610df0565b60405163a8c370f360e01b8152600490fd5b3461023d57604036600319011261023d57600435610bbd81610a65565b6024356001600160401b03811161023d57610bdc9036906004016103b7565b9091610bf76108e563ffffffff6108de6108d9368789610207565b928351610b8e5761001c93610c4f93610921610c4a93600354610c1981610dd3565b600355604080516020810192835260e089901b6001600160e01b03191691810191909152610916816044810161049a565b6102c5565b5060019055565b3461023d575f36600319011261023d576020600354604051908152f35b634e487b7160e01b5f525f60045260245ffd5b90600182811c92168015610cb4575b6020831014610ca057565b634e487b7160e01b5f52602260045260245ffd5b91607f1691610c95565b805180835260209291819084018484015e5f828201840152601f01601f1916010190565b90602061025c928181520190610cbe565b3461023d575f36600319011261023d576040515f60018054610d1481610c86565b8085529160209160018116908115610d955750600114610d4f575b610d4b85610d3f818703826101a2565b60405191829182610ce2565b0390f35b60015f90815293505f80516020611ba48339815191525b838510610d8257505050508101602001610d3f82610d4b610d2f565b8054868601840152938201938101610d66565b869550610d4b96935060209250610d3f94915060ff191682840152151560051b8201019293610d2f565b634e487b7160e01b5f52601160045260245ffd5b5f198114610de15760010190565b610dbf565b6002111561023d57565b9190808252602080920192915f905b828210610e0d575050505090565b9091929360019085358152610e3183870135610e2881610de6565b8483019061033e565b60408681013590820152606080870135908201526080908101950193920190610dff565b90928060809361025c9795845260606020850152816060850152848401375f838284010152601f8019910116810190604083828403019101520191610df0565b60ff81160361023d57565b60843561025c81610e95565b6040513d5f823e3d90fd5b90601f8211610ec4575050565b60019160015f525f80516020611ba4833981519152906020601f840160051c83019310610f0b575b601f0160051c01905b818110610f0157505050565b5f81558201610ef5565b9091508190610eec565b91906001600160401b03811161013157600190610f36816105c38454610c86565b5f601f8211600114610f68578190610f649394955f926106005750508160011b915f199060031b1c19161790565b9055565b60015f52601f198216945f80516020611ba4833981519152915f5b878110610fb857508385969710610f9f575b505050811b019055565b01355f19600384901b60f8161c191690555f8080610f95565b8282013584559285019260209182019101610f83565b60025f54146110de5760025f557f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031633036110cc5760a00151905f5b82518110156110c057611025818461128a565b5160208082018051511515806110ad575b611091578251604093840151915180515f94859491939201916001600160a01b03165af1611062611332565b50156110715750600101611012565b516303918b1160e61b81529283925061108d916004840161129e565b0390fd5b60405163388ddcc360e21b81528061108d88876004840161129e565b5082516001600160a01b03163b15611036565b5090506101d060015f55565b60405163c9c82d7560e01b8152600490fd5b604051633ee5aeb560e01b8152600490fd5b906040516110fd81610136565b80928054825260ff60018201541690600282101561032a57600261112991604093602086015201610302565b910152565b805191908290602001825e015f815290565b5f3560e01c63bc197c81811463f23a6e6182141763150b7a028214176111635750565b6020526020603cf35b80519060205b82811061117e57505050565b80820190815160f81c90600183015160601c9160158401519360358101518094605596875f9594855f146111cd57505050505060011461023d575b156111c5570101611172565b3d5f803e3d5ffd5b5f9650869550019130811502175af16111b9565b5f5b8263ffffffff8216106111f557505050565b647fffffff808160071b168201600290815491680100000000000000008310156101315761122960019384810183556102c5565b939093611285578235845583019160208101359161124683610de6565b8083101561032a5760039360609360ff80198354169116179055604082013590850155013591015563ffffffff809116908114610de1576001016111e3565b610c73565b80518210156102fd5760209160051b010190565b906040916040810191815260209060408282015284518093526060808201908360608660051b8501019701955f935b8685106112df57505050505050505090565b90919293949596978680600192605f198582030188528b5190848060a01b038251168152868061131a858501518b878601528b850190610cbe565b9301519101529a0195019501939695949291906112cd565b3d1561135c573d90611343826101ec565b9161135160405193846101a2565b82523d5f602084013e565b606090565b6040519061f04082018281106001600160401b038211176101315760405261f00d825261f020366020840137565b5190811515820361023d57565b9291926113a8826101ec565b916113b660405193846101a2565b82948184528183011161023d578281602093845f96015e010152565b9080601f8301121561023d57815161025c9260200161139c565b9060208282031261023d5781516001600160401b039283821161023d5701908181039260c0841261023d5760606040519461142686610151565b845161143181610a65565b8652601f19011261023d5760405161144881610136565b6020840151815260408401516020820152606084015161146781610e95565b6040820152602085015261147d6080840161138f565b604085015260a083015190811161023d5761149892016113d2565b606082015290565b6040908151916114af83610151565b5f835260608060209483516114c381610136565b5f81525f878201525f85820152868201525f84820152015260418251146114f657508161025c92825183010191016113ec565b5f906115278484015193606083820151910151841a60f81c906115176101d2565b9586528686015260ff1682850152565b61152f611361565b926115386101df565b94838652850152830152606082015290565b6001600160e01b03199261155f929091611627565b161561053157565b519061ffff8216820361023d57565b9060208282031261023d5781516001600160401b039283821161023d57019060a08282031261023d57604051926115ac8461016c565b825181811161023d57826115c19185016113d2565b8452602083015190811161023d5782019181601f8401121561023d576115f260809284602061161f9651910161139c565b602085015261160360408201611567565b604085015261161460608201611567565b60608501520161138f565b608082015290565b90611631906114a0565b9161163f6040840151151590565b611710575b80518015159081611706575b506116945760208101805161166481610320565b61166d81610320565b15806116ec575b6116dc576001905161168581610320565b61168e81610320565b1461169b575b5050505f90565b82604060206116b960606116c5970151828082518301019101611576565b92015192015192611888565b6116d1575f8080611694565b630b135d3f60e11b90565b50630b135d3f60e11b9392505050565b50611701602085015160408401519085611770565b611674565b905042115f611650565b905f61173c61049a61173060209460405192839187830160209181520190565b6040519182809261112e565b039060025afa15610543575f5190611644565b8051602010156102fd5760400190565b9081518110156102fd570160200190565b5f9291839260208251920151906020815191015191604051936020850195865260408501526060840152608083015260a082015260a081526117b181610187565b519060145afa6117bf611332565b816117f1575b816117ce575090565b80915051601f10156102fd57603f01516001600160f81b031916600160f81b1490565b805160201491506117c5565b6040519061180a82610116565b6015825274113a3cb832911d113bb2b130baba34371733b2ba1160591b6020830152565b906101d0600161185e936040519485916c1131b430b63632b733b2911d1160991b6020840152602d83019061112e565b601160f91b815203601e198101855201836101a2565b611881906020939261112e565b9081520190565b90929192805160258151109081156119a7575b5061199f576118a86117fd565b6118d86118d4602084019283516118ce6118c7606088015161ffff1690565b61ffff1690565b91611a46565b1590565b611996576119316118d461191d6119186118ff966040519788916020830160209181520190565b0396611913601f19988981018352826101a2565b611ab6565b61182e565b83516118ce6118c7604088015161ffff1690565b611996575f611949602092516040519182809261112e565b039060025afa15610543576119805f9161173060209484519251611974604051948592898401611874565b039081018352826101a2565b039060025afa156105435761025c915f51611770565b50505050505f90565b505050505f90565b6119d691506119c96119bb6118d49261174f565b516001600160f81b03191690565b60808401511515906119dc565b5f61189b565b906001600160f81b0319600160f81b831601611a405780611a30575b611a2b57601f60fb1b600160fb1b821601611a14575b50600190565b600160fc1b90811614611a27575f611a0e565b5f90565b505f90565b50600160fa1b81811614156119f8565b50505f90565b9182519282515f5b858110611a6057505050505050600190565b808401808511610de15782811015611aab576001600160f81b0319611a9281611a89858861175f565b5116928861175f565b511603611aa157600101611a4e565b5050505050505f90565b505050505050505f90565b80516060929181611ac5575050565b9092506003906002916003600286010460021b91604051957f4142434445464748494a4b4c4d4e4f505152535455565758595a616263646566601f52603f947f6768696a6b6c6d6e6f707172737475767778797a303132333435363738392d5f603f5260208801858901946020860197602085870101936004838651985f88525b0194838651818160121c16515f538181600c1c1651600153818160061c16518553165185535f51815201938a851015611b83576004908490611b46565b5050505095505f936003936040925201604052066002048093035203825256feb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6a26469706673582212206014f2eceac49085af0b8cd22b3553ae511092738d5e23dd47a05d6b8356794664736f6c63430008190033'

type ExperimentalDelegationConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>

const isSuperArgs = (
  xs: ExperimentalDelegationConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1

export class ExperimentalDelegation__factory extends ContractFactory {
  constructor(...args: ExperimentalDelegationConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args)
    } else {
      super(_abi, _bytecode, args[0])
    }
  }

  override deploy(
    _destinationSettler: string,
    overrides?: Overrides & { from?: string },
  ): Promise<ExperimentalDelegation> {
    return super.deploy(
      _destinationSettler,
      overrides || {},
    ) as Promise<ExperimentalDelegation>
  }
  override getDeployTransaction(
    _destinationSettler: string,
    overrides?: Overrides & { from?: string },
  ): TransactionRequest {
    return super.getDeployTransaction(_destinationSettler, overrides || {})
  }
  override attach(address: string): ExperimentalDelegation {
    return super.attach(address) as ExperimentalDelegation
  }
  override connect(signer: Signer): ExperimentalDelegation__factory {
    return super.connect(signer) as ExperimentalDelegation__factory
  }

  static readonly bytecode = _bytecode
  static readonly abi = _abi
  static createInterface(): ExperimentalDelegationInterface {
    return new utils.Interface(_abi) as ExperimentalDelegationInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): ExperimentalDelegation {
    return new Contract(
      address,
      _abi,
      signerOrProvider,
    ) as ExperimentalDelegation
  }
}