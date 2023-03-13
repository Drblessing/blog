// Get eth block nubmer with web3 and nextjs
import Web3 from 'web3'

let cache = {
  timestamp: null,
  data: null,
}

export default async function handler(req, res) {
  const now = new Date().getTime()
  const TEN_SECONDS = 10000

  // Check if cache exists and is not stale
  if (cache.timestamp && now - cache.timestamp < TEN_SECONDS) {
    return res.status(200).json({ blockNumber: cache.data })
  }

  const web3 = new Web3(new Web3.providers.HttpProvider(process.env.ETHEREUM_RPC))
  const blockNumber = await web3.eth.getBlockNumber()

  // Update cache
  cache.timestamp = now
  cache.data = blockNumber

  res.status(200).json({ blockNumber: blockNumber })
}
