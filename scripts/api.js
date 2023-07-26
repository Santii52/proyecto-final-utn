const pcComponents = [
    {
        id: 1,
        type: 'CPU',
        brand: 'Intel',
        model: 'Core i7-9700K',
        cores: 8,
        threads: 8,
        baseClock: '3.6 GHz',
        maxTurboClock: '4.9 GHz',
        price: 300,
    },
    {
        id: 2,
        type: 'GPU',
        brand: 'NVIDIA',
        model: 'GeForce RTX 3080',
        vram: '10 GB GDDR6X',
        coreClock: '1440 MHz',
        boostClock: '1710 MHz',
        price: 800,
    },
    {
        id: 3,
        type: 'RAM',
        brand: 'Corsair',
        model: 'Vengeance LPX',
        capacity: '16 GB',
        speed: '3200 MHz',
        price: 100,
    },
    {
        id: 4,
        type: 'Storage',
        brand: 'Samsung',
        model: '970 EVO Plus',
        capacity: '500 GB',
        interface: 'NVMe PCIe M.2',
        price: 120,
    },
];

const pcComponentsJSON = JSON.stringify(pcComponents);

console.log(pcComponentsJSON);