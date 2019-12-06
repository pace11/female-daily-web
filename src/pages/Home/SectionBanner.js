import React from 'react'
import styled from 'styled-components'
import Section from '../../common/components/Section'
import BannerImage from '../../assets/images/banner_matches_visitor.png'

const StyledBody = styled.div`
  width: 100%;
  height: 400px;
  background-image: url(${BannerImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

function SectionBanner({ items }) {
  return (
    <Section padding="1rem 0rem">
      <StyledBody />
    </Section>
  )
}

export default SectionBanner
