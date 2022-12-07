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
app.get('/restaurants/:restaurant_id', (req, res) => {
  const restaurant = restaurantList.results.find(
    restaurant => restaurant.id.toString() === req.params.restaurant_id
  )
  res.render('show', { restaurant: restaurant })
})

//route setting _ search result _ query string
app.get('/search', (req, res) => {
  console.log('req query', req.query.keyword); //終端機檢查看到的搜尋字串 > 接著存進變數
  const keyword = req.query.keyword
  const restaurants = restaurantList.results.filter(restaurant => { //將篩選出的restaurant(s)放入 restaurants 變數
    return restaurant.name.toLowerCase().includes(keyword.toLowerCase()) || restaurant.category.toLowerCase().includes(keyword.toLowerCase())
  }) //若 搜尋出來的 restaurant 符合 keyword 則放在陣列裡 （然後都用 toLowerCase 來整理）
  res.render('index', { restaurants: restaurants, keyword: keyword }) //新增這個值讓使用者可以參照自己最後一次查詢的keyword
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})