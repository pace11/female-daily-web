import React from 'react'
import styled, { css } from 'styled-components'
import { Star } from '@material-ui/icons'
import theme from '../../theme'

const StyledRating = styled.div`
  position: relative;
  padding: 8px;
  height: auto;
  color: ${theme.colors.gray_alt};
  div {
    position: absolute;
    font-size: 13pt;
  }
  margin-bottom: 10px;
`

const WrapperNumber = styled.div`
  width: auto;
`

const WrapperRatingSvg = styled.div`
  width: auto;
  ${props =>
    props.withNumber &&
    css`
      margin-left: 25px;
    `}
`

/**
 *
 * @param {Number} props.rating
 * @param {Boolean} props.withNumber
 */
function Rating({ rating, withNumber }) {
  const TmpStar = []
  for (let i = 0; i < 5; i += 1) {
    TmpStar.push(
      i < rating ? (
        <Star
          key={String(i)}
          style={{ color: `${theme.colors.red}` }}
          fontSize="small"
        />
      ) : (
        <Star
          key={String(i)}
          style={{ color: `${theme.colors.gray}` }}
          fontSize="small"
        />
      ),
    )
  }
  return (
    <StyledRating>
      {withNumber && <WrapperNumber>{rating}</WrapperNumber>}
      <WrapperRatingSvg withNumber={withNumber}>
        {TmpStar}
      </WrapperRatingSvg>
    </StyledRating>
  )
}

Rating.defaultProps = {
  rating: 5,
  withNumber: false,
}

export default Rating
