import React, { PureComponent } from 'react'
import { TouchableHighlight, View, Text } from 'react-native'
import type { NavigationScreenProp } from 'react-navigation'

import Symbol from './Symbol'
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
						<View style={{width: 50, height: 50, flexDirection: 'column'}}>
							<View style={{width: 25, flexDirection: 'row'}}>
								<Symbol tag={item.rating} />
								<Symbol tag={item.category} />
							</View>
							<View style={{width: 25, flexDirection: 'row'}}>
								<Symbol tag={item.warnings} />
								<Symbol tag={item.iswip} />
							</View>
						</View>
						<View style={{ paddingLeft: 10, paddingRight: 10 }}>
							<Text style={styles.listItemHeader}>{item.title}</Text>
							<Text>{item.author.label}</Text>
						</View>
					</View>
				</View>
			</TouchableHighlight>
		)
	}
}
