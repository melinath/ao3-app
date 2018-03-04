import React, { PureComponent } from 'react'
import { Image, TouchableHighlight, View, Text } from 'react-native'
import type { NavigationScreenProp, NavigationStateRoute } from 'react-navigation'


type Props = {
  rating: string,
  categories: Array<string>,
  warnings: Array<string>,
  iswip: string,
	navigation: NavigationScreenProp<NavigationStateRoute>,
}


const RATINGS = {
  'General Audiences': {
    symbol: require('../../../assets/images/rating-general-audience.png'),
    description: <Text>General Audiences</Text>,
  },
  'Teen And Up Audiences': {
    symbol: require('../../../assets/images/rating-teen.png'),
    description: <Text>Teen And Up Audiences</Text>,
  },
  'Mature': {
    symbol: require('../../../assets/images/rating-mature.png'),
    description: <Text>Mature</Text>,
  },
  'Explicit': {
    symbol: require('../../../assets/images/rating-explicit.png'),
    description: <Text>Explicit</Text>,
  },
  'Not Rated': {
    symbol: require('../../../assets/images/rating-notrated.png'),
    description: <Text>This work was not given any rating</Text>,
  },
}

const CATEGORIES = {
  'F/F': {
    symbol: require('../../../assets/images/category-femslash.png'),
    description: <Text>Female/female relationships</Text>,
  },
  'F/M': {
    symbol: require('../../../assets/images/category-het.png'),
    description: <Text>Female/male relationships</Text>,
  },
  'Gen': {
    symbol: require('../../../assets/images/category-gen.png'),
    description: <Text>No romantic or sexual relationships, or relationships which are not the main focus of the work</Text>,
  },
  'M/M': {
    symbol: require('../../../assets/images/category-slash.png'),
    description: <Text>Male/male relationships</Text>,
  },
  'Multi': {
    symbol: require('../../../assets/images/category-multi.png'),
    description: <Text>More than one kind of relationship, or a relationship with multiple partners</Text>,
  },
  'Other': {
    symbol: require('../../../assets/images/category-other.png'),
    description: <Text>Other relationships</Text>,
  },
  'No category': {
    symbol: require('../../../assets/images/category-none.png'),
    description: <Text>This work was not put in any categories</Text>,
  },
}

const WARNINGS = {
  'Choose Not To Use Archive Warnings': {
    symbol: require('../../../assets/images/warning-choosenotto.png'),
    description: <Text>The author chose not to warn for content, or Archive Warnings <Text style={{ fontStyle: 'italic' }}>could</Text> apply, but the author has chosen not to specify them.</Text>,
  },
  'Archive Warnings Apply': {
    symbol: require('../../../assets/images/warning-yes.png'),
    description: <Text>At least one of these warnings applies: graphic depictions of violence, major character death, rape/non-con, underage sex. The specific warnings are shown in the Archive Warnings tags.</Text>,
  },
  'No Archive Warnings Apply': {
    symbol: require('../../../assets/images/warning-no.png'),
    description: <Text>The work was not marked with any Archive Warnings. Please note that an author may have included other information about their work in the Additional Tags (Genre, Warnings, Other Information) section.</Text>,
  },
  'External Work': {
    symbol: require('../../../assets/images/warning-external-work.png'),
    description: <Text>This is an external work; please consult the work itself for warnings</Text>,
  },
}

const ISWIP = {
  'Work in Progress': {
    symbol: require('../../../assets/images/complete-no.png'),
    description: <Text>This is a work in progress or is incomplete/unfulfilled</Text>,
  },
  'Complete Work': {
    symbol: require('../../../assets/images/complete-yes.png'),
    description: <Text>This work is completed!/This prompt is filled!</Text>,
  },
  'External Work': {
    symbol: require('../../../assets/images/warning-external-work.png'),
    description: <Text>This is an external work; please consult the work itself for completion status</Text>,
  },
  'Status Unknown': {
    symbol: require('../../../assets/images/complete-unknown.png'),
    description: <Text>This work&rsquo;s status is unknown</Text>,
  }
}


export default class SymbolBox extends PureComponent<Props> {
  constructor(props: Props) {
    super(props);

    (this:any).openSymbolModal = this.openSymbolModal.bind(this);
  }

  getSymbolKeys() {
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

    return {
      rating,
      category,
      warning,
      iswip,
    }
  }

  openSymbolModal() {
    const {
      rating,
      category,
      warning,
      iswip,
    } = this.getSymbolKeys()

    this.props.navigation.navigate('SymbolModal', {
      symbols: [
        RATINGS[rating],
        CATEGORIES[category],
        WARNINGS[warning],
        ISWIP[iswip],
      ],
    })
  }

  render() {
    const {
      rating,
      category,
      warning,
      iswip,
    } = this.getSymbolKeys()

    return (
      <TouchableHighlight onPress={this.openSymbolModal}>
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
      </TouchableHighlight>
    )
  }
}
