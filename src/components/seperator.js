import React from "react"
import styled from 'styled-components';

const SeperatorLine = styled.div`
    position: relative;
    height: 1px;
    width: 80%;
    max-width: 540px;
    margin: 5rem auto;
    background: #000;
    opacity: 0.1;

    @media (min-width: 900px) {
      margin: 5rem 0;
    }
`;

const Seperator = () => {
  return (
    <SeperatorLine></SeperatorLine>
  )
}

export default Seperator
