// require packages used in the project
const express = require('express')
const app = express()
const port = 3000

// require express-handlebars here
const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({ defaultLayout: 'main' })) //預設 layout 叫做 main
app.set('view engine', 'handlebars') //用上面設定好的引擎來當 view.engine 的意思

// setting static files
app.use(express.static('public'))

// routes setting
app.get('/', (req, res) => {
  const restaurantList = [
    {
      "id": 1,
      "name": "Sababa 沙巴巴中東美食",
      "name_en": "Sababa Pita Bar",
      "category": "中東料理",
      "image": "https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5635/01.jpg",
      "location": "台北市羅斯福路三段 283 巷 17 號",
      "phone": "02 2363 8009",
      "google_map": "https://goo.gl/maps/BJdmLuVdDbw",
      "rating": 4.1,
      "description": "沙巴巴批塔是台灣第一家純手工批塔專賣店,只選用最新鮮的頂級原料,以及道地的中東家傳配方。"
    },
    {
      "id": 2,
      "name": "梅子鰻蒲燒專賣店",
      "name_en": "Umeko Japanese Unagi House",
      "category": "日本料理",
      "image": "https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5628/02.jpg",
      "location": "台北市中山區林森北路 107 巷 8 號",
      "phone": " 02 2521 2813",
      "google_map": "https://goo.gl/maps/cUJEmFSRKyH2",
      "rating": 4.3,
      "description": "鰻魚、鰻魚飯、真空鰻魚"
    },
    {
      "id": 3,
      "name": "ZIGA ZIGA",
      "name_en": "Ziga Zaga",
      "category": "義式餐廳",
      "image": "https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5629/03.jpg",
      "location": "台北市信義區松壽路 2 號",
      "phone": "02 2720 1230",
      "google_map": "https://goo.gl/maps/bnZKC2YjYZp",
      "rating": 4.2,
      "description": "以頂級食材與料理技法完美呈現各類經典義式料理，獅頭造型烤爐現作pizza與開放式廚房現作龍蝦茄汁雞蛋銀絲麵是不可錯過的必嚐推薦！夜間國際級樂團的熱力演出，感受活力四射的現場魅力。"
    }
  ]
  res.render('index', { restaurants: restaurantList })
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})