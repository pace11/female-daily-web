import React from 'react'
import Section from '../../common/components/Section'
import HorizontalScroll from '../../common/components/Horizontal'
import { LatestReviewCard } from '../../common/components/Card'

function SectionLatestReview({ items }) {
  return (
    <Section
      padding="1rem 6rem"
      title="Latest Review"
      subtitle="So you can make better purchase decision"
      detail="/latestreview"
      center
    >
      <HorizontalScroll>
        {items &&
          items.map(item => (
            <LatestReviewCard
              imageUrl={item.product['image']}
              name={item.product['name']}
              desc={item.product['desc']}
              rating={item.star}
              user={item.user}
              profile={item.profile}
              comment={item.comment}
            />
          ))}
      </HorizontalScroll>
    </Section>
  )
}

export default SectionLatestReview
