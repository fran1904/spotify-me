const express = require('express')
const router = express.Router()

// Routes and request handling go here
router.get('/', (req, res) => {
    res.render('index') 
})

router.get('/about', (req, res) => {    // When user requests website.com/about...
    res.render('about')                 // ... send back about.ejs as a response
})

// 301 redirect example
// router.get('/about', (req, res) => {    // Redirect '/about'
//     res.redirect('my-new-about-page')  // to '/my-new-about-page'
// })

module.exports = router