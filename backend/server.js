
const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('.'))

const communityInfo = [
    {"communityName" : "community1",
    "address": "1254 community way NW",
    "city": "Calgary",
    "province":"AB",
    "postcode": "T3G",
    "date":"Jun 1",
    "time":"9 am",
     },

     {"communityName" : "community2",
    "address": "2020 community SW",
    "city": "Calgary",
    "province":"AB",
    "postcode": "T3G",
    "date":"Jun 1",
    "time":"9 am",
     }
]
//PORT
var server = app.listen (3000,function(){
    var port = server.address().port
    console.log('server Started on', port )
})

app.get('/communityinfo', function(req,res){
    res.send(communityInfo)
})

app.post('/communityinfo',function(req,res){
    // console.log('I have a request')
    console.log(req.body)
    let newcommunity = {
        comunityName:req.body.comunityName,
        address : req.body.address,
        city : req.body.city,
        province : req.body.province,
        postcode : req.body.postcode,
        date : req.body.date,
        time : req.body.time
    }
        communityInfo.push(newcommunity)
        res.send(newcommunity)
})
