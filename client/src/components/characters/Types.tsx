export namespace CharacterTypes {
	export interface Props {
		type: Type
		option: string
		characterSet: CharacterSet
	}
	enum Type {
		hiragana = 'hiragana',
		katakana = 'katakana',
		greetings = 'greetings',
		verbs = 'verbs',
		adjectives = 'adjectives'
	}

	export type CharacterSet = SingleSet[]
	export interface SingleSet {
		[key: string]: any
		startingLetter?: string
		syllables?: Syllables
		verbs?: Verbs
	}


	export interface Syllables {
		[english: string]: string
	}

	export interface Verbs {
		[verbType: string]: VerbTypes
	}

	export interface VerbTypes {
		[english: string]: string
	}

	export interface Adjectives {
		[verbType: string]: AdjectiveTypes
	}

	export interface AdjectiveTypes {
		[english: string]: string
	}
}
