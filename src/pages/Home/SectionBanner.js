import React from 'react'
import styled from 'styled-components'
import Section from '../../common/components/Section'
import theme from '../../common/theme'
import BannerImage from '../../assets/images/banner_matches_visitor.png'

const StyledBody = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${BannerImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

const StyledContent = styled.div`
  padding: 1rem 12rem;
  display: inline-block
  width: 320px;
  height: auto
`

const StyledTitle = styled.div`
  width: 100%;
  height: auto;
  font-size: 26px;
  color: ${theme.colors.black};
  font-weight: 900;
  margin-bottom: 15px;
`

const StyledDesc = styled.div`
  width: 100%;
  height: auto;
  font-size: 20px;
  color: ${theme.colors.black};
  font-weight: 500;
  line-height: 1.3;
  margin-bottom: 15px;
`

const StyledAction = styled.div`
  width: 100%;
  height: auto;
`

const ButtonLogin = styled.button`
  border: none;
  border-radius: 5px;
  background-color: ${theme.colors.red};
  color: ${theme.colors.white};
  font-size: 16px;
  height: 45px;
  outline: none;
  padding: 0.5rem 1rem;
  :active {
    opacity: 0.7;
  }
  :hover {
    cursor: pointer;
  }
`

function SectionBanner() {
  return (
    <Section padding="1rem 0rem">
      <StyledBody>
        <StyledContent>
          <StyledTitle>
            Psst! We give product matches that will be perfect for
            you!
          </StyledTitle>
          <StyledDesc>
            They will fit your skin, hair, body, AND they solve your
            beauty concerns at the same time. Sign up and complete
            your Beauty ID now!
          </StyledDesc>
          <StyledAction>
            <ButtonLogin>Login / Sign Up</ButtonLogin>
          </StyledAction>
        </StyledContent>
      </StyledBody>
    </Section>
  )
}

export default SectionBanner
