console.log('processo de renderizacao')
console.log(`Electron: ${api.verElectron()}`)

function openChild(){
    console.log('teste do butao')
    api.open()
}

api.send('oi')

api.on((event, message) => {
    console.log(`renderizador recebeu a mensagem: ${message}`)
})

function info(){
    api.info()
}

function warning(){
    api.warning()
}

function select(){
    api.select()
}