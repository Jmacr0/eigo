export namespace DisplayALPHATypes {
	export interface Props {
		type: Type
		user: any
	}

	export enum Type {
		hiragana = 'hiragana',
		katakana = 'katakana',
		greetings = 'greetings',
		verbs = 'verbs'
	}
}