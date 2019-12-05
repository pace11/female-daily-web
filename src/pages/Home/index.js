import React from 'react'
import styled from 'styled-components'
import Header from '../../common/components/Header'
import Section from '../../common/components/Section'
import {
  EditorChoiceCard,
  LatestArticleCard,
} from '../../common/components/Card'

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
          title="Editor Choice"
          subtitle="Currated with love"
          linkTo="/detail"
          center
        >
          <EditorChoiceCard />
          <EditorChoiceCard />
          <EditorChoiceCard />
          <EditorChoiceCard />
          <EditorChoiceCard />
        </Section>
        <Section
          padding="1rem 5rem"
          title="Latest Articles"
          subtitle="Unravel more beauty"
          linkTo="/detail"
          center
        >
          <LatestArticleCard />
          <LatestArticleCard />
          <LatestArticleCard />
        </Section>
      </Container>
    </React.Fragment>
  )
}
