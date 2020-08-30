export namespace DisplayTypes {
	export interface Props {
		type: Type
		onReset: () => void
	}

	enum Type {
		hiragana = 'hiragana',
		katakana = 'katakana',
		greetings = 'greetings',
		verbs = 'verbs'
	}
}