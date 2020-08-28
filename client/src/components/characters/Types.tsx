export namespace CharacterTypes {
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
	// export interface Props {
	// 	set: Set
	// }

	// export type Set = CharacterSet[];

	// export interface CharacterSet {
	// 	[propName: string]: string
	// }
}
