import {
  LoadingIndicator,
  Status,
  type StatusT,
} from '@/components/LoadingIndicator'
import { Button } from '@/components/ui'
import { W } from 'porto/wagmi'
import { useEffect, useState } from 'react'
import {
  generatePrivateKey,
  privateKeyToAccount,
  privateKeyToAddress,
} from 'viem/accounts'
import { useConnectors } from 'wagmi'
import { Spinner } from './Spinner'

const privateKey =
  '7c4f71dcefadff6a5104f6eb359c0514b5f874bc22f7e684576ee9decc847491'

export function Onboarding() {
  return (
    <div className="container max-w-sm items-center flex flex-col gap-6">
      <Connect />
      <ImportAccount />
    </div>
  )
}

function Connect() {
  const connectors = useConnectors()
  const connect = W.useConnect()

  return (
    <div className="flex flex-col gap-4">
      {connectors
        .filter((x) => x.id === 'xyz.ithaca.porto')
        ?.map((connector) => (
          <div className="flex gap-6" key={connector.uid}>
            <Button
              key={connector.uid}
              onClick={() => connect.mutate({ connector, grantSession: true })}
              type="button"
            >
              Log In
            </Button>
          </div>
        ))}
      <div>{connect.error?.message}</div>
    </div>
  )
}

function ImportAccount() {
  const [status, setStatus] = useState<StatusT>(Status.SUCCESS)
  const [accountData, setAccountData] = useState<{
    address: string
    privateKey: string
  } | null>(null)
  const [grantSession, setGrantSession] = useState<boolean>(true)
  const [privateKey, setPrivateKey] = useState<string>('')

  const connectors = useConnectors()
  const importAccount = W.useImportAccount()

  if (importAccount.error) {
  }

  useEffect(() => {
    if (
      importAccount.status === 'success' ||
      importAccount.status === 'error'
    ) {
      setStatus(importAccount.status)
    }
  }, [importAccount.status])

  return (
    <>
      <div className="flex gap-4 relative">
        <Button
          onClick={() => {
            const privateKey = generatePrivateKey()
            setPrivateKey(privateKey)
            setAccountData({
              privateKey,
              address: privateKeyToAddress(privateKey),
            })
            setStatus(Status.PENDING)

            importAccount.mutate({
              account: privateKeyToAccount(privateKey),
              connector: connectors.find(
                (conn) => conn.id === 'xyz.ithaca.porto',
              )!,
              grantSession: true,
            })
          }}
          type="button"
        >
          Create Wallet
        </Button>
        <div className="absolute flex items-center justify-center -right-12 w-10 h-full">
          <Spinner status={status} />
        </div>
      </div>
    </>
  )
}
