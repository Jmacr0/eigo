export namespace DrawerTypes {
	export interface Props {
		type: Type
		loggedIn: boolean
		drawerStatus: boolean
		onDrawerClick: () => void
		onLogin: () => void
	}

	enum Type {
		hiragana = 'hiragana',
		katakana = 'katakana',
		greetings = 'greetings',
		verbs = 'verbs'
	}
}