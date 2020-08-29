export namespace CardTypes {
	export interface Props {
		characterSet: CharacterSet
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