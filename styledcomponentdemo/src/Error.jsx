import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from './components/Button';

export default function Error() {

    const Wrapper = styled.section`
    padding: 9rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .back-btn {
    font-size: 1.8rem;
    margin-top: 3rem;
  }
    `;
  return (
    <div>
        <Wrapper>
            <img src="../images/error.svg" alt="" srcset="" />
            <NavLink>
                <Button className='back-btn'>Go Back</Button>
            </NavLink>
        </Wrapper>
    </div>
  )
}
