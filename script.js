function sortear() {
    let qntd = Number(document.getElementById('qntd').value)
    let entre = Number(document.getElementById('entre').value)
    let ate = Number(document.getElementById('ate').value)
    let txt = document.getElementById('num')
    if (ate <= entre) {
        alert('Ops! Insira os valores corretamente')
    } else {
        while (qntd > 0) {
            let sorte = Math.floor(Math.random() * (ate - entre + 1)) + entre
            txt.innerHTML += ` - ${sorte}`
            qntd--
        }
    }
}
