export namespace EnglishTypes {
	export interface Props {
		type: Type
		character: string
	}
	enum Type {
		hiragana = 'hiragana',
		katakana = 'katakana',
		greetings = 'greetings'
	}
}