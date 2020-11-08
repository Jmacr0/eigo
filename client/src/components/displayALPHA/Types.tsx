export namespace DisplayALPHATypes {
	export interface Props {
		type: Type
		user: any
		onGetUser: () => void
	}

	export enum Type {
		hiragana = 'hiragana',
		katakana = 'katakana',
		greetings = 'greetings',
		verbs = 'verbs'
	}
}