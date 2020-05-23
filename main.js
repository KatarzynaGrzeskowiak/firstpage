const name = "Kasia";
const age = 27;

alert("Witam :) ");

console.log(`Nazywam się ${name} i mam ${age} lat.`);

const text = document.querySelector(`.section-article__text--js`);
text.innerHTML = `Tu miał być inny tekst ale go zmieniłam za pomocą js`;

console.log(text);

function calculate(myNumber){
    console.log(`Dostałam ${myNumber}.`);
    return myNumber*7;
}

const myResult = calculate(3);

console.log(myResult);