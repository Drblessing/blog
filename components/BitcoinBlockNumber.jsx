import { useEffect, useRef, useState } from 'react'
import useSWR from 'swr'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.text()
  return parseInt(data)
}

const BitcoinBlockNumber = ({ isMuted }) => {
  const bitcoinBlockTime = 1000 * 60 * 5
  const [isMounted, setIsMounted] = useState(false)

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
    const audio = new Audio('/static/newBitcoinBlock.mp3')
    // Play the sound if block number or isMuted has changed
    if (!isMuted) {
      audio.play().catch((err) => {
        // Ignore the error
      })
    }
  }, [blockNumber, isMuted])

  if (error)
    return (
      <div>
        Bitcoin Block Number:
        <span className="text-red-500"> Error</span>
      </div>
    )
  return (
    <div>Bitcoin Block Number: {blockNumber ? blockNumber.toLocaleString() : 'Loading ...'}</div>
  )
}

export default BitcoinBlockNumber
