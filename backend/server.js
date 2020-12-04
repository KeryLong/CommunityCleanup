
const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('.'))

const communityInfo = [
    {"communityName" : "Ranchland",
    "address": "1254 Ranchlands way NW",
    "city": "Calgary",
    "province":"AB",
    "postcode": "T3G",
    "date":"Jun 1",
    "time":"9 am",
    "coordinatorFirstName" : "George",
    "coordinatorLastName" : "ML",
    "phoneNumber" : "403-911-8520",
    "email" : "gml123@gmail.com",
    "notes" : "be on time",
    "requests" : "gloves , bags , hats",
}]
 const volunteerInfo = [
     {
        "teamname ": "Clean Community",
        "captainfirstname ": "Mari",
        "Captainlastname" : "Bl",
        "captainphone ":"403-522-9523",
        "Email ": "mari@yahoo.com"
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
    console.log(req.body)
    let newcommunity = {
        communityName:req.body.communityName,
        address : req.body.address,
        city : req.body.city,
        province : req.body.province,
        postcode : req.body.postcode,
        date : req.body.date,
        time : req.body.time,
        coordinatorFirstName : req.body.coordinatorFirstName,
        coordinatorLastName : req.body.coordinatorLastName,
        phoneNumber : req.body.phoneNumber,
        email : req.body.email,
        notes : req.body.notes,
        request : req.body.requests
    }
        communityInfo.push(newcommunity)
        res.send(newcommunity)
})
app.get('/volunteerinfo', function(req,res){
    res.send(volunteerInfo)
})
app.post('/volunteerinfo',function(req,res){

    console.log(req.body)
    let volunteers = {
        teamname : req.body.teamName,
        captainfirstname : req.body.captainFirstName,
        Captainlastname : req.body.captainLastName,
        captainphone :req.body.captainPhone,
        email : req.body.email
    }
        communityInfo.push(volunteers)
        res.send(volunteers)
})
