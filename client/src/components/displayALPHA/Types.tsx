export namespace DisplayALPHATypes {
	export interface Props {
		type: Type
		user: any
		onReset: () => void
	}

	enum Type {
		hiragana = 'hiragana',
		katakana = 'katakana',
		greetings = 'greetings',
		verbs = 'verbs'
	}
}