import { useEffect, useRef, useState } from 'react'
import useSWR from 'swr'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.text()
  return parseInt(data)
}

const BitcoinBlockNumber = ({ isMuted }) => {
  const audioRef = useRef(null)
  const [isMounted, setIsMounted] = useState(false)

  const bitcoinBlockTime = 1000 * 60 * 5
  const { data: blockNumber, error } = useSWR('https://blockchain.info/q/getblockcount', fetcher, {
    refreshInterval: bitcoinBlockTime,
    dedupingInterval: bitcoinBlockTime,
    revalidateOnMount: true,
    refreshWhenHidden: true,
  })

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true)
      return
    }
    audioRef.current.play()
  }, [blockNumber, isMuted])

  if (error)
    return (
      <div>
        Bitcoin Block Number:
        <span className="text-red-500"> Error</span>
      </div>
    )
  return (
    <div>
      <audio ref={audioRef} muted={isMuted} src="/static/newBitcoinBlock.mp3" />
      Bitcoin Block Number: {blockNumber ? blockNumber.toLocaleString() : 'Loading ...'}
    </div>
  )
}

export default BitcoinBlockNumber
