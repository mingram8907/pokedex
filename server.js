require('dotenv').config();
const express = require('express')
const connectToDB = require('./config/db')

const app = express()
const PORT = 3000

const pokemon = require('./models/pokemon')
const Pokemon = require('./models/Pokemon1')

app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine'). createEngine());

//* settling a middleware to run in our app
app.use((req, res, next) => {
    console.log(req.url);
    next()
})
//* parses the data from the request
app.use(express.urlencoded({extended: false}))


app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Pokemon App!</h1>')
})

//* Index Route: (returns a list of pokemon)
app.get('/pokemon', (req, res) => {
    // res.render('Index', {pokemon: pokemon})
    Pokemon.find({}, (error, allPokemon) => {
        res.render('Index', {pokemon: allPokemon})
    })
})

//* Post method (accept data from the form)
app.post('/pokemon', (req, res) => {
    console.log(req.body);

    Pokemon.create(req.body, (error, createdPokemon) => {
        res.redirect('/pokemon')
    })
})

//* Create Route: (create a new pokemon)
app.get('/pokemon/new', (req, res) => {
    res.render('New')
})

//* Show Route: (returns a single pokemon)
app.get('/pokemon/:id', (req, res) => {
    console.log(req.params);
    console.log(pokemon[req.params.indexOfPokemonArray]);
    // res.send(pokemon[req.params.indexOfPokemonArray]);
    // res.render('Show', {pokemon: pokemon[req.params.indexOfPokemonArray]})
    Pokemon.findById(req.params.id, (error, foundPokemon) => {
        res.render('Show', {pokemon: foundPokemon})
    })
})

app.listen(3000, () => {
    console.log(`Server is up on port ${PORT}!`);
    connectToDB()
})