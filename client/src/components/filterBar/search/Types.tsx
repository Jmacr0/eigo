export namespace SearchTypes {
	export interface Props {
		onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	}

	enum Type {
		hiragana = 'hiragana',
		katakana = 'katakana',
		greetings = 'greetings',
		verbs = 'verbs'
	}
}