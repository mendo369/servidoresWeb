//se encarga de manipular todos los datos en cuanto al crud
const data = require('./MOCK_DATA.json');

module.exports = {
    getUsers: ()=>data,//esta función nos devolverá data
    createUser: (dataUser)=>{
        let newUser = {
            id: data.length+1,
            ...dataUser,//El Spread Operator corresponde a un operador el cuál distribuye los elementos de un arreglo u objeto, para asignarlos a alguna variable/constante/función.
        };
        data.push(newUser);
    }
}