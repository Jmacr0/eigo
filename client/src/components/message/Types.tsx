export namespace MessageTypes {
	export interface Props {
		text: string | undefined
		severity: Severity
	}
	enum Severity {
		error = 'error',
		warning = 'warning',
		info = 'info',
		success = 'success'
	}
}