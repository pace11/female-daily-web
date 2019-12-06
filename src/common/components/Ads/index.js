import React from 'react'
import styled from 'styled-components'
import theme from '../../theme'

const StyledAds = styled.div`
  display: flex;
  width: 970px;
  height: 250px;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.gray_dark};
  color: ${theme.colors.white};
`

function Ads() {
  return <StyledAds>Billboard Banner ( 970px x 250px)</StyledAds>
}

export default Ads
