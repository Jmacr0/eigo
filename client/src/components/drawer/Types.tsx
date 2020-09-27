export namespace DrawerTypes {
	export interface Props {
		type: Type
		drawerStatus: boolean
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