import React from 'react'
import PropTypes from 'prop-types'
import CollectionItem from '../collection-item/collection-item.component'
import './collection-preview.styles.scss'

const CollectionPreview = ({ title, items }) => {
  return (
    <section className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <article className="preview">
        {items.filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemsProps }) => (
            <CollectionItem key={id} {...otherItemsProps} />
          ))}
      </article>
    </section>
  )
}
CollectionPreview.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
}

export default CollectionPreview
