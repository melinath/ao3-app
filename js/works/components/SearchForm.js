import React, { PureComponent } from 'react'
import { Button, View, TextInput, Picker, Switch, Text } from 'react-native'

import languages from '../languages'
import styles from '../../styles'
import type { SearchParams } from '../../types'


type Props = {
  onSubmit: (data: SearchParams) => void,
}


export default class Search extends PureComponent<Props, SearchParams> {
	constructor(props: Props) {
		super(props);

    (this:any).onSubmit = this.onSubmit.bind(this)

		this.state = {}
	}

	onSubmit() {
		this.props.onSubmit(this.state)
	}

	render() {
		return (
			<View>
        <TextInput
          autoCapitalize="none"
					onChangeText={value => this.setState({query: value ? value : undefined})}
					value={this.state.query ? this.state.query : ''}
				/>
				<Picker
					onValueChange={value => this.setState({language_id: value ? value : undefined})}
					selectedValue={this.state.language_id ? this.state.language_id : ''}
				>
					<Picker.Item label="No language selected" value="" />
					{languages.map(([ value, label ]) => (
						<Picker.Item
							key={value}
							label={label}
							value={value}
						/>
					))}
				</Picker>
        <Button
          onPress={this.onSubmit}
          title="Search"
        />
			</View>
		)
	}
}
