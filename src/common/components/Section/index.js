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
  display: inline-block;
  height: 100%;
  width: 100%;
  ${props =>
    props.center &&
    css`
      justify-content: center;
      align-items: center;
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

/**
 *
 * @param {String} props.padding
 * @param {String} props.margin
 * @param {String} props.backgroundColor
 * @param {String} props.borderRadius
 * @param {String} props.title
 * @param {String} props.subtitle
 * @param {String} props.linkTo
 * @param {Boolean} props.center
 */
function Section({
  padding,
  margin,
  backgroundColor,
  borderRadius,
  title,
  subtitle,
  linkTo,
  center,
  children,
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
