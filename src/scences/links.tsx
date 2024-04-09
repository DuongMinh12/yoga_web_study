import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {page: String}

const Links = ({page}: Props) => {
  return (
    <AnchorLink>{page}</AnchorLink>
  )
}

export default Links