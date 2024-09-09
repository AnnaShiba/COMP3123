function capitalizeWords(text){
    let words = text.split(' ');
    for(let i=0; i < words.length; i++){
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}

console.log(capitalizeWords("rose are red violet are blue"));