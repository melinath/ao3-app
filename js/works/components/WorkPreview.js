import React, { PureComponent } from 'react'
import { TouchableHighlight, View, Text } from 'react-native'
import type { NavigationScreenProp, NavigationStateRoute } from 'react-navigation'

import SymbolBox from './SymbolBox'
import styles from '../../styles'
import type { WorkPreview as WorkPreviewType } from '../../types'

type Props = {
	item: WorkPreviewType,
	navigation: NavigationScreenProp<NavigationStateRoute>,
}


export default class WorkPreview extends PureComponent<Props> {
	constructor(props: Props) {
		super(props);

		(this:any).navigateWorkDetail = this.navigateWorkDetail.bind(this);
	}

	navigateWorkDetail() {
		this.props.navigation.navigate('WorkDetail', {item: this.props.item})
	}

	render() {
		const {
			item,
			navigation,
		} = this.props

		return (
			<TouchableHighlight
				onPress={this.navigateWorkDetail}
				style={styles.listItem}
				underlayColor="#007AFF"
			>
				<View style={{minHeight: 50}}>
					<View style={{flex: 1, flexDirection: 'row'}}>
						<SymbolBox
							rating={item.rating}
							categories={item.categories}
							warnings={item.warnings}
							iswip={item.iswip}
							navigation={navigation}
						/>
						<View style={{ paddingLeft: 10, paddingRight: 10, flex: 1 }}>
							<Text style={styles.listItemHeader}>{item.title}</Text>
							<Text>{item.authors.map(({ label }) => label).join(', ')}</Text>
						</View>
					</View>
				</View>
			</TouchableHighlight>
		)
	}
}
