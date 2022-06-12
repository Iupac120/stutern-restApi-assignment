const express = require('express')
const app = express()
const swaggerjsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const cors = require('cors')
//const low = require('lowdb')
//const morgan = require('morgan')
const path = require('path')
const PORT = process.env.PORT || 3000;
app.use(express.json())
app.use(express.urlencoded({extended: false}))
const cookieParser = require('cookie-parser')
app.use(cookieParser())
app.use(cors())

const swaggerOptions = {
    openapi:'3.0.0',
    swaggerDefinition: {  //info about the application
        info:{
            title:'Library API',
            version:'1.0.0',
            description: 'Parcels Order Delivery'
        },
        servers: [
            {
                url: "http:localhost:3000"
            }
        ]

    },
    apis:['server.js','./routes/index.js'] //current file we are passing
}

const swaggerDocs = swaggerjsdoc(swaggerOptions)//load the documents by the options passed
console.log(swaggerDocs)
app.use('/api-doc',swaggerUi.serve,swaggerUi.setup(swaggerDocs))

/**
 * @swagger
 * /home:
 *  get:
 *      description: Get the home page
 *      responses:
 *          200:
 *              description: Success
 */
app.use(express.static(path.join(__dirname,'public')))


app.use('/api-doc',require('./routes/index'))

app.get('/home(.html)?',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,'views','home.html'))
    console.log('router')
})

/**
 * @swagger
 * /about:
 *  get:
 *      description: Get the about page
 *      responses:
 *          200:
 *              description: Success
 */



app.get('/about(.html)?',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,'views','about.html'))
})

/**
 * @swagger
 * /contact:
 *  get:
 *      description: Get the contact page
 *      responses:
 *          200:
 *              description: Success
 */




app.get('/contact(.html)?',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,'views','contact.html'))
})



app.all('*',(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,'views','404.html'))    
})




app.listen(PORT,()=>{
    console.log(`Server is listening to port ${PORT}`)
})
