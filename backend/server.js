
const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('.'))

const communityInfo = [
    {"comunityName" : "Test Comunity name",
    "address": "Test Adress",
    "city": "Calgary",
    "province":"AB",
    "postcode": "T3G 2C4",
    "date":"here is the date",
    "time":"here is the time",
     }
]
//PORT
app.listen (3000,function(){
    console.log(" server Started on port 3000")
})

app.get('/comunityinfo', function(req,res){
    res.send(communityInfo)
})

app.post('/comunityinfo',function(req,res){
    console.log('I have a request')
    console.log(req.body)
    // let newcommunity = req.body
    //     communityInfo.push(newcommunity)
})
