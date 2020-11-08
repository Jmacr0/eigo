export namespace NavbarTypes {
	export interface Props {
		type: Type
		user: any
		onDrawerClick: () => void
		onReset: () => void
	}

	enum Type {
		hiragana = 'hiragana',
		katakana = 'katakana',
		greetings = 'greetings',
		verbs = 'verbs'
	}
}