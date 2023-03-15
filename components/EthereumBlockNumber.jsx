import { useEffect, useRef, useState } from 'react'
import useSWR from 'swr'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = (await res.json()).blockNumber
  return data
}

const EthereumBlockNumber = ({ isMuted }) => {
  const audioRef = useRef(null)
  const [isMounted, setIsMounted] = useState(false)

  const { data: ethereumBlockNumber, error } = useSWR('api/getEthBlockNumber', fetcher, {
    refreshInterval: 10000,
    dedupingInterval: 10000,
    revalidateOnMount: true,
    refreshWhenHidden: true,
  })

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true)
      return
    }

    const audio = new Audio('/static/newEthereumBlock.mp3')
    // Play the sound if block number or isMuted has changed
    if (!isMuted) {
      audio.play().catch((err) => {
        // Ignore the error
      })
    }
  }, [ethereumBlockNumber, isMuted])

  if (error)
    return (
      <div>
        Ethereum Block Number:
        <span className="text-red-500"> Error</span>
      </div>
    )

  return (
    <div>
      <audio ref={audioRef} src="/static/newEthereumBlock.mp3" />
      Ethereum Block Number:
      {ethereumBlockNumber ? ethereumBlockNumber.toLocaleString() : 'Loading ...'}{' '}
    </div>
  )
}

export default EthereumBlockNumber
