import { useEffect, useState } from 'react'
import useSWR from 'swr'

const BitcoinBlockNumber = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json())

  const [blockNumber, setBlockNumber] = useState('Loading...')
  // useSWR to get ethereum block number from api
  const { data, error } = useSWR('api/hello', fetcher, { refreshInterval: 1000 })

  console.log(data?.text)
  useEffect(() => {
    // Get block number
    async function fetchBlockNumber() {
      const response = await fetch('https://blockchain.info/q/getblockcount')
      const data = await response.text()
      setBlockNumber(data)
    }
  }, [])

  return <div>Bitcoin Block Number: {data?.text}</div>
}

export default BitcoinBlockNumber
