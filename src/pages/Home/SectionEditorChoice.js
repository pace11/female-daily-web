import React from 'react'
import Section from '../../common/components/Section'
import { EditorChoiceCard } from '../../common/components/Card'

function SectionEditorChoice({ items }) {
  return (
    <Section
      padding="1rem 6rem"
      title={`Editor's Choice`}
      subtitle="Curated with love"
      center
    >
      {items &&
        items.map(item => (
          <EditorChoiceCard
            imageUrl={item.product['image']}
            name={item.product['name']}
            description={item.product['description']}
            rating={item.product['rating']}
            editor={item.editor}
            role={item.role}
          />
        ))}
    </Section>
  )
}

export default SectionEditorChoice
