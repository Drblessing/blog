import { useState, useEffect } from 'react'
import TypeAnimation from 'react-type-animation'
import greetings from '@/lib/greetings'

const GreetingChanger = () => {
  const [index, setIndex] = useState(0)

  const changeGreeting = () => {
    const newIndex = Math.floor(Math.random() * greetings.length)
    setIndex(newIndex)
  }

  useEffect(() => {
    const interval = setInterval(changeGreeting, 4000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <TypeAnimation
      // Same String at the start will only be typed once, initially
      sequence={[
        'We produce food for Mice',
        1000,
        'We produce food for Hamsters',
        1000,
        'We produce food for Guinea Pigs',
        1000,
        'We produce food for Chinchillas',
        1000,
      ]}
      speed={50} // Custom Speed from 1-99 - Default Speed: 40
      style={{ fontSize: '2em' }}
      wrapper="span" // Animation will be rendered as a <span>
      repeat={Infinity} // Repeat this Animation Sequence infinitely
    />
  )
}

export default GreetingChanger
