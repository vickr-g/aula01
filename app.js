'user strict'
const numero1 = document.getElementById('numero1')
const numero2 = document.getElementById('numero2')
const calcular = document.getElementById('calcular')
const resultado = document.getElementById('resultado')
const formulario = document.getElementById('formulario')
const aprovado = ' aprovado '
const reprovado = ' reprovado '
const nao = 'nao foi possivel calcular'
function somar() {
    resultado.value = ((Number(numero1.value) + Number(numero2.value)) / 2)
    if (resultado.value < 7) {
        formulario.classList.add('sombra-vermelha')
        resultado.value = reprovado + ' - ' + ((Number(numero1.value) + Number(numero2.value)) / 2)
    } else {
        formulario.classList.toggle('sombra-azul')
        resultado.value = aprovado + ' - ' + ((Number(numero1.value) + Number(numero2.value)) / 2)

    }
    if (Number(numero1.value) < 0 || Number(numero1.value) > 10 || Number(numero2.value) < 0 || Number(numero2.value) > 10) {
        formulario.classList.add('sombra-amarelo')
        resultado.value = nao
    }
}





calcular.addEventListener('click', somar)