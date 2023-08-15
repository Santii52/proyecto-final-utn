const dataTarjetasDeVideo = [
    {
        marca: "Nvidia",
        modelo: "RTX 4090",
        memoria: 24,
        precio: 1500
    },
    {
        marca: "AMD",
        modelo: "RX 5700 XT",
        memoria: 8,
        precio: 450
    }
];

const dataProcesadores = [
    {
        marca: "Intel",
        modelo: "Core i7-9700K",
        nucleos: 8,
        precio: 350
    },
    {
        marca: "AMD",
        modelo: "Ryzen 5 5600X",
        nucleos: 6,
        precio: 300
    }
];

const itemsCarrito = [];

function showData(data, elementId, type) {
    const dataList = document.getElementById(elementId);
    dataList.innerHTML = "";

    data.forEach((item, index) => {
        const itemElement = document.createElement("li");
        itemElement.innerHTML = `
            <strong>Marca:</strong> ${item.marca}<br>
            <strong>Modelo:</strong> ${item.modelo}<br>
            ${item.memory ? `<strong>Memoria:</strong> ${item.memoria} GB<br>` : ''}
            ${item.cores ? `<strong>Núcleos:</strong> ${item.nucleos}<br>`: ''}
            <strong>Precio:</strong> $${item.precio}<br>
            <button onclick="addToCart(${index}, '${type}')">Añadir al Carrito</button>
        `;
        dataList.appendChild(itemElement);
    });
}

function addToCart(index, type) {
    let item, data;
    if (type === "tarjetasDeVideo") {
        item = dataTarjetasDeVideo[index];
        data = dataTarjetasDeVideo;
    } else {
        item = dataProcesadores[index];
        data = dataProcesadores;
    }

    itemsCarrito.push({ item, type });
    actualizarCarrito();
    showData(data, type, type);
}

function actualizarCarrito() {
    const cartList = document.getElementById("itemsCarrito");
    cartList.innerHTML = "";

    itemsCarrito.forEach(carritoItem => {
        const carritoItemElement = document.createElement("li");
        const item = carritoItem.item;
        carritoItemElement.innerHTML = `
            <strong>Marca:</strong> ${item.marca}<br>
            <strong>Modelo:</strong> ${item.modelo}<br>
            <strong>Precio:</strong> $${item.precio}<br>
            <button onclick="eliminarDelCarrito('${item.marca}', '${item.modelo}')">Eliminar</button>
        `;
        cartList.appendChild(carritoItemElement);
    });
}

function eliminarDelCarrito(marca, modelo) {
    const index = itemsCarrito.findIndex(carritoItem => carritoItem.item.marca === marca && carritoItem.item.modelo === modelo);
    if (index !== -1) {
        itemsCarrito.splice(index, 1);
        actualizarCarrito();
    }
}

function comprarItems() {
    if (itemsCarrito.length === 0) {
        alert('El carrito está vacío. Agregá los componentes que deseas dándole a "Añadir al carrito" antes de comprar.');
    } else {
        let precioTotal = 0;
        itemsCarrito.forEach(carritoItem => {
            precioTotal += carritoItem.item.precio;
        });

        alert(`¡Compra realizada con éxito!\nTotal: $${precioTotal.toFixed(2)}\nGracias por elegir todoHardware!`);
        itemsCarrito.length = 0; 
        actualizarCarrito();
    }
}

showData(dataTarjetasDeVideo, "tarjetasDeVideo", "tarjetasDeVideo");
showData(dataProcesadores, "procesadores", "procesadores");
