import React, { PureComponent } from 'react'
import { TouchableHighlight, View, Text } from 'react-native'
import type { NavigationScreenProp } from 'react-navigation'

import SymbolBox from './SymbolBox'
import styles from '../../styles'
import type { NavigationState, WorkPreview as WorkPreviewType } from '../../types'

type Props = {
	item: WorkPreviewType,
	navigation: NavigationScreenProp<NavigationState>,
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
						/>
						<View style={{ paddingLeft: 10, paddingRight: 10 }}>
							<Text style={styles.listItemHeader}>{item.title}</Text>
							<Text>{item.authors.map(({ label }) => label).join(', ')}</Text>
						</View>
					</View>
				</View>
			</TouchableHighlight>
		)
	}
}
