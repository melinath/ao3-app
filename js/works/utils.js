import cheerio from 'react-native-cheerio'
import sanitizeHTML from 'sanitize-html'

import type { WorkPreview } from '../types'

export const extractWorkPreviews = (text: string): Array<WorkPreview> => {
	const $ = cheerio.load(text)

	const works = []
	$('li.work').each((index, element) => {
		const $element = $(element)

		// Create empty to make it unsealed.
		const work = {}
		work.key = $element.attr('id')

		const titleElement = $element.find('h4 a').first()
		work.title = titleElement.text()
		work.url = titleElement.attr('href')

		const authorElement = $element.find('h4 a').last()
		work.author = {
			label: authorElement.text(),
			url: `${authorElement.attr('href')}/works`,
		}

		work.fandoms = []
		$element.find('.fandoms .tag').each((index, fandom) => {
			const $fandom = $(fandom)
			work.fandoms.push({
				label: $fandom.text(),
				url: $fandom.attr('href'),
			})
		})

		work.rating = $element.find('.required-tags .rating').first().text()
		work.warnings = $element.find('.required-tags .warnings').first().text()
		work.category = $element.find('.required-tags .category').first().text()
		work.iswip = $element.find('.required-tags .iswip').first().text()

		work.publish_date = $element.find('.datetime').first().text()

		work.relationships = []
		$element.find('ul.tags .relationships .tag').each((index, relationship) => {
			const $relationship = $(relationship)
			work.relationships.push({
				label: $relationship.text(),
				url: $relationship.attr('href'),
			})
		})

		work.characters = []
		$element.find('ul.tags .characters .tag').each((index, character) => {
			const $character = $(character)
			work.characters.push({
				label: $character.text(),
				url: $character.attr('href'),
			})
		})

		work.tags = []
		$element.find('ul.tags .freeforms .tag').each((index, tag) => {
			const $tag = $(tag)
			work.tags.push({
				label: $tag.text(),
				url: $tag.attr('href'),
			})
		})

		work.summary = sanitizeHTML(
			$element.find('.summary').first().html(),
			{
				allowedTags: ['br'],
				allowedAttributes: {},
			},
		).replace(/<br \/>/g, '\n').trim()

		work.language = $element.find('dd.language').first().text()
		work.words = parseInt($element.find('dd.words').first().text().replace(/,/g, ''))
		work.chapters = $element.find('dd.chapters').first().text()
		work.hits = parseInt($element.find('dd.hits').first().text())

		works.push(work)
	})
	return works
}
