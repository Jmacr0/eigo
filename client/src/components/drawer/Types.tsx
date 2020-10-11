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

	export enum Severity {
		error = 'error',
		warning = 'warning',
		info = 'info',
		success = 'success'
	}
	export interface Message {
		show: boolean
		text: string | undefined,
		severity: Severity,
	}
}