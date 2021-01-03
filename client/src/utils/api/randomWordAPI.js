const randomWords = [
    'Persevere',
    'Improve',
    'Progress',
    'かいぜん',
];

export const selectRandomWord = () => {
    const index = Math.floor(Math.random() * randomWords.length);
    console.log(index);
    return randomWords[index];
};