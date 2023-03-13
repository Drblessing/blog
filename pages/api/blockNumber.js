// Get eth block nubmer with web3 and nextjs
import Web3 from 'web3'

export default async function handler(req, res) {
  const web3 = new Web3(new Web3.providers.HttpProvider(process.env.ETHEREUM_RPC))
  const blockNumber = await web3.eth.getBlockNumber()

  res.status(200).json({ blockNumber: blockNumber })
}
