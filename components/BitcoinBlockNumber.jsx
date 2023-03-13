import { useEffect, useState } from 'react'

const BitcoinBlockNumber = () => {
  const [blockNumber, setBlockNumber] = useState('Loading...')

  useEffect(() => {
    // Get block number
    async function fetchBlockNumber() {
      const response = await fetch('https://blockchain.info/q/getblockcount')
      const data = await response.text()
      setBlockNumber(data)
    }
  }, [])

  return <div>Bitcoin Block Number: {blockNumber}</div>
}

export default BitcoinBlockNumber
