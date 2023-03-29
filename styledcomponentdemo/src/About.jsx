import React, { useEffect } from 'react'
import HeroSection from './components/HeroSection'
import { useGlobalContext } from './context'

export default function About() {

    /* This can use when we to access data using */

  // const data = {
  //   name : "Vinod Thapa",
  //   image : "./images/about1.svg"
  // }

  const {updateHomePage} = useGlobalContext();

  useEffect(() =>updateHomePage(), []);


  return (
    /* This can use when we to access data using */

    // <HeroSection {...data} />
    <HeroSection/>
  )
}
