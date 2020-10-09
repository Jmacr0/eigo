export namespace DrawerTypes {
	export interface Props {
		type: Type
		loggedIn: boolean
		user: any
		drawerStatus: boolean
		onDrawerClick: () => void
		onLogin: () => void
		setUser: () => void
	}

	enum Type {
		hiragana = 'hiragana',
		katakana = 'katakana',
		greetings = 'greetings',
		verbs = 'verbs'
	}
}