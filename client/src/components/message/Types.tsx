export namespace MessageTypes {
	export interface Props {
		message: Message
		onCloseMessage: () => void
	}
	export interface Message {
		show: boolean
		text: string | undefined,
		severity: Severity,
	}

	enum Severity {
		error = 'error',
		warning = 'warning',
		info = 'info',
		success = 'success'
	}
}