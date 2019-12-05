import React from 'react'
import styled from 'styled-components'
import Header from '../../common/components/Header'
import Section from '../../common/components/Section'
import Horizontal from '../../common/components/Horizontal'
import { LatestReviewCard } from '../../common/components/Card'

const Container = styled.div`
  margin-top: 100px;
`

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <Section
          padding="1rem 5rem"
          title="Latest Articles"
          subtitle="Unravel more beauty"
          linkTo="/detail"
          center
        >
          <Horizontal>
            <LatestReviewCard />
            <LatestReviewCard />
          </Horizontal>
        </Section>
      </Container>
    </React.Fragment>
  )
}
