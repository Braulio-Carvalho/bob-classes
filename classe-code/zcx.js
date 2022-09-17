// * ********************************************************
// v1
// criar agenda de contatos com as seguintes funcionalidades. BLA BLA BLA OBJETIVO.
// cadastrar um contato e exibir todos os contatos.
// os contatos devem ter nome, telefone e email.
// salvar pelo menos 3 contatos e imprimir a lista
// * ********************************************************

// * ********************************************************
// v2
// criar uma funcao capaz de imprimir apenas 1 dos contatos, pelo index. - indexOf - criaçao
// criar uma funcao capaz de deletar um contato, pelo index. - splice() -  criação
// imprimir apenas 1 dos contatos, usando a funcao criada. - indexOf -  utilização
// deletar esse contato usando a funcao criada pelo index. - splice () - utilização
// imprimir todos os contatos e verificar se foi removido. - ?
// Read:One and Delete
// * ********************************************************

const agenda = []

const newUser = (user) => {
    return
    agenda.push(user)
}

newUser([
    nameUser = 'Robert',
    tel = '12345678',
    email = 'aaa@mail.com'
])

newUser ({
    nameUser: 'Lucas',
    tel: '12344678',
    email:'abc@mai.com'    
})

newUser ({
    nameUser: 'Pretinha',
    tel: '78974566',
    email:'abc@mai.com'    
})

const listUsers = () => {
    console.log('listUsers:', agenda)
}

listUsers()

// criar uma funcao capaz de imprimir apenas 1 dos contatos, pelo index. 
// const getContactByIndex = () => {
//     console.log(agenda[index])
// }

// getContactByIndex(1)
// getContactByIndex(2)