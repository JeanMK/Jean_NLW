
function populateUfs() { 
    const ufSelect =  document.querySelector('select[name=uf]');

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() )
    .then( states => {
        for( const state of states ) {
            ufSelect.innerHTML += `<option value="${state.id}"> ${state.nome} </option>`
        }
    })
}

populateUfs()

function getCityes(event) {
    const citySelect =  document.querySelector('select[name=city]')
    const stateInput =  document.querySelector('input[name=state]')

    const ufValue = event.target.value 

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`;

    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true

    fetch(url)
    .then( res => res.json() )
    .then( cities => {
        
        for( const city of cities ) {
            citySelect.innerHTML += `<option value="${city.nome}"> ${city.nome} </option>`
        }

        citySelect.disabled = false
    })
}

document
    .querySelector('select[name=uf]')
    .addEventListener('change', getCityes)


// Itens de coleta
// pegar todos os Lis
const itensToColect = document.querySelectorAll(".items-grid li")

for(const item of itensToColect){
    item.addEventListener("click", handSelectedItem)
}

const colecterdItms = document.querySelector("input[name=items]" )

let selectedItems = []

function handSelectedItem(event) {
    const itemLi = event.target


    // adicionar ou remover uma classe com JS
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id

    // verificar se existem items selecionados, se sim pegar os itens selecionados
    const alreadySelected = selectedItems.findIndex( item => {
        const itemFound = item == itemId // isso será true ou false
        return itemFound
    })


    // Se já estiver selecionado
    if(alreadySelected >= 0) {
        // tirar da seleção
        const filterdItems = selectedItems.filter( item => {
            const itemIsDiferent = item != itemId // false
            return itemIsDiferent
        }) 

        selectedItems = filterdItems
    }
    else {
        // se não estiver selecionado, adicionar a seleção
        selectedItems.push(itemId)
    }

    console.log(selectedItems);


    // atualizar o campo esconddo com os items selecionados
    colecterdItms.value = selectedItems

}