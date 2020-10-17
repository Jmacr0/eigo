export namespace DisplayALPHATypes {
	export interface Props {
		type: Type
		user: any
	}

	enum Type {
		hiragana = 'hiragana',
		katakana = 'katakana',
		greetings = 'greetings',
		verbs = 'verbs'
	}
}