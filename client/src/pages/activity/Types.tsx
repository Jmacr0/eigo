export namespace ActivityPageTypes {
	export interface Props {
		type: Type
	}

	export enum Type {
		hiragana = 'hiragana',
		katakana = 'katakana',
		greetings = 'greetings',
		verbs = 'verbs'
	}
}