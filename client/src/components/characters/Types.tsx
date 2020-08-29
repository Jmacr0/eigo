export namespace CharacterTypes {
	export interface Props {
		type: Type
		characterSet: CharacterSet
	}
	enum Type {
		hiragana = 'hiragana',
		katakana = 'katakana',
		greetings = 'greetings'
	}
	export type CharacterSet = SingleSet[]
	export interface SingleSet {
		[key: string]: any
		startingLetter?: string
		syllables?: Syllables
	}


	export interface Syllables {
		[english: string]: string
	}
}
