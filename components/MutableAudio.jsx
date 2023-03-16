import { useState } from 'react'
import { BiVolumeMute, BiVolumeFull } from 'react-icons/bi'
import BitcoinBlockNumber from './BitcoinBlockNumber'
import EthereumBlockNumber from './EthereumBlockNumber'

const MutableAudio = () => {
  // Keep track of mutable state and pass to children
  const [isMuted, setIsMuted] = useState(true)

  const toggle = () => setIsMuted(!isMuted)
  // Return clickable mute icon
  return (
    <>
      {/* <h1 className="text-xl font-extrabold">Block Tracker</h1> */}
      <div className="flex items-center">
        {isMuted ? (
          <BiVolumeMute className="cursor-pointer text-2xl text-gray-500" onClick={toggle} />
        ) : (
          <BiVolumeFull className="cursor-pointer text-2xl text-gray-500" onClick={toggle} />
        )}
      </div>
      <div className="flex items-center">
        <EthereumBlockNumber isMuted={isMuted} />
      </div>
      <div className="flex items-center">
        <BitcoinBlockNumber isMuted={isMuted} />
      </div>
      <br />
      <hr
        className="border border-gray-200 dark:border-gray-700"
        style={{ borderTopWidth: '0.1px' }}
      />
    </>
  )
}
export default MutableAudio
