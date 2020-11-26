import React from 'react'
import styled from 'styled-components'

const Subheading = styled.h2`
  margin: 0 0 5.5rem;
  color: var(--heading-color);
  font-family: var(--heading-font);
  font-size: 3.32rem;
  line-height: 1.2;
`

export default function SectionSubheading({ children }) {
  return <Subheading>{children}</Subheading>
}
