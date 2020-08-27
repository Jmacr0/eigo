import { ObjectHTMLAttributes } from "react";

export namespace CardTypes {
	export interface Props {
		set: Set
	}

	export type Set = Array<Character>;

	export interface Character {
		[propName: string]: string
	}

	export type hiragana = string;
}
