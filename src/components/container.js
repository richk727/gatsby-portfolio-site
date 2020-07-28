import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components';

const ContainerWrapper = styled.div`
    width: 90%;
    max-width: 1080px;
    margin: 0 auto;
`;

const Container = ({ children }) => {
  return (
    <ContainerWrapper>
        {children}
    </ContainerWrapper>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container
