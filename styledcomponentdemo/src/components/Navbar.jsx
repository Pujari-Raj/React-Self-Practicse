import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {CgMenu, CgCloseR} from 'react-icons/cg'

export default function Navbar() {

  const [openMenu, setOpenMenu] = useState(false);

   const Nav = styled.nav`
    .navbar-list{
        display: flex;
        gap: 4.8rem;

        li{
            list-style-type: none;

            .nav-link {

                &:link,
                &:visited{
                    display: inline-block;
                    text-decoration: none;
                    font-size: 1.5rem;
                    text-transform: capitalize;
                    color: ${({theme}) => theme.colors.black};                   
                    transition: color 0.3s linear;
                }


                &:hover,
                &:active{
                    color: ${({theme}) => theme.colors.helper };
                    font-weight: 600;
                }
            }
        }
    }

    .mobile-navbar-icon {
      display: none;

      .close-outline{
        display: none;
      }
    }

    .mobile-navbar-icon[name="close-outline"] {
      display: none;
    }

    @media (max-width: ${({theme}) => theme.media.mobile }) {
      .mobile-navbar-icon{
        display: inline-block;
        z-index: 999;
        border: ${({theme}) => theme.colors.black};

        .mobile-nav-icon {
          font-size: 4.2rem;
          color: ${({theme}) => theme.colors.black};
        }
      }

      .navbar-list{
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        visibility: hidden;
        opacity: 0;
        transform: translateX(100%);
        li{
            list-style-type: none;

            .nav-link {

                &:link,
                &:visited{
                    font-size: 4.2rem;
                }
                &:hover,
                &:active{
                    color: ${({theme}) => theme.colors.helper };
                    font-weight: 600;
                }
            }
        }
      }

      .active .mobile-nav-icon{
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 3%;
        right: 10%;
        color: ${({theme}) => theme.colors.black};
        z-index: 999;
      }

      .active .close-outline{
        display: inline-block;
      }

      .active .navbar-list{
        visibility: visible;
        opacity: 1;
        z-index: 999;
        transform: translateX(0);
      }
    }
   `; 
  return (
    <Nav>
      <div className={openMenu ? "menuIcon active": "menuIcon"}>
        <ul className="navbar-list">
          <li>
            <NavLink className="nav-link" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/about" >About</NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/service" >Services </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/contact" >Contact</NavLink>
          </li>
        </ul>
        {/* Mobile Menu */}
        <div className="mobile-navbar-icon">
          <CgMenu name="menu-outline" className="mobile-nav-icon"
          onClick={() => setOpenMenu(true)} />
          <CgCloseR name="close-outline" className="close-outline mobile-nav-icon"
          onClick={() => setOpenMenu(false)}/>
        </div>
      </div>
    </Nav>
  );
}
