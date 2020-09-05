export namespace JapaneseTypes {
	export interface Props {
		type: Type
		option: string
		character: any
		reveal: boolean
		onClick: () => void
	}
	enum Type {
		hiragana = 'hiragana',
		katakana = 'katakana',
		greetings = 'greetings',
		verbs = 'verbs'
	}
}