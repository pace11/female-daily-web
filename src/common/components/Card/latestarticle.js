import React from 'react'
import styled from 'styled-components'
import theme from '../../theme'

const StyledCard = styled.div`
  display: inline-block;
  padding: 10px;
  width: 330px;
  height: auto;
`

const WrapperImage = styled.div`
  width: 100%;
  height: 180px;
  background-image: url(${props => props.imageUrl});
  background-size: contain;
  border-radius: 5px;
`

const StyledTitle = styled.div`
  width: 100%;
  height: auto;
  font-size: 20px;
  font-weight: 900;
  color: ${theme.colors.black};
  padding: 10px 0px;
  :hover {
    color: ${theme.colors.red};
    cursor: pointer;
  }
`

const StyledText = styled.text`
  font-size: 16px;
  color: ${props => props.color};
`

function LatestArticleCard({ imageUrl, title, author, publishedAt }) {
  return (
    <StyledCard>
      <WrapperImage imageUrl={imageUrl} />
      <StyledTitle>{title}</StyledTitle>
      <StyledText color={theme.colors.gray_dark}>{author}</StyledText>
      <StyledText color={theme.colors.gray_light2}>
        {' '}
        | {publishedAt}
      </StyledText>
    </StyledCard>
  )
}

LatestArticleCard.defaultProps = {
  imageUrl:
    'https://imgcdn.femaledaily.com/2019/06/5-makeup-tools-3-Copy.jpg',
  title: 'Brush dan Alat Makeup Yang Paling Sering Digunakan',
  author: 'celle',
  publishedAt: '4 hours ago',
}

export default LatestArticleCard
