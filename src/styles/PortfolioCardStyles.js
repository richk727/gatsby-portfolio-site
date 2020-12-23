import styled from 'styled-components'

import { device } from './devices'

const PortfolioCardStyles = styled.article`
  display: grid;
  gap: 48px;
  max-width: 516px;

  @media ${device.lg} {
    grid-template-columns: 1fr 420px;
    gap: 70px;
    max-width: 100%;

    &:nth-of-type(odd) {
      grid-template-columns: 420px 1fr;
      .media {
        place-items: end;
        order: 2;
      }
    }
  }

  .media {
    position: relative;
    display: grid;
    place-items: start;
    .image-container {
      position: relative;
      width: 100%;
      max-width: 516px;
      border-radius: 8px;

      box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1),
        0px 15px 35px rgba(50, 50, 93, 0.1),
        0px 50px 100px rgba(50, 50, 93, 0.05);
    }
    .gatsby-image-wrapper {
      border-radius: 8px;
      overflow: hidden;
    }
  }

  .content {
    display: grid;
    align-items: center;
    h3 {
      margin: 0;
      font-size: 5.188rem;
      font-weight: 700;
      line-height: 1.2;
    }
    .text {
      display: grid;
      gap: 1.6rem;

      p {
        font-size: 17px;
      }
    }
    &__meta {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      margin: 0;
      padding: 0;
      li {
        margin: 0;
      }
    }
  }
`
export default PortfolioCardStyles
