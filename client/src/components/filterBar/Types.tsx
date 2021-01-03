export namespace FilterBarTypes {
	export interface Props {
		onNumberToDisplay: (displayNumber: number) => void
		onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	}

	enum Type {
		hiragana = 'hiragana',
		katakana = 'katakana',
		greetings = 'greetings',
		verbs = 'verbs'
	}
}