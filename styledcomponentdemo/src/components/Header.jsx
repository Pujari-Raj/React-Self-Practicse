import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from './Navbar'

export default function Header() {

  const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({theme}) => theme.colors.bg };
  display: flex;
  align-items: center;
  justify-content: center;

  .logo {
    height: auto;
    max-width: 30%;
  }
  `;

  return (
    <MainHeader>
        <NavLink to="/">
            <img src="./images/logo.png" className='logo' alt="" srcset="" />
        </NavLink>
        <Navbar/>
    </MainHeader>
  )
}
