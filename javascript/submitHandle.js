const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/', (req, res) => {
  const data = req.body;

  // Đọc tệp JSON và chuyển đổi nó thành mảng đối tượng
  const products = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'json', 'products.json'), 'utf8'));

  // Tạo một ID mới cho đối tượng
  const p_id = Date.now().toString(36);

  // Tạo đối tượng mới
  const newProduct = {
    id: "s",
    name: "s",
    image: "s",
    price: "s",
    review: 111,
    description: "s",
    s_description: "s",
    ram: "s",
    storage: "s",
    cpu: "s",
    screen: "s",
    rear_camera: "s",
    front_camera: "s",
    battery: "s"
  };

  // Thêm đối tượng mới vào mảng và ghi lại vào tệp JSON
  products.push(newProduct);
  fs.writeFileSync(path.join(__dirname, '..', 'json', 'products.json'), JSON.stringify(products), 'utf8');

  // Trả về kết quả thành công cho client
  res.status(200).send('Product added successfully');
});

app.listen(5500, () => {
  console.log('Server is running on port 5500');
});