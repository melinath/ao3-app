import React, { PureComponent } from 'react'

import { Image } from 'react-native'


type Props = {
  tag: string,
}


const IMAGE_SOURCES = {
  'Teen And Up Audiences': require('../../../assets/images/rating-teen.png'),
  'Mature': require('../../../assets/images/rating-mature.png'),
  'Explicit': require('../../../assets/images/rating-explicit.png'),
  'General Audiences': require('../../../assets/images/rating-general-audience.png'),
  'Not Rated': require('../../../assets/images/rating-notrated.png'),

  'F/F': require('../../../assets/images/category-femslash.png'),
  'Gen': require('../../../assets/images/category-gen.png'),
  'F/M': require('../../../assets/images/category-het.png'),
  'Multi': require('../../../assets/images/category-multi.png'),
  'No category': require('../../../assets/images/category-none.png'),
  'Other': require('../../../assets/images/category-other.png'),
  'M/M': require('../../../assets/images/category-slash.png'),

  'Choose Not To Use Archive Warnings': require('../../../assets/images/warning-choosenotto.png'),
  'No Archive Warnings Apply': require('../../../assets/images/warning-no.png'),
  'Graphic Depictions Of Violence': require('../../../assets/images/warning-yes.png'),

  'Work in Progress': require('../../../assets/images/complete-no.png'),
  'Complete Work': require('../../../assets/images/complete-yes.png'),
}


export default class Symbol extends PureComponent<Props> {
  render() {
    const {
      tag,
    } = this.props
    if (!IMAGE_SOURCES[tag]) return null

    return (
      <Image
        source={IMAGE_SOURCES[tag]}
      />
    )
  }
}
