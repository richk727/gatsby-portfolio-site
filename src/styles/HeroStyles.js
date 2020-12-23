import styled from 'styled-components'
import { device } from './devices'

export const HeroBodyStyles = styled.div``

export const HeroBgStyles = styled.div``

export const HeroGridStyles = styled.div`
  display: grid;

  grid-gap: 1.6rem;
  @media ${device.md} {
    grid-template-columns: 540px 1fr;
  }
`

export const HeroTextStyles = styled.div`
  color: var(--heading-color);
  font-family: var(--heading-font);
  padding: 0 0 12.8rem;
  order: 2;

  @media ${device.md} {
    order: -1;
    padding: 12.8rem 0;
  }
  .intro {
    margin-bottom: 0.8rem;
    font-size: 1.7rem;
    font-weight: 600;
    line-height: 1.5;
    @media ${device.md} {
      margin-bottom: 1.6rem;
      font-size: 2.125rem;
    }
  }
  h1 {
    margin: 0 0 2.4rem;
    color: var(--primary-accent);
    font-size: 8rem;
    line-height: 0.8;
    transform: translateX(-6px);
    @media ${device.md} {
      margin: 0 0 3.2rem;
      font-size: 10rem;
    }
  }
  .subheading {
    margin-bottom: 3rem;
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 1.3;
    @media ${device.md} {
      font-size: 2.656rem;
    }
  }

  .button {
    display: inline-block;
    align-items: center;
    width: 200px;
    padding: 12px 24px;
    font-weight: 700;
    text-align: center;
    text-decoration: none;
    border-radius: 4px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1),
      0px 15px 35px rgba(50, 50, 93, 0.1), 0px 50px 100px rgba(50, 50, 93, 0.05);
    transition: all 225ms ease-in-out;
  }

  .button--primary {
    color: #fff;
    background-color: var(--primary-accent);

    &:hover {
      transform: translateY(2px);
      background-color: #4764ff;
      box-shadow: 0px 5px 15px rgba(0, 0, 0, 0),
        0px 15px 35px rgba(50, 50, 93, 0), 0px 50px 100px rgba(50, 50, 93, 0);
    }
  }
`

export const HeroImageStyles = styled.div`
  max-width: 66.66%;
  margin: 0 auto;
  @media (min-width: 1440px) {
    max-width: calc(100% + 180px);
    width: 150%;
  }
`
