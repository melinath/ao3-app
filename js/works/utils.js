import cheerio from 'react-native-cheerio'

export const extractWorkPreviews = (text: string) => {
	const $ = cheerio.load(text)

	const works = []
	$('li.work').each((index, element) => {
		const $element = $(element)
		works.push({
			key: $element.attr('id'),
			title: $element.find('h4 a').first().text(),
			author: $element.find('h4 a').last().text(),
		})
	})
	return works
}
