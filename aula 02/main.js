'user strict'

const adicionar = document.getElementById('adicionar')

// const adicionarCard = () =>{

//     const container = document.getElementById('container')

//     container.innerHTML = container.innerHTML + '<div class="item"></div>'
// }
const adicionarCard = (aluno) => {
    const container = document.getElementById('container')
    const novaDiv = document.createElement('div')
    novaDiv.classList.add('aluno')
    novaDiv.innerHTML = `<h2 class= "aluno__nome">${aluno.nome}</h2>
                        <span class = "aluno__nota" >${aluno.nota}</span>`

    if(aluno.nome == '' || aluno.nota == ''){
        alert('VAZIO')
    } else if (aluno.nota < 0 || aluno.nota > 10 ){
        alert('Nota não existe!')
    }else if(isNaN(aluno.nota)){
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
    const aluno ={
     nome: prompt('digite o nome do aluno'),
     nota: prompt('digite a nota do aluno')
    }
    adicionarCard(aluno)


}
adicionar.addEventListener('click', handleClick)