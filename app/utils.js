export const extractWorkPreview = ($element) => {
	const data = {
		key: $element.attr('id'),
		title: $element.find('h4 a').first().text(),
		author: $element.find('h4 a').last().text(),
	}
	return data
}
