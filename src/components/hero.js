import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import Container from './Container'
import heroImage from '../images/hero-image.png'

import {
  HeroBodyStyles,
  HeroGridStyles,
  HeroTextStyles,
  HeroBgStyles,
  HeroImageStyles,
} from '../styles/HeroStyles'

export default function Hero() {
  return (
    <section id="hero">
      <HeroBodyStyles>
        <Container>
          <HeroGridStyles>
            <HeroTextStyles>
              <p className="intro">Hello, my name is</p>
              <h1>
                Richard
                <br />
                Kaye
              </h1>
              <p className="subheading">
                I'm a web developer with over 4 years of commercial experience
                developing and implementing bespoke websites
              </p>
              <AnchorLink
                to="/#contact"
                title="Let's chat"
                className="button button--primary"
                stripHash
              />
            </HeroTextStyles>

            <HeroBgStyles>
              <HeroImageStyles>
                {/* <svg
                  className="background"
                  viewBox="0 0 590 570"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M565.878 373.414C548.932 397.692 525.162 416.373 506.362 439.333C478.759 472.994 460.9 516.697 423.526 539.151C405.849 549.754 385.393 554.495 365.344 559.095C333.122 566.501 299.734 573.906 267.259 567.651C242.366 562.868 219.776 550.329 197.649 537.959L180.141 528.141C176.28 525.953 172.376 523.808 168.473 521.62L157.101 515.252C123.713 496.458 90.5367 476.851 62.4004 450.946C31.0489 422.194 6.12769 384.354 0.946899 342.095C-5.06226 293.259 17.9354 241.968 58.399 213.904C80.5964 198.476 107.062 189.892 128.866 173.889C163.278 148.644 182.219 108.265 205.848 72.7947C249.639 7.02987 333.852 -24.443 404.768 22.3035C432.329 40.4523 453.178 67.409 468.496 96.6378C481.441 121.28 490.96 148.013 508.173 169.892C527.83 194.885 556.443 212.193 573.642 238.939C599.406 278.967 593.172 334.339 565.878 373.414Z"
                    fill="#1337FF"
                  />
                </svg>
                <svg width="0" height="0" className="clip-path">
                  <defs>
                    <clipPath
                      id="myClip"
                      clipPathUnits="objectBoundingBox"
                      transform="scale(0.001694915254237, 0.001754385964912)"
                    >
                      <path d="M565.878 373.414C548.932 397.692 525.162 416.373 506.362 439.333C478.759 472.994 460.9 516.697 423.526 539.151C405.849 549.754 385.393 554.495 365.344 559.095C333.122 566.501 299.734 573.906 267.259 567.651C242.366 562.868 219.776 550.329 197.649 537.959L180.141 528.141C176.28 525.953 172.376 523.808 168.473 521.62L157.101 515.252C123.713 496.458 90.5367 476.851 62.4004 450.946C31.0489 422.194 6.12769 384.354 0.946899 342.095C-5.06226 293.259 17.9354 241.968 58.399 213.904C80.5964 198.476 107.062 189.892 128.866 173.889C163.278 148.644 182.219 108.265 205.848 72.7947C249.639 7.02987 333.852 -24.443 404.768 22.3035C432.329 40.4523 453.178 67.409 468.496 96.6378C481.441 121.28 490.96 148.013 508.173 169.892C527.83 194.885 556.443 212.193 573.642 238.939C599.406 278.967 593.172 334.339 565.878 373.414Zz" />
                    </clipPath>
                  </defs>
                </svg> */}
                <svg fill="none" viewBox="0 0 590 570" className="outline">
                  <path
                    d="M0 0v570h590V297.637c-.08 26.66-8.768 53.797-24.121 75.777-16.946 24.278-40.718 42.958-59.518 65.918-27.603 33.661-45.462 77.364-82.836 99.818-17.677 10.603-38.132 15.346-58.181 19.946-32.222 7.406-65.61 14.81-98.084 8.554-42.063-11.138-74.058-32.187-110.158-52.398-33.388-18.794-66.565-38.402-94.702-64.307C31.05 422.193 6.128 384.355.947 342.095c-6.009-48.835 16.988-100.127 57.451-128.19 22.198-15.429 48.663-24.013 70.467-40.016 34.412-25.245 53.354-65.624 76.983-101.094C235.27 28.609 282.938-.097 332.562 0H0zm332.563 0c24.234.047 48.935 6.964 72.205 22.303 27.56 18.149 48.41 45.107 63.728 74.336 12.945 24.642 22.465 51.375 39.678 73.254 19.657 24.993 48.27 42.3 65.469 69.046 11.271 17.513 16.419 37.961 16.357 58.698V0H332.562z"
                    fill="#fff"
                    fillRule="evenodd"
                  />
                </svg>

                <img
                  className="image"
                  src={heroImage}
                  alt="Richard Kaye a UK based web developer coding away"
                />
              </HeroImageStyles>
            </HeroBgStyles>
          </HeroGridStyles>
        </Container>
      </HeroBodyStyles>
    </section>
  )
}
