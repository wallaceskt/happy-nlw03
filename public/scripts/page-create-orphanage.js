// Create map
const map = L.map('mapid').setView([-3.7749680, -38.5727036], 15)

// Create and add tileLayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map)

// Create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68]
})

let marker;

// Create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat
    const lng = event.latlng.lng

    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng

    // Remove icon
    marker && map.removeLayer(marker)

    // Add icon layer
    marker = L.marker([lat, lng], { icon }).addTo(map)
})

// add photos
function addPhotoField() {
    // Pegar o container de fotos #images
    const container = document.querySelector('#images')
    
    // Pegar o conteiner para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')

    // Clonar a última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    // Verificar se o campo está vazio
    // Se sim, não adicionar ao container de imagens
    const input = newFieldContainer.children[0]

    if (input.value == "") {
        return // Para de executar o restante da função
    }

    // Limpar o campo antes de adicionar ao container de imagens
    input.value = ""

    // Adicionar o clone ao container #images
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')

    if (fieldsContainer.length < 2) {
        // Limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    // Deletar o campo
    span.parentNode.remove()
}

// Trocar sim e não
function toggleSelect(event) {
    // Retirar a classe .active dos botões
    document.querySelectorAll('.button-select button')
    .forEach((btn) => 
        btn.classList.remove('active')
    )

    // Colocar a classe .active no botão clicado
    const button = event.currentTarget
    button.classList.add('active')
    
    // Atualizar o input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    input.value = button.dataset.value
}