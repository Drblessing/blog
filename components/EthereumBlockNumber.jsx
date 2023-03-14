import { useEffect, useRef, useState } from 'react'

const EthereumBlockNumber = () => {
  const [blockNumber, setBlockNumber] = useState(null)
  const testRef = useRef(false)

  useEffect(() => {
    const audio = new Audio('/static/newBlock.mp3')
    async function fetchBlockNumber() {
      const response = await fetch('api/blockNumber')
      const data = await response.json()

      if (testRef.current) {
        audio.play()
      }
      setBlockNumber(data.blockNumber)
      testRef.current = true
    }

    fetchBlockNumber()
    const intervalId = setInterval(fetchBlockNumber, 15000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div>Ethereum Block Number: {blockNumber ? blockNumber.toLocaleString() : 'Loading ...'} </div>
  )
}

export default EthereumBlockNumber
