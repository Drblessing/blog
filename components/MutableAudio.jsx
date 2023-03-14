import { useState } from 'react'

const MutableAudio = ({ src, ...props }) => {
  const [audio, setAudio] = useState(src)
  const [playing, setPlaying] = useState(false)

  const toggle = () => setPlaying(!playing)
  // Return clickable mute icon
  return 'placeholder'
}

export default MutableAudio
