import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
  margin: 0 0 2.4rem;
  color: var(--primary-accent);
  font-size: 2.125rem;
  line-height: 1.6;
`

export default function SectionTitle({ children }) {
  return <Title>/ {children}</Title>
}
