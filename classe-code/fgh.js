
const agenda = ["Robert", "12345678", "aaa@mail.com"];

// criar uma funcao capaz de deletar UM contato, pelo index. - splice() -  criação
const deleteUsers = (index) => {
    agenda.splice(index,1)
}

deleteUsers(1)

// agenda.splice(1,1)
console.log(agenda)