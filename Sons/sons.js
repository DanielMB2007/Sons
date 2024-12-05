let audios = [
    {caminho: 'audios/xaropinho.mp3', legenda:'Xaropinho'},
    {caminho: 'audios/grito.mp3', legenda:'Grito estranho'},
    {caminho: 'audios/filho.mp3', legenda:'Que isso meu filho'},
    {caminho: 'audios/pare.mp3' , legenda:'Pare'},
    {caminho: 'audios/ratinho.mp3' , legenda:'Ratinhooo'},
    {caminho: 'audios/uepa.mp3' , legenda:'Uepaaaa'},
    {caminho: 'audios/360perfeito.mp3', legenda:'360 Perfeito'},
    {caminho: 'audios/amostradinho.mp3', legenda: 'O MELHOR'},
    {caminho: 'audios/cachorro.mp3', legenda: 'Ai Cachorro'},
    {caminho: 'audios/dingobel.mp3', legenda: 'MC Teteu natal'},
    {caminho: 'audios/gritotop.mp3', legenda: 'Muito TOP'},
    {caminho: 'audios/iharatinho.mp3', legenda: 'IHHHHHHAAAAAA'},
    {caminho: 'audios/japodego.mp3', legenda: 'Ja pode gozar?'},
    {caminho: 'audios/lulafoder.mp3', legenda: 'Lula pau no cu'},
    {caminho: 'audios/lulafreefire.mp3', legenda: 'A cara de fellype'},
    {caminho: 'audios/pornogay.mp3', legenda: 'Porno gay ;)'},
    {caminho: 'audios/pou.mp3', legenda: 'Pou muito estourado'},
    {caminho: 'audios/sigma.mp3', legenda: 'Sigma HAHAHA'},
]

let botoes = document.querySelectorAll('.botao')
let legendas = document.querySelectorAll('p')

for (let i=0; i < 18; i++) {
    legendas[i].textContent = audios[i].legenda
    botoes[i].setAttribute('data-item', i)
}

let audioTag = document.querySelector('audio')

botoes.forEach(botao => {
    botao.addEventListener('click' , () => {
        let som = audios[botao.getAttribute('data-item')]
        audioTag.setAttribute('src' , som.caminho)

        audioTag.addEventListener('loadeddata', () => {
            audioTag.play()
        })
    })
})