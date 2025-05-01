import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import YtVieo from './components/YtVideo/YtVieo'
import TweetSection from './components/TweetLove/TweetSection'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <HeroSection />
    <YtVieo />
    <TweetSection />
    </>
  )
}

export default App
