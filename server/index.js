const express = require('express')
const app = express()
const games = require('./games.json')
const release = require('./release.json')
const popularity = require('./popularity.json')
const anime = require('./anime.json')
const scifi= require('./sci-fi.json')

app.disable('x-powered-by')

app.get('/',(req,res) =>{
    res.json({message: 'Hola mundo'})
})

        //END POINT GENERAL
app.get('/games',(req,res) =>{
res.header('Access-Control-Allow-Origin', '*')

const { category } = req.query
    if(category){ //Le decimos q si tenemos género,vamos a filtrar por el género
        const categoryFilter = games.filter(
            game => game.genre.includes(category)
        )
        return res.json(categoryFilter)
    }
res.json(games)
})

app.get('/release',(req,res) =>{
    res.header('Access-Control-Allow-Origin', '*')
    res.json(release)
})

app.get('/popularity',(req,res) =>{
    res.header('Access-Control-Allow-Origin', '*')
    res.json(popularity)
})

app.get('/anime',(req,res) =>{
    res.header('Access-Control-Allow-Origin', '*')
    res.json(anime)
})

app.get('/sci-fi',(req,res) =>{
    res.header('Access-Control-Allow-Origin', '*')
    res.json(anime)
})

const PORT = process.env.PORT ?? 2525

app.listen(PORT,()=>{
    console.log(`listening on PORT http://localhost:${PORT}`)
})