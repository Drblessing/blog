import { useEffect, useRef, useState } from 'react'

const BitcoinBlockNumber = () => {
  const [blockNumber, setBlockNumber] = useState(null)
  const firstTimeRef = useRef(false)

  useEffect(() => {
    const audio = new Audio('/static/newBitcoinBlock.mp3')
    async function fetchBlockNumber() {
      const response = await fetch('https://blockchain.info/q/getblockcount')
      const data = await response.text()

      if (firstTimeRef.current) {
        // Play the sound if block number has changed
        if (data !== blockNumber || false) {
          audio.play()
        }
      }
      setBlockNumber(parseInt(data))
      firstTimeRef.current = true
    }

    fetchBlockNumber()

    const intervalId = setInterval(fetchBlockNumber, 13_000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div>Bitcoin Block Number: {blockNumber ? blockNumber.toLocaleString() : 'Loading ...'} </div>
  )
}

export default BitcoinBlockNumber
