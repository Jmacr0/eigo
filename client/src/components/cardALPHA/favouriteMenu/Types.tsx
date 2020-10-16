export namespace FavouriteMenuTypes {
	export interface Props {
		selectedWord: SelectedWord
		anchorEl: HTMLElement | null
		onClose: () => void
		user: any
	}
	interface SelectedWord {
		id: string
		word: string
	}
	export type CharacterSet = SingleSet[]
	export interface SingleSet {
		[english: string]: string
	}
}