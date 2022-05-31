function idade(years){
    return `
    Após ${years} anos, ${this.name} terá ${this.age + years} anos de idade.`;
}
let eu = 
{
    name: 'Gabi',
    age: 02
}

let eu2 =
{   
    name: 'Oli',
    age: 77
}

let eu7 =
{
    name: 'Azi',
    age: 5
}
console.log(idade.call(eu2,15));
console.log(idade.apply(eu7,[4]));
console.log(idade.apply(eu,[20])+"\n");