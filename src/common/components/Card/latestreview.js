import React from 'react'
import styled from 'styled-components'
import Rating from '../../components/Rating'
import theme from '../../theme'

const StyledCard = styled.div`
  padding: 30px;
  width: 480px;
  height: auto;
  position: relative;
`

const StyledBody = styled.div`
  display: inline-block;
  padding: 20px;
  width: 100%;
  height: 250px;
  border: 1px solid ${theme.colors.gray};
  border-radius: 20px;
`

const StyledMenuUser = styled.div`
  padding: 0px 20px;
  margin-top: -25px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledMenuProfileUser = styled.div`
  padding: 0px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  > p {
    color: ${theme.colors.gray_dark};
    font-size: 16px;
  }
  > small {
    color: ${theme.colors.gray_light2};
  }
`

const StyledMenuTop = styled.div`
  height: 100px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${theme.colors.gray};
`

const StyledMenuBottom = styled.div`
  display: inline-block;
  min-height: 150px;
  width: 100%;
`

const StyledImage = styled.div`
  background-image: url(${props => props.imageUrl});
  background-repeat: no-repeat;
  background-size: contain;
  width: 65px;
  height: 78px;
`

const StyledProductName = styled.div`
  width: auto;
  height: auto;
  p {
    color: ${theme.colors.black};
    &:not(:last-child) {
      font-weight: 900;
      text-transform: uppercase;
      margin-bottom: -10px;
    }
  }
`

const StyledReview = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  height: 25px;
  p {
    margin-top: 5px;
    font-size: 11px;
    color: ${theme.colors.gray_light2};
  }
`

const WrapperRating = styled.span`
  display: inline-block;
  margin-top: -5px;
  width: 130px;
`

const StyledComment = styled.div`
  display: flex;
  color: ${theme.colors.gray_dark};
  font-size: 14px;
  text {
    color: ${theme.colors.red};
    font-size: 14px;
  }
`

const WrapperImageUser = styled.div`
  width: 45px;
  height: 45px;
  border: 1px solid ${theme.colors.gray};
  border-radius: 50%;
  background-image: url(${props => props.imageUser});
  background-repeat: no-repeat;
  background-size: contain;
`

function LatestReviewCard({
  imageUrl,
  imageUser,
  name,
  desc,
  rating,
  user,
  comment,
}) {
  return (
    <StyledCard>
      <StyledBody>
        <StyledMenuTop>
          <StyledImage imageUrl={imageUrl} />
          <StyledProductName>
            <p>{name}</p>
            <p>{desc}</p>
          </StyledProductName>
        </StyledMenuTop>
        <StyledMenuBottom>
          <StyledReview>
            <WrapperRating>
              <Rating rating={rating} />
            </WrapperRating>
            <p>a few seconds ago</p>
          </StyledReview>
          <StyledComment>{comment} ...</StyledComment>
        </StyledMenuBottom>
      </StyledBody>
      <StyledMenuUser>
        <WrapperImageUser imageUser={imageUser} />
      </StyledMenuUser>
      <StyledMenuProfileUser>
        <p>{user}</p>
      </StyledMenuProfileUser>
    </StyledCard>
  )
}

LatestReviewCard.defaultProps = {
  imageUrl:
    'https://static.femaledaily.com/dyn/480/images/prod-pics/product_1525323944_Tonymoly_D_800x800.jpg',
  imageUser:
    'https://static.femaledaily.com/dyn/70/images/user-pics/8cfa98979828b03949df998669bcca01.jpg',
  name: 'Tony Moly',
  desc: 'Delight Tony Tint',
  rating: 5,
  user: 'atikaxr',
  profile: ['Oily', 'Medium Dark', 'Warm', '19-24'],
  comment:
    'liptint pertamaku haha dengan harga yang affordable udah bisa membuat korean look di wajahku (ga cocok si haha), cairrr, mudah kering jadi',
}

export default LatestReviewCard
