import React from 'react'
import styled, { css } from 'styled-components'
import { ArrowForwardIos } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import theme from '../../theme'

const StyledSection = styled.section`
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  background-color: ${props => props.backgroundColor};
`

const StyledBody = styled.div`
  ${props =>
    props.center &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}
`

const StyledPanel = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`

const StyledTitle = styled.div`
  width: auto;
`

const Title = styled.p`
  font-size: 22px;
  font-weight: bold;
  color: ${theme.colors.black};
`

const Subtitle = styled(Title)`
  margin-top: -20px;
  font-size: 20px;
  color: ${theme.colors.gray};
`

const StyledLink = styled(Link)`
  position: relative;
  width: 100px;
  height: auto;
  margin-top: 35px;
  text-decoration: none;
  color: ${theme.colors.red};
  div {
    position: absolute;
  }
`

const LinkTitle = styled.div`
  width: auto;
  font-size: 18px;
`

const WrapperIcon = styled.div`
  width: auto;
  margin-left: 80px;
`

function Section({
  padding,
  margin,
  backgroundColor,
  borderRadius,
  title,
  subtitle,
  linkTo,
  children,
  center,
}) {
  return (
    <StyledSection
      padding={padding}
      margin={margin}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
    >
      <StyledPanel>
        <StyledTitle>
          {title && title.length > 0 && <Title>{title}</Title>}
          {subtitle && subtitle.length > 0 && (
            <Subtitle>{subtitle}</Subtitle>
          )}
        </StyledTitle>
        {linkTo && linkTo.length > 0 && (
          <StyledLink to={linkTo}>
            <LinkTitle>See More</LinkTitle>
            <WrapperIcon>
              <ArrowForwardIos />
            </WrapperIcon>
          </StyledLink>
        )}
      </StyledPanel>
      <StyledBody center={center}>{children}</StyledBody>
    </StyledSection>
  )
}

Section.defaultProps = {
  padding: '0.625rem 0',
  margin: '0px 0px 0px 0px',
  backgroundColor: theme.colors.white,
  title: '',
  subtitle: '',
  linkTo: '',
  center: false,
}

export default Section
