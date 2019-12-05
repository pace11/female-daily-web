import React from 'react'
import styled from 'styled-components'

const StyledHorizontal = styled.div`
  display: flex;
  overflow: auto;
  flex-wrap: nowrap;
  height: 100%;
`

export default function Horizontal({ children }) {
  return <StyledHorizontal>{children}</StyledHorizontal>
}
