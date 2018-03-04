import React, { PureComponent } from 'react'
import { TouchableHighlight, View, Text } from 'react-native'
import type { NavigationScreenProp, NavigationStateRoute } from 'react-navigation'

import ExpandableText from './ExpandableText'
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
						<View style={{width: 50}}>
							<SymbolBox
								rating={item.rating}
								categories={item.categories}
								warnings={item.warnings}
								iswip={item.iswip}
								navigation={navigation}
							/>
							<Text>{item.publish_date}</Text>
						</View>
						<View style={{ paddingLeft: 10, paddingRight: 10, flex: 1 }}>
							<Text>
								<Text style={styles.listItemHeader}>{item.title}</Text>
								{item.authors.length && (
									<Text> by {item.authors.map(({ label }) => label).join(', ')}</Text>
								)}
							</Text>
							<Text>{item.fandoms.map(({ label }) => label).join(', ')}</Text>
							<Text style={{ fontWeight: 'bold' }}>{item.warnings.map(({ label }) => label).join(', ')}</Text>
							{item.relationships.length > 0 && (
								<ExpandableText>
									<Text>{item.relationships.map(({ label }) => label).join(', ')}</Text>
								</ExpandableText>
							)}
							{item.characters.length > 0 && (
								<ExpandableText>
									<Text>{item.characters.map(({ label }) => label).join(', ')}</Text>
								</ExpandableText>
							)}
							{item.tags.length > 0 && (
								<ExpandableText>
									<Text>{item.tags.map(({ label }) => label).join(', ')}</Text>
								</ExpandableText>
							)}
							{item.summary ? (
								<View style={{ paddingTop: 5 }}>
									<ExpandableText>
										<Text>{item.summary}</Text>
									</ExpandableText>
								</View>
							) : null}
							<View style={{flexWrap: 'wrap', flexDirection: 'row', paddingTop: 5}}>
								<View style={{paddingRight: 10}}><Text>Language: {item.language}</Text></View>
								<View style={{paddingRight: 10}}><Text>Words: {item.words}</Text></View>
								{item.chapters ? <View style={{paddingRight: 10}}><Text>Chapters: {item.chapters}</Text></View> : null}
								<View style={{paddingRight: 10}}><Text>Hits: {item.hits}</Text></View>
							</View>
						</View>
					</View>
				</View>
			</TouchableHighlight>
		)
	}
}
