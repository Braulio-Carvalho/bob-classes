const agenda = [
    {nome: 'Robert', telefone: '123123', email: 'robert@email.com'},
    {nome: 'Lucas', telefone: '123123', email: 'lucas@email.com'},
    {nome: 'Varela', telefone: '123123', email: 'varela@email.com'},
]

// console.log(agenda)

const agendaFormatada = agenda.map( pessoa => pessoa.nome);

// console.log('agendaFormatada: ', agendaFormatada)

const pessoa = agendaFormatada.indexOf('Lucas')

// console.log('=>', pessoa)


const getIndexByName = (name) => {
    const agendaFormatted = agenda.map( pessoa => pessoa.nome);

    return agendaFormatted.indexOf(name)
}

const index = getIndexByName('Lucas')

console.log('index: ', index)


