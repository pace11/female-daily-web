import React from 'react'
import Section from '../../common/components/Section'
import { LatestArticleCard } from '../../common/components/Card'

/**
 *
 * @param {Array <any>} props.items
 */
function SectionLatestArticles({ items }) {
  return (
    <Section
      padding="1rem 6rem"
      title="Latest Articles"
      subtitle="Unravel more beauty"
      linkTo="/latestarticles"
      center
    >
      {items &&
        items.map(item => (
          <LatestArticleCard
            imageUrl={item.image}
            title={item.title}
            author={item.author}
            publishedAt={item.published_at}
          />
        ))}
    </Section>
  )
}

export default SectionLatestArticles
