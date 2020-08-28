export namespace DisplayTypes {
	export interface Props {
		type: Type
		onReset: () => void
	}

	enum Type {
		hiragana,
		katakana
	}
}