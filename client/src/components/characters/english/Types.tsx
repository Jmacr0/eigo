export namespace EnglishTypes {
	export interface Props {
		type: Type
		character: string
		option: string
		reveal: boolean
		onClick: () => void
	}
	enum Type {
		hiragana = 'hiragana',
		katakana = 'katakana',
		greetings = 'greetings',
		verbs = 'verbs',
		adjectives = 'adjectives'
	}
}