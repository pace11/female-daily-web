import React from 'react'
import styled from 'styled-components'
import Rating from '../../components/Rating'
import theme from '../../theme'

const WrapperCard = styled.div`
  display: inline-block;
  position: relative;
  width: 190px;
  padding: 10px;
  min-height: 400px;
`

const StyledProfileEditor = styled.div`
  display: flex;
  position: absolute;
  z-index: ${theme.zIndex.imageEditor};
`

const WrapperImage = styled.div`
  margin-left: 10px;
  width: 60px;
  height: 60px;
  border: 1px solid ${theme.colors.gray};
  background-image: url(${props => props.imageEditorUrl});
  background-size: cover;
  border-radius: 50%;
`

const StyledDetailEditor = styled.div`
  margin-top: -30px;
  padding: 8px;
  width: auto;
  height: auto;
  z-index: ${theme.zIndex.imageEditor};
  p {
    color: ${theme.colors.gray_dark};
    margin-bottom: 5px;
  }
  small {
    color: ${theme.colors.gray_light2};
  }
`

const StyledContent = styled.div`
  display: inline-block;
  position: absolute;
  background: ${theme.colors.white};
  width: 198px;
  height: 351px;
  margin: 45px 0px 0px 0px;
  border-radius: 5px;
  border: 1px solid ${theme.colors.gray};
  z-index: ${theme.zIndex.card};
`

const StyledImage = styled.div`
  background-image: url(${props => props.imageUrl});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 100%;
  height: 180px;
  border-radius: 5px 5px 0px 0px;
  background-color: ${theme.colors.white};
  overflow: hidden;
`

const StyledTitle = styled.div`
  margin-top: 20px;
  margin-bottom: -14px;
  height: auto;
  padding: 8px;
  font-size: 14pt;
  font-weight: 900;
  text-transform: uppercase;
  color: ${theme.colors.black};
  :hover {
    color: ${theme.colors.red};
    cursor: pointer;
  }
`

const StyledDescription = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.2;
  padding: 8px;
  height: 30px;
  font-size: 12pt;
  color: ${theme.colors.black};
  :hover {
    color: ${theme.colors.red};
    cursor: pointer;
  }
`

/**
 *
 * @param {String} props.imageUrl
 * @param {String} props.imageEditorUrl
 * @param {String} props.name
 * @param {String} props.description
 * @param {Number} props.rating
 * @param {String} props.editor
 * @param {String} props.role
 */
function EditorChoiceCard({
  imageUrl,
  imageEditorUrl,
  name,
  description,
  rating,
  editor,
  role,
}) {
  return (
    <React.Fragment>
      <WrapperCard>
        <StyledProfileEditor>
          <WrapperImage imageEditorUrl={imageEditorUrl} />
          <StyledDetailEditor>
            <p>{editor}</p>
            <small>{role}</small>
          </StyledDetailEditor>
        </StyledProfileEditor>
        <StyledContent>
          <StyledImage imageUrl={imageUrl} />
          <Rating rating={rating} withNumber />
          <StyledTitle>{name}</StyledTitle>
          <StyledDescription>{description}</StyledDescription>
        </StyledContent>
      </WrapperCard>
    </React.Fragment>
  )
}

EditorChoiceCard.defaultProps = {
  imageEditorUrl:
    'https://static.femaledaily.com/dyn/70/images/user-pics/8cfa98979828b03949df998669bcca01.jpg',
  imageUrl:
    'https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png',
  name: 'Y.O.U Makeups',
  description: 'Rouge Velvet Matte Lip Cream',
  rating: 4,
  editor: 'annedean',
  role: 'Associate Editor',
}

export default EditorChoiceCard
