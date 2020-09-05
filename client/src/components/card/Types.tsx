export namespace CardTypes {
	export interface Props {
		type: Type
		option: string
		characterSet: CharacterSet
	}

	enum Type {
		hiragana = 'hiragana',
		katakana = 'katakana',
		greetings = 'greetings',
		verbs = 'verbs'
	}

	export type CharacterSet = SingleSet[]
	export interface SingleSet {
		startingLetter: string,
		syllables: Syllables
	}

	export interface Syllables {
		[english: string]: string
	}
}