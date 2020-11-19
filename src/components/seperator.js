import React from 'react'
import styled from 'styled-components'

const SeperatorLine = styled.div`
  position: relative;
  height: 1px;
  width: 80%;
  max-width: 540px;
  margin: 3rem auto;
  background: #000;
  opacity: 0.1;
  @media (min-width: 768px) {
    margin: 4rem auto;
  }
  @media (min-width: 900px) {
    margin: 5rem 0;
  }
`

const Seperator = () => <SeperatorLine />

export default Seperator
