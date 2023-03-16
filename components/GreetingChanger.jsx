import { TypeAnimation } from 'react-type-animation'
import greetings from '@/lib/greetings'

/**
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param  {Array} array The array to shuffle
 * @return {Array}       The shuffled array
 */
function shuffle(array) {
  let currentIndex = array.length
  let temporaryValue, randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

const GreetingChanger = () => {
  // Shuffle greetings but start with hello
  const hello = greetings[0]
  const shuffledGreetings = shuffle(greetings.slice(1))
  // Add hello to the beginning of the shuffled greetings
  shuffledGreetings.unshift(hello)
  // Add 4s delay between each element in the greetings array
  // We need to make greetings = [greetings[0],4000,grettings[1],4000,...]
  const newGreetings = []
  shuffledGreetings.forEach((greeting) => {
    newGreetings.push(greeting)
    newGreetings.push(3000)
  })

  return (
    <TypeAnimation
      sequence={newGreetings}
      speed={1} // Custom Speed from 1-99 - Default Speed: 40
      repeat={Infinity} // Repeat this Animation Sequence infinitely
    />
  )
}

export default GreetingChanger
