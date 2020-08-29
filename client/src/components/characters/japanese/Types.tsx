export namespace JapaneseTypes {
	export interface Props {
		type: Type
		character: any
	}
	enum Type {
		hiragana = 'hiragana',
		katakana = 'katakana',
		greetings = 'greetings'
	}
}