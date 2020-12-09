
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
    "additionalCoordinators" : [{"firstName" : "Mary", "lastName" : "Kalm"}],
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
        "email ": "mari@yahoo.com",
        "additionalTeamName" : "tamname"

     }
 ]

 const donorInfo=[
     {
        "businessName": "Name",
        "businessAddress": "Address",
        "businessPhone":"phone",
        "businessContactFirstName":"contactfirstname",
        "contactLastName":"contactlastname",
        "businessContactPhone":"contactphone",
        "businessContactEmail":"contactemail",
        "donationDetails":"donationdetails"
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
        additionalcoordinators : 
           [ {firstName : req.body.firstName, 
            lastName : req.body.lastName}],
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
        email : req.body.email,
        additionalTeamNme:req.body.additionalTeamName
    }
        volunteerInfo.push(volunteers)
        res.send(volunteers)
})

app.get('/donorinfo', function(req,res){
    res.send(donorInfo)
})
app.post('/donorinfo',function(req,res){  
    console.log(req.body)
    let donors = {
        businessName: req.body.businessName,
        businessAddress: req.body.businessAddress,
        businessPhone:req.body.businessPhone,
        businessContactFirstName:req.body.tebusinessContactFirstNameamName,
        contactLastName:req.body.contactLastName,
        businessContactPhone:req.body.businessContactPhone,
        businessContactEmail:req.body.businessContactEmail,
        donationDetails:req.body.donationDetails,
    }
        donorInfo.push(donors)
        res.send(donors)
})