// find longest words

const words = ["React", "Javascript", "Dev", "Coder", "Developerwq", "Nextjs"];

const longestWord = words.reduce((max, word) => {
    return word.length > max.length ? word : max;
}) 

console.log(longestWord);