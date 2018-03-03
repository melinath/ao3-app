import React, { PureComponent } from 'react'

import { Image, View } from 'react-native'


type Props = {
  rating: string,
  categories: Array<string>,
  warnings: Array<string>,
  iswip: string,
}


const RATINGS = {
  'General Audiences': {
    symbol: require('../../../assets/images/rating-general-audience.png'),
    description: 'General Audiences',
  },
  'Teen And Up Audiences': {
    symbol: require('../../../assets/images/rating-teen.png'),
    description: 'Teen And Up Audiences',
  },
  'Mature': {
    symbol: require('../../../assets/images/rating-mature.png'),
    description: 'Mature',
  },
  'Explicit': {
    symbol: require('../../../assets/images/rating-explicit.png'),
    description: 'Explicit',
  },
  'Not Rated': {
    symbol: require('../../../assets/images/rating-notrated.png'),
    description: 'This work was not given any rating',
  },
}

const CATEGORIES = {
  'F/F': {
    symbol: require('../../../assets/images/category-femslash.png'),
    description: 'Female/female relationships',
  },
  'F/M': {
    symbol: require('../../../assets/images/category-het.png'),
    description: 'Female/male relationships',
  },
  'Gen': {
    symbol: require('../../../assets/images/category-gen.png'),
    description: 'No romantic or sexual relationships, or relationships which are not the main focus of the work',
  },
  'M/M': {
    symbol: require('../../../assets/images/category-slash.png'),
    description: 'Male/male relationships',
  },
  'Multi': {
    symbol: require('../../../assets/images/category-multi.png'),
    description: 'More than one kind of relationship, or a relationship with multiple partners',
  },
  'Other': {
    symbol: require('../../../assets/images/category-other.png'),
    description: 'Other relationships',
  },
  'No category': {
    symbol: require('../../../assets/images/category-none.png'),
    description: 'This work was not put in any categories',
  },
}

const WARNINGS = {
  'Choose Not To Use Archive Warnings': {
    symbol: require('../../../assets/images/warning-choosenotto.png'),
    description: 'The author chose not to warn for content, or Archive Warnings _could_ apply, but the author has chosen not to specify them.',
  },
  'Archive Warnings Apply': {
    symbol: require('../../../assets/images/warning-yes.png'),
    description: 'At least one of these warnings applies: graphic depictions of violence, major character death, rape/non-con, underage sex. The specific warnings are shown in the Archive Warnings tags.',
  },
  'No Archive Warnings Apply': {
    symbol: require('../../../assets/images/warning-no.png'),
    description: 'The work was not marked with any Archive Warnings. Please note that an author may have included other information about their worrk in the Additional Tags (Genre, Warrnings, Other Information) section.',
  },
  'External Work': {
    symbol: require('../../../assets/images/warning-external-work.png'),
    description: 'This is an external work; please consult the work itself for warnings',
  },
}

const ISWIP = {
  'Work in Progress': {
    symbol: require('../../../assets/images/complete-no.png'),
    description: 'This is a work in progress or is incomplete/unfulfilled',
  },
  'Complete Work': {
    symbol: require('../../../assets/images/complete-yes.png'),
    description: 'This work is completed!/This prompt is filled!',
  },
  'External Work': {
    symbol: require('../../../assets/images/warning-external-work.png'),
    description: 'This is an external work; please consult the work itself for completion status',
  },
  'Status Unknown': {
    symbol: require('../../../assets/images/complete-unknown.png'),
    description: "This work's status is unknown",
  }
}


export default class Symbol extends PureComponent<Props> {
  render() {
    const {
      rating,
      categories,
      warnings,
      iswip,
    } = this.props

    const category = categories.length > 1 ? 'Multi' : categories[0]

    let warning = 'Archive Warnings Apply'
    if (warnings.length == 1 && WARNINGS[warnings[0]]) {
      warning = warnings[0]
    }

    return (
      <View style={{width: 50, height: 50, flexDirection: 'column'}}>
        <View style={{width: 25, flexDirection: 'row'}}>
          <Image source={RATINGS[rating].symbol} />
          <Image source={CATEGORIES[category].symbol} />
        </View>
        <View style={{width: 25, flexDirection: 'row'}}>
          <Image source={WARNINGS[warning].symbol} />
          <Image source={ISWIP[iswip].symbol} />
        </View>
      </View>
    )
  }
}
