export namespace HomePageCardTypes {
	export interface Props {
		image?: string
		title?: string
		body?: string
		link?: string
		// type: Type
		// option: string
		// characterSet: CharacterSet
	}

	// enum Type {
	// 	hiragana = 'hiragana',
	// 	katakana = 'katakana',
	// 	greetings = 'greetings',
	// 	verbs = 'verbs'
	// }

	// export type CharacterSet = SingleSet[]
	// export interface SingleSet {
	// 	startingLetter: string,
	// 	syllables: Syllables
	// }

	// export interface Syllables {
	// 	[english: string]: string
	// }
}