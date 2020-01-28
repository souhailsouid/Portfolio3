import React from 'react'

import MenuItem from '../menu-item/menu-item.component'

import './directory.styles.scss'

class Directory extends React.Component {
  constructor () {
    super()

    this.state = {
      sections: [
        {
          title: 'duck vador',
          imageUrl: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Designs/5d63a65b1e35cd00177161ac/thumbnail.png',
          id: 1,
          linkUrl: 'shop'
        },
        {
          title: 'hacking the world',
          imageUrl: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Designs/5d63fdef516de00017eb5d5c/thumbnail.png',
          id: 2,
          linkUrl: 'test'
        },
        {
          title: 'coding the art',
          imageUrl: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Designs/5e01e3edc74acc0049563d06/thumbnail.png',
          id: 3,
          linkUrl: 'shop/coding2art'
        },
        {
          title: 'femmes',
          imageUrl: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Designs/5d63fdae15a5080010de9f59/thumbnail.png',
          size: 'large',
          id: 4,
          linkUrl: 'shop/femmes'
        },
        {
          title: 'hommes',
          imageUrl: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Designs/5d72832b516de00017eb6281/thumbnail.png',
          size: 'large',
          id: 5,
          linkUrl: 'shop/hommes'
        }
      ]
    }
  }

  render () {
    const { sections } = this.state

    return (
      <section className='directory-menu'>
        {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </section>

    )
  }
}

export default Directory
