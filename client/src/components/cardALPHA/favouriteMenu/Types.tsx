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
		type: string
	}
	enum Type {
		hiragana = 'hiragana',
		katakana = 'katakana',
		greetings = 'greetings',
		verbs = 'verbs'
	}
	export type CharacterSet = SingleSet[]
	export interface SingleSet {
		[english: string]: string
	}
}