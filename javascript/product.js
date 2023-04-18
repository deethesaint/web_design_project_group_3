const productList = document.getElementById('product-list');
// Đọc dữ liệu sản phẩm từ một file JSON
fetch('../json/products.json')
.then(response => response.json())
.then(data => {
// Duyệt qua từng sản phẩm trong dữ liệu
data.forEach(product => {
    // Tạo một div mới để chứa thông tin sản phẩm
    const productDiv = document.createElement('div');
    productDiv.style.position = 'relative';
    productDiv.id = product.id; 
    productDiv.style.maxWidth = '215px';
    productDiv.style.display = 'inline-block';
    productDiv.style.border = '1px solid #DDDDDD';
    productDiv.style.margin = '5px';
    productDiv.style.padding = '5px';
    productDiv.style.cursor = 'pointer';
    productDiv.onclick = function() {
      window.location.href = '../productdisplay.html?data=' + encodeURIComponent(productDiv.id);
    }
    const button = document.createElement('a');
    button.href = '#';
    button.style.backgroundColor = 'orange';
    button.style.position = 'absolute';
    button.style.right = '3%';
    button.style.bottom = '0%';
    button.textContent = 'MUA NGAY';
    button.style.padding = '5px'
    button.style.borderRadius = '15px';
    button.style.zIndex = '0';
    productDiv.appendChild(button);

    const titleDiv = document.createElement('div');
    titleDiv.style.position = 'absolute';
    titleDiv.style.display = 'inline-flex';
    
    const title = document.createElement('p');
    if (product.title !== '') {
      const title = document.createElement('p');
      title.style.backgroundColor = 'orange';
      title.style.color = 'white';
      title.textContent = product.title;
      title.style.borderRadius = '15px';
      title.style.padding = '5px';
      title.style.zIndex = '0';
      title.style.fontWeight = 'bold';
      title.style.position = 'relative';
      titleDiv.appendChild(title);
    }

    if (product.title2 !== '') {
      const title = document.createElement('p');
      title.style.backgroundColor = '#C22D2D';
      title.style.color = 'white';
      title.textContent = product.title2;
      title.style.borderRadius = '15px';
      title.style.padding = '5px';
      title.style.zIndex = '0';
      title.style.fontWeight = 'bold';
      title.style.position = 'relative';
      titleDiv.appendChild(title);
    }

    productDiv.appendChild(titleDiv);

    // Thêm hình ảnh sản phẩm
    const image = document.createElement('img');
    image.src = product.image;
    image.style.width = '100%';
    productDiv.appendChild(image);
    // Thêm tên sản phẩm
    const name = document.createElement('h3');
    name.textContent = product.name;
    productDiv.appendChild(name);  
    // Thêm giá sản phẩm
    const price = document.createElement('h3');
    price.textContent = product.price + 'đ';
    price.style.fontStyle = 'bold';
    price.style.color = '#EE770D';
    productDiv.appendChild(price);
    const text = document.createElement('p');
    text.textContent = product.review + ' Đánh giá';
    text.style.color = '#2A757E';
    productDiv.appendChild(text);
    for (let i = 0; i < 5; i++) {
        const star = document.createElement('i');
        star.className = 'fa fa-star';
        star.style.width = '8%';
        productDiv.appendChild(star);
      }
    // Thêm sản phẩm vào danh sách
    productList.appendChild(productDiv);
    
    });
});