export namespace FavouriteDisplayTypes {
	export interface Props {
		user: any
	}

	export type CharacterSet = SingleSet[]
	export interface SingleSet {
		[english: string]: string
	}

	export interface Syllables {
		[english: string]: string
	}
}