import React from 'react'
import { useStoreDispatch, useStoreState } from 'easy-peasy'
import styled from 'styled-components'
import Header from '../../common/components/Header'
import SectionEditorChoice from './SectionEditorChoice'
import SectionLatestArticles from './SectionLatestArticles'
import SectionLatestReview from './SectionLatestReview'
import SectionAds from './SectionAds'
import SectionBanner from './SectionBanner'

const Container = styled.div`
  margin-top: 100px;
`

export default function Home() {
  const dispatch = useStoreDispatch()
  const { Home: stateHome } = useStoreState(
    globalState => globalState,
  )

  React.useEffect(() => {
    dispatch.Home.getHome()
  }, [dispatch.Home])

  const { initialState } = stateHome
  const { data } = initialState

  let resp = JSON.parse(
    JSON.stringify(data)
      .replace(/\s(?=\w+":)/g, '')
      .replace(/[']/g, ''),
  )

  console.log(resp && resp.editorschoice)

  return (
    <React.Fragment>
      <Header />
      <Container>
        {resp && (
          <React.Fragment>
            <SectionAds />
            <SectionEditorChoice items={resp.editorschoice} />
            <SectionBanner />
            <SectionLatestArticles items={resp.latestarticles} />
            <SectionLatestReview items={resp.latestreview} />
          </React.Fragment>
        )}
      </Container>
    </React.Fragment>
  )
}
