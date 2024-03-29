import { useEffect, useRef, useState } from 'react'
import useSWR from 'swr'
import { getBaseUrl } from '@/lib/utils/getBaseUrl'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = (await res.json()).blockNumber
  return data
}

const EthereumBlockNumber = ({ isMuted }) => {
  const audioRef = useRef(null)
  const [isMounted, setIsMounted] = useState(false)
  const apiUrl = getBaseUrl() + '/api/getEthBlockNumber'
  const { data: ethereumBlockNumber, error } = useSWR(apiUrl, fetcher, {
    refreshInterval: 3000,
    dedupingInterval: 3000,
    revalidateOnMount: true,
    refreshWhenHidden: true,
  })
  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true)
      return
    }
    setTimeout(() => {
      audioRef.current.play().catch((err) => {
        // Do nothing
      })
    }, 10) // add a 10 millisecond delay before playing the audio
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
      <audio ref={audioRef} muted={isMuted} src="/static/newEthereumBlock.mp3" />
      Ethereum Block Height:{' '}
      {ethereumBlockNumber ? ethereumBlockNumber.toLocaleString() : 'Loading ...'}{' '}
    </div>
  )
}

export default EthereumBlockNumber
