import React, { useEffect } from 'react'
import HeroSection from './components/HeroSection'
import { useGlobalContext } from './context'


export default function Services() {

  const {updateServicePage} = useGlobalContext();

  useEffect(() =>updateServicePage() , []);

  return (
    <HeroSection/>
  )
}
