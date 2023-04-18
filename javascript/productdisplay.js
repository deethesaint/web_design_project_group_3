var urlParams = new URLSearchParams(window.location.search);
var productID = urlParams.get('data');
fetch('../json/products.json')
.then(response => response.json())
.then(data => {
    const product = data.find(item => item.id === productID);
    if (product) {
        const title = document.getElementById('title');
        title.textContent = product.name;
        const image = document.getElementById('p_img');
        image.src = product.image;
        image.style.width = '45%';
        const header = document.getElementById('p_header');
        header.textContent = product.name;
        const description = document.getElementById('p_description');
        description.textContent = product.description;
        const s_description = document.getElementById('p_s_description');
        s_description.textContent = product.s_description;
        const price = document.getElementById('p_price');
        price.textContent = product.price;
        const ram = document.getElementById('p_ram');
        ram.textContent = product.ram;
        const storage = document.getElementById('p_storage');
        storage.textContent = product.storage;
        const cpu = document.getElementById('p_cpu');
        cpu.textContent = product.cpu;
        const screen = document.getElementById('p_screen');
        screen.textContent = product.screen;
        const rcam = document.getElementById('p_rcam');
        rcam.textContent = product.rear_camera;
        const fcam = document.getElementById('p_fcam');
        fcam.textContent = product.front_camera;
        const battery = document.getElementById('p_battery');
        battery.textContent = product.battery;
    }
});            