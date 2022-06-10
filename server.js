const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3000;
app.use(express.json())
app.use(express.urlencoded({extended: false}))
const cookieParser = require('cookie-parser')
app.use(cookieParser())


app.use(express.static(path.join(__dirname,'public')))
// const home = require('./routes/root')
// const authLogin = require('./routes/api/login')
//const parcel = require('./routes/index')
// const newUserparcel = require('./routes/api/signUp')
//const verifyJWToken = require('./middleware/verifyJWT3Auth')
// const refresh = require('./routes/api/refresh4')
// const logout = require('./routes/api/logout5')
// const parcelId = require('./routes/api/parcelId')



//app.use('/',home)


//app.use('/register',newUserparcel)

//app.use('/refresh',refresh)
//app.use('/logout',logout)


app.use('/api',require('./routes/index'))
//app.use('/parcelId', parcelId)

//app.use('/auth',authLogin)



// app.all('*',(req,res)=>{
//     if(req.accept('html')){
//         res.status(200).sendFile(path.join(__dirname,'views','404.html'))
//     }else if(req.accept('json')){
//         res.status(200).json({"error":"404 not found"})
//     }else{
//         res.type('txt').send('404 not found')
//     }
    
// })




app.listen(PORT,()=>{
    console.log(`Server is listening to port ${PORT}`)
})