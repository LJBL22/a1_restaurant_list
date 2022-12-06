// require packages used in the project
const express = require('express')
const app = express()
const port = 3000

// require express-handlebars here
const exphbs = require('express-handlebars')
// require restaurant.json
const restaurantList = require('./restaurant.json')

app.engine('handlebars', exphbs({ defaultLayout: 'main' })) //預設 layout 叫做 main
app.set('view engine', 'handlebars') //用上面設定好的引擎來當 view.engine 的意思

// setting static files
app.use(express.static('public'))

// routes setting
app.get('/', (req, res) => {
  res.render('index', { restaurants: restaurantList.results })
})

//route setting _ show page
app.get('/restaurants/1', (req, res) => {
  const restaurantOne = {
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
  }

  res.render('show', { restaurants: restaurantOne })
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})