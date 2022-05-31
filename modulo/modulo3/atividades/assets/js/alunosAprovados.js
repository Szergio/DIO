let pessoas = [
    {
        id: '1',
        name: 'Pollyanna', 
        last_name: 'Z',
        nota: 9,
    },
    {
        id: '2',
        name: 'Beto', 
        last_name: 'W',
        nota: 4,
    },
    {
        id: '3',
        name: 'Celia', 
        last_name: 'D',
        nota: 10,
    },
    {
        id: '4',
        name: 'Davi', 
        last_name: 'Y',
        nota: 3,
    },
    {
        id: '5',
        name: 'Elly', 
        last_name: 'L',
        nota: 6,
    },
];

(
    function(array, media){
        let acima = [];
        for(let i=0; i<array.length; i++){
            const {name, nota} = array[i];
            if(nota >= media){
                acima.push(name);
            }
        }
        console.log(acima);
    }
)(pessoas,7);