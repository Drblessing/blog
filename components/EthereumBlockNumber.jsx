import { useEffect, useRef, useState } from 'react'

const EthereumBlockNumber = () => {
  const [blockNumber, setBlockNumber] = useState(null)
  const firstTimeRef = useRef(false)

  useEffect(() => {
    const audio = new Audio('/static/newBlock.mp3')
    async function fetchBlockNumber() {
      const response = await fetch('api/blockNumber')
      const data = await response.json()

      if (firstTimeRef.current) {
        // Play the sound if block number has changed
        if (data.blockNumber !== blockNumber) {
          audio.play()
        }
      }
      setBlockNumber(data.blockNumber)
      firstTimeRef.current = true
    }

    fetchBlockNumber()
    const intervalId = setInterval(fetchBlockNumber, 13_000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div>Ethereum Block Number: {blockNumber ? blockNumber.toLocaleString() : 'Loading ...'} </div>
  )
}

export default EthereumBlockNumber
