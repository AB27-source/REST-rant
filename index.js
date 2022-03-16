require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
  })

app.get('/new', (req, res) => {
    res.render('places/new')
  })


  
app.listen(process.env.PORT)