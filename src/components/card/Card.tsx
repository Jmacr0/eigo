import React from 'react';
import { Characters } from './Characters';

export const Card = React.memo(() => {
	const set = [
		{
			a: 'あ',
			i: 'い',
			u: 'う',
			e: 'え',
			o: 'お',
		},
		// 	kaか	き	く	け	こ
		// g	が	ぎ	ぐ	げ	ご
		// s	さ	し	す	せ	そ
		// z	ざ	じ	ず	ぜ	ぞ
		// t	た	ち	つ	て	と
		// d	だ	ぢ	づ	で	ど
		// n	な	に	ぬ	ね	の
		// h	は	ひ	ふ	へ	ほ
		// b	ば	び	ぶ	べ	ぼ
		// p	ぱ	ぴ	ぷ	ぺ	ぽ
		// m	ま	み	む	め	も
		// y	や		ゆ		よ
		// r	ら	り	る	れ	ろ
		// w	わ	ゐ		ゑ	を
	]

	return (
		<>
			<h1>Card</h1>
			<Characters set={set} />
		</>
	);
});