import React from 'react'
import { Search } from '@material-ui/icons'
import styled from 'styled-components'
import theme from '../../theme'
import FemaleDailySvg from '../../../assets/icons/FemaleDaily'

const StyledMainHeader = styled.div`
  display: flex;
  flex-direction: row;
  z-index: ${theme.zIndex.header};
  position: fixed;
  height: 60px;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${theme.colors.white};
  border-bottom: 1px solid ${theme.colors.gray};
`

const StyledMainHeaderCategories = styled(StyledMainHeader)`
  align-items: center;
  justify-content: center;
  top: 61px;
  height: 44px;
`

const WrapperItems = styled.div`
  display: flex;
  padding: 0rem 1rem;
  align-items: center;
  justify-content: center;
  width: ${props => (props.block ? '100%' : 'auto')};
`

const WrapperCategories = styled(WrapperItems)`
  text-transform: uppercase;
  font-size: 11pt;
  :hover {
    color: ${theme.colors.red};
    cursor: pointer;
  }
`

const WrapperInput = styled.div`
  position: relative;
  width: 100%;
`

const SearchIcon = styled(Search)`
  position: absolute;
  color: ${theme.colors.gray}
  left: 5px;
  top: 7px;
`

const WrapperLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0rem 1rem;
  position: relative;
  background-color: ${theme.colors.red};
  width: 224px;
  height: 100%;
  right: 0;
  color: ${theme.colors.white};
  text-transform: uppercase;
  :hover {
    cursor: pointer;
  }
`

const Hamburger = styled.div`
  width: 20px;
  height: 16px;
  > div {
    background: ${theme.colors.black};
    width: 100%;
    height: 2px;
    border-radius: 4px;
    &:not(:last-child) {
      margin-bottom: 5px;
    }
  }
`

const StyledInput = styled.input.attrs(() => ({
  type: 'text',
  placeholder: 'Search products, articles, topics, brands, etc',
}))`
  width: 100%;
  box-sizing: border-box;
  padding: 0.625rem;
  border: 1px solid ${theme.colors.gray_light};
  border-radius: 3px;
  outline: none;
  color: ${theme.colors.black};
  font-size: 11pt;
  padding-left: 35px;
  ::placeholder {
    color: ${theme.colors.gray};
  }
`

const FemaleDailyIcon = styled(FemaleDailySvg)`
  transform: scale(1);
  left: 0;
`

function Header() {
  return (
    <React.Fragment>
      <StyledMainHeader>
        <WrapperItems>
          <Hamburger>
            <div />
            <div />
            <div />
          </Hamburger>
        </WrapperItems>
        <WrapperItems>
          <FemaleDailyIcon />
        </WrapperItems>
        <WrapperItems block>
          <WrapperInput>
            <SearchIcon />
            <StyledInput />
          </WrapperInput>
        </WrapperItems>
        <WrapperLogin>Login / Signup</WrapperLogin>
      </StyledMainHeader>
      <StyledMainHeaderCategories>
        <WrapperCategories>Skin Care</WrapperCategories>
        <WrapperCategories>Make Up</WrapperCategories>
        <WrapperCategories>Body</WrapperCategories>
        <WrapperCategories>Hair</WrapperCategories>
        <WrapperCategories>Fragrance</WrapperCategories>
        <WrapperCategories>Nails</WrapperCategories>
        <WrapperCategories>Tools</WrapperCategories>
        <WrapperCategories>Brands</WrapperCategories>
      </StyledMainHeaderCategories>
    </React.Fragment>
  )
}

export default Header
