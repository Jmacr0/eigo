export namespace PaginationTypes {
	export interface Props {
		characterSet: CharacterSet
		setCurrentPage: (pageNumber: number) => void
		filterNumber: number
	}

	enum Type {
		hiragana = 'hiragana',
		katakana = 'katakana',
		greetings = 'greetings',
		verbs = 'verbs'
	} export type CharacterSet = SingleSet[]
	export interface SingleSet {
		[english: string]: string
	}
}