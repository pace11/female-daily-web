import React from 'react'
import styled from 'styled-components'
import Header from '../../common/components/Header'
import Section from '../../common/components/Section'

const Container = styled.div`
  margin-top: 100px;
`

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <Section
          padding="1rem 1rem"
          title="Choice Now"
          subtitle="Hehehe"
          linkTo="/detail"
          center
        >
          Ini isinya
        </Section>
      </Container>
    </React.Fragment>
  )
}
