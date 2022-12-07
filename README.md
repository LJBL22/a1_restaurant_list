# 站主的美食私藏網站
關於站主私藏的美食餐廳，可查看餐廳的相關資訊，並搭配搜尋快速查找。

## 網站功能 :
使用者可以...
- 在首頁查看餐廳清單簡介
- 點擊單一餐廳查看詳細介紹、亦可點選箭頭符號連結到 google map
- 輸入關鍵字搜尋符合的餐廳名稱或餐廳類型

## 專案開發環境
- node.js 環境
- express 框架
- express-handlebars 樣板引擎

## 專案使用方法
**請於你的電腦中先行下載安裝 Git 及 node.js 後開啟 " 終端機 terminal " 進行下列步驟**  

1.下載此專案至你的電腦  
```
$ git clone "https://github.com/LJBL22/a1_restaurant_list.git"
```
2.把執行位置移到你的電腦中的 a1_restaurant_list 的位置  
```
$ cd .../a1_restaurant_list
```
3.安裝 express
```
$npm i express@4.16.4
```
4.安裝 express-handlebars  
```
$ npm i express-handlebars@3.0.0
```
5.安裝 nodemon ( 建議安裝 : nodemon 可以自動重啟 server 主程式 )  
```
$ npm i nodemon
```
6.使用 nodemon 執行 app.js
```
$ nodemon app.js
```