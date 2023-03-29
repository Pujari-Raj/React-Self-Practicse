import React, { useEffect } from 'react'
import HeroSection from './components/HeroSection'
import { useGlobalContext } from './context'

export default function Home() {
    /* This can use when we to access data using */

  // const data = {
  //   name : "Thapa Technical",
  //   image : "./images/hero.svg"
  // }

  const {updateHomePage} = useGlobalContext();

  useEffect(() =>updateHomePage() , []);

  return (
    /* This can use when we to access data using */

    // <HeroSection {...data} />
    <HeroSection />
  )
}
