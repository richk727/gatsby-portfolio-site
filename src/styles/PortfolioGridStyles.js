import styled from 'styled-components'
import { device } from './devices'

const PortfolioGridStyles = styled.div`
  display: grid;
  grid-gap: 6.4rem;
  justify-content: center;
  margin-top: 12.8rem;
  margin-bottom: 12.8rem;

  @media ${device.lg} {
    grid-gap: 12.8rem;
    margin-top: -1rem;
  }
`

export default PortfolioGridStyles
