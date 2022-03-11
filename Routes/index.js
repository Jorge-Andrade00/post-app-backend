const { Router } =require('express')
const router  = Router()
const { getPosts, createPost, deletePost } = require('../Controllers/posts.controller')

router.get('/', (req, res)=>{
    res.send('Hola mundo desde las rutas')
    
})

//api routes
router.get('/get', getPosts)
router.post('/create', createPost)
router.delete('/delete/:id', deletePost)

module.exports = router