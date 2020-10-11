export namespace DrawerLoginTypes {
	export interface Props {
		onLogin: () => void
		onMessage: (newMessage: Message) => void
	}

	interface Message {
		show: boolean
		text: string | undefined,
		severity: Severity,
	}

	export enum Severity {
		error = 'error',
		warning = 'warning',
		info = 'info',
		success = 'success'
	}
}