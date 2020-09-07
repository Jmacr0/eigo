export namespace HiddenAnswerCardTypes {
	export interface Props {
		reveal: boolean
		type: Type
		language: string
		character: string
		option: string
		// characterSet: CharacterSet
		onClick: () => void
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
		startingLetter: string,
		syllables: Syllables
	}

	export interface Syllables {
		[english: string]: string
	}
}