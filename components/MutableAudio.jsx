import { useState } from 'react'
import { BiVolumeMute, BiVolumeFull } from 'react-icons/bi'
import BitcoinBlockNumber from './BitcoinBlockNumber'
import EthereumBlockNumber from './EthereumBlockNumber'

const MutableAudio = () => {
  // Keep track of mutable state and pass to children
  const [isMuted, setIsMuted] = useState(false)

  const toggle = () => setIsMuted(!isMuted)
  // Return clickable mute icon
  return (
    <>
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
    </>
  )
}
export default MutableAudio
