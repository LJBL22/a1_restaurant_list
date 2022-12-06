// require packages used in the project
const express = require('express')
const app = express()
const port = 3000

// require express-handlebars here
const exphbs = require('express-handlebars')

// require movies.json
const movieList = require('./movies.json')

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

// routes setting 不同的路由
//產生不同的渲染畫面 (也就是 partial template)
app.get('/', (req, res) => {
  // // 第二次嘗試
  // const movieList = [
  //   {
  //     id: 1,
  //     title: 'Jurassic World: Fallen Kingdom',
  //     image: 'https://movie-list.alphacamp.io/posters/c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg'
  //   },
  //   {
  //     id: 2,
  //     title: 'THIS IS MOVIE TITLE',
  //     image: 'https://movie-list.alphacamp.io/posters/rv1AWImgx386ULjcf62VYaW8zSt.jpg'
  //   },
  //   {
  //     id: 3,
  //     title: "Thor: Ragnarok",
  //     image: "https://movie-list.alphacamp.io/posters/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg"
  //   },
  //   {
  //     id: 4,
  //     title: "Avengers: Infinity War",
  //     image: "https://movie-list.alphacamp.io/posters/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
  //   },
  //   {
  //     id: 5,
  //     title: "Mission: Impossible - Fallout",
  //     image: "https://movie-list.alphacamp.io/posters/80PWnSTkygi3QWWmJ3hrAwqvLnO.jpg"
  //   },
  //   {
  //     id: 6,
  //     title: "Incredibles 2",
  //     image: "https://movie-list.alphacamp.io/posters/x1txcDXkcM65gl7w20PwYSxAYah.jpg"
  //   },
  //   {
  //     id: 7,
  //     title: "Fifty Shades Freed",
  //     image: "https://movie-list.alphacamp.io/posters/jjPJ4s3DWZZvI4vw8Xfi4Vqa1Q8.jpg"
  //   },
  //   {
  //     id: 8,
  //     title: "The First Purge",
  //     image: "https://movie-list.alphacamp.io/posters/2slvblTroiT1lY9bYLK7Amigo1k.jpg"
  //   }
  // ]
  // 第一次嘗試
  //const movieOne = {
  //   id: 1,
  //   image: 'https://movie-list.alphacamp.io/posters/c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg',
  //   title: 'Jurassic World: Fallen Kingdom'
  // }

  res.render('index', { movies: movieList.results })
  // const numberList = [1, 2, 3, 4, 5]
  // , numbers: numberList 
  // res.render('index', { movie: movieOne })
  //第二個參數放一個物件，屬性為 movie，值為剛剛的變數
  //使用 render 方法 render index 內容
  // res.send('This is my movie list built with Express') //temp to be changed
})

//route setting _ show page
app.get('/movies/:movie_id', (req, res) => {
  const movie = movieList.results.find(
    movie => movie.id.toString() === req.params.movie_id
  )
  res.render('show', { movie: movie })
})
// app.get('/movies/1', (req, res) => {
//   const movieOne = {
//     "id": 1,
//     "title": "Jurassic World: Fallen Kingdom",
//     "genres": [
//       1,
//       2,
//       15
//     ],
//     "description": "Several years after the demise of Jurassic World, a volcanic eruption threatens the remaining dinosaurs on the island of Isla Nublar. Claire Dearing, the former park manager and founder of the Dinosaur Protection Group, recruits Owen Grady to help prevent the extinction of the dinosaurs once again.",
//     "release_date": "2018-06-06",
//     "image": "c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg"
//   }

//   res.render('show', { movie: movieOne })
// })

// 在 express 內裡用 queryString 
app.get('/search', (req, res) => {
  console.log('req query', req.query.keyword); //終端機檢查看到的搜尋字串 > 接著存進變數
  const keyword = req.query.keyword
  const movies = movieList.results.filter(movie => { //將篩選出的電影(s)放入 movies 變數
    return movie.title.toLowerCase().includes(keyword.toLowerCase())
  }) //若 搜尋出來的電影符合 keyword 則放在陣列裡 （然後都用 toLowerCase 來整理）
  res.render('index', { movies: movies, keyword: keyword }) //新增這個值讓使用者可以參照自己最後一次查詢的keyword
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})
