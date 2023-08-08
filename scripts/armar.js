const videoCardsData = [
    {
        brand: "Nvidia",
        model: "RTX 4090",
        memory: 24,
        price: 1500
    },
    {
        brand: "AMD",
        model: "RX 5700 XT",
        memory: 8,
        price: 450
    }
];

const processorsData = [
    {
        brand: "Intel",
        model: "Core i7-9700K",
        cores: 8,
        price: 350
    },
    {
        brand: "AMD",
        model: "Ryzen 5 5600X",
        cores: 6,
        price: 300
    }
];

const cartItems = [];

function showData(data, elementId, type) {
    const dataList = document.getElementById(elementId);
    dataList.innerHTML = "";

    data.forEach((item, index) => {
        const itemElement = document.createElement("li");
        itemElement.innerHTML = `
            <strong>Marca:</strong> ${item.brand}<br>
            <strong>Modelo:</strong> ${item.model}<br>
            ${item.memory ? `<strong>Memoria:</strong> ${item.memory} GB<br>` : ''}
            ${item.cores ? `<strong>Núcleos:</strong> ${item.cores}<br>`: ''}
            <strong>Precio:</strong> $${item.price}<br>
            <button onclick="addToCart(${index}, '${type}')">Añadir al Carrito</button>
        `;
        dataList.appendChild(itemElement);
    });
}

function addToCart(index, type) {
    let item, data;
    if (type === "videoCards") {
        item = videoCardsData[index];
        data = videoCardsData;
    } else {
        item = processorsData[index];
        data = processorsData;
    }

    cartItems.push({ item, type });
    updateCart();
    showData(data, type, type);
}

function updateCart() {
    const cartList = document.getElementById("cartItems");
    cartList.innerHTML = "";

    cartItems.forEach(cartItem => {
        const cartItemElement = document.createElement("li");
        const item = cartItem.item;
        cartItemElement.innerHTML = `
            <strong>Marca:</strong> ${item.brand}<br>
            <strong>Modelo:</strong> ${item.model}<br>
            <strong>Precio:</strong> $${item.price}<br>
            <button onclick="removeFromCart('${item.brand}', '${item.model}')">Eliminar</button>
        `;
        cartList.appendChild(cartItemElement);
    });
}

function removeFromCart(brand, model) {
    const index = cartItems.findIndex(cartItem => cartItem.item.brand === brand && cartItem.item.model === model);
    if (index !== -1) {
        cartItems.splice(index, 1);
        updateCart();
    }
}

function buyItems() {
    if (cartItems.length === 0) {
        alert("El carrito está vacío. Agrega componentes antes de comprar.");
    } else {
        let totalPrice = 0;
        cartItems.forEach(cartItem => {
            totalPrice += cartItem.item.price;
        });

        alert(`¡Compra realizada con éxito!\nTotal: $${totalPrice.toFixed(2)}\nGracias por tu compra.`);
        cartItems.length = 0; // Vaciar el carrito
        updateCart();
    }
}

showData(videoCardsData, "videoCards", "videoCards");
showData(processorsData, "processors", "processors");
