'user strict'

const adicionar = document.getElementById('adicionar')

// const adicionarCard = () =>{

//     const container = document.getElementById('container')

//     container.innerHTML = container.innerHTML + '<div class="item"></div>'
// }
const adicionarCard = (nome, nota) => {
    const container = document.getElementById('container')
    const novaDiv = document.createElement('div')
    novaDiv.classList.add('aluno')
    novaDiv.innerHTML = `<h2 class= "aluno__nome">${nome}</h2>
                        <span class = "aluno__nota" >${nota}</span>`

    if(nome == '' || nota == ''){
        alert('VAZIO')
    } else if (nota < 0 || nota > 10 ){
        alert('Nota não existe!')
    }else if(isNaN(nota)){
        alert('Somente numeros sao permitidos')
    }
    
    else{
    if (nota < 5) {

        novaDiv.classList.add('vermelho')
    } else  {
        novaDiv.classList.add('azul')
    }
    container.appendChild(novaDiv)
    }
}


const handleClick = () => {
    const nome = prompt('digite o nome do aluno')
    const nota = prompt('digite a nota do aluno')
    adicionarCard(nome, nota)


}
adicionar.addEventListener('click', handleClick)