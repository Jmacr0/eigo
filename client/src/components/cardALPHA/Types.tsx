export namespace CardALPHATypes {
	export interface Props {
		characterSet: CharacterSet
		user: any
		onGetUser: () => void
	}

	enum Type {
		hiragana = 'hiragana',
		katakana = 'katakana',
		greetings = 'greetings',
		verbs = 'verbs'
	}
	export interface SelectedWord {
		id: string
		word: string
		type: string
	}
	export type CharacterSet = SingleSet[]
	export interface SingleSet {
		[english: string]: string
	}
	// export interface SingleSet {
	// 	startingLetter: string,
	// 	syllables: Syllables
	// }

	// export interface Syllables {
	// 	[english: string]: string
	// }
}