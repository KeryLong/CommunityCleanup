const fs = require('fs');
const http = require('http');

//INFO PLACEHOLDERS
const communityName = ['Test community name'];
const city = ['Test city name'];
const adress = ['Test address'];
const province="Test province"
const postcode = "Test postcode"
const date= ['Test date'];
const time = ['Test time']



//COORDINATOR PLACEHOLDERS

/////////////////////////////////////FILES///////////////////////////
const coordinatorFirstName = ["Test coordinator first"]
const coordinatorLastName = ["Test coordinator last"]
const coophoneNumber = ["Test coordinator phone"]
const coordinatorEmail = ["Test coordinator email"]


/////////////////////////////SERVER/////////////////////////////////

let port= process.env.PORT || 8080
const server = http.createServer((req,res) =>{
  
    res.send("Hello from the server!");
    });

server.listen(port, function (){
    console.log('Listening to requests on port' + port);
})