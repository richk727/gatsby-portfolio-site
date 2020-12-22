import styled from 'styled-components'
import { Hex2RGBA } from '../utils/CommonFunctions'

const PortfolioShortCardStyles = styled.a`
  position: relative;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1),
    0px 15px 35px rgba(50, 50, 93, 0.1), 0px 50px 100px rgba(50, 50, 93, 0.05);
  border-radius: 8px;
  overflow: hidden;
  &:hover,
  &:focus {
    .image-overlay {
      background-color: ${props => Hex2RGBA(props.color, 0.95)};
      .gatsby-image-wrapper {
        opacity: 0;
        transform: translateY(-20%);
      }
    }
    .content {
      transform: translateY(0);
      opacity: 1;
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
    }
    .gatsby-image-wrapper {
      border-radius: 8px;
      overflow: hidden;
    }
  }

  .image-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: grid;
    place-items: center;
    background-color: ${props => Hex2RGBA(props.color, 0.85)};
    border-radius: 8px;
    overflow: hidden;
    transition: all 225ms ease-in-out;

    .gatsby-image-wrapper {
      width: 200px;
      transition: all 225ms ease-in-out;
    }
  }

  .content {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: grid;
    place-items: center;
    padding: 2rem;
    align-items: center;
    justify-content: center;
    text-align: center;
    transform: translateY(50%);
    opacity: 0;
    transition: all 325ms ease-in-out;

    h3 {
      color: #fff;
      margin: 0;
      font-size: 2rem;
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
      justify-content: center;
      gap: 8px;
      list-style: none;
      margin: 0;
      padding: 0;
      li {
        color: #fff;
        margin: 0;
      }
    }
    .btn {
      color: #fff;
    }
  }
`
export default PortfolioShortCardStyles
