
////////////// Add New Coordinator Functions  ////////
let additionalCoordinatorCounter = 1;
let limitCoordinators = 3;
function addCoordinator() {
    if (additionalCoordinatorCounter === limitCoordinators) {
          alert("You have reached the limit of adding " + additionalCoordinatorCounter + " coordinators");
    } else {
        addFieldFirstname()
        addFieldLastname()
        additionalCoordinatorCounter++;
    }
}
function addFieldFirstname(){
    let newFieldInput = document.getElementById("newField1")
    let label = document.createElement("label")
    label.textContent = "First Name"
    let field = document.createElement("input")
    field.setAttribute("type","text")
    field.setAttribute("id","additionalCoordinatorFirstName"+ additionalCoordinatorCounter)
    newFieldInput.appendChild(label)
    newFieldInput.appendChild(field)
    
}

function addFieldLastname(){
    let newFieldInput = document.getElementById("newField2")
    let label = document.createElement("label")
    label.textContent = "Last Name"
    let field = document.createElement("input")
    field.setAttribute("type","text")
    field.setAttribute("id","additionalCoordinatorLastName"+ additionalCoordinatorCounter)
    newFieldInput.appendChild(label)
    newFieldInput.appendChild(field)
    
}


////////////  Post Community Iformation to the Server //////////
function Register(){
    const communityname = document.getElementById('communityName')
    const communityName = communityname.value
    const aDDress = document.getElementById('address')
    const address = aDDress.value
    const City = document.getElementById('city')
    const city = City.value
    const pRovince = document.getElementById('province')
    const province = pRovince.value
    const postCode = document.getElementById('postcode')
    const postcode = postCode.value
    const dAte = document.getElementById('date')
    const date = dAte.value
    const tIme = document.getElementById('time')
    const time = tIme.value
    const Coordinatorfirstname = document.getElementById('coordinatorFirstName')
    const coordinatorFirstName = Coordinatorfirstname.value
    const Coordinatorlastname = document.getElementById('coordinatorLastName')
    const coordinatorLastName = Coordinatorlastname.value
    const phonenumber = document.getElementById('phoneNumber')
    const phoneNumber = phonenumber.value
    const coordinatoremail = document.getElementById('email')
    const email = coordinatoremail.value
    const notes = document.getElementById('note')
    const note = notes.value
    const requests = document.getElementById('request')
    const request = requests.value
    additionalcoordinators = []
        let optionalNameInput = document.getElementById("additionalCoordinatorFirstName1")
        if (optionalNameInput !== null) {
        const firstName = optionalNameInput.value
        const lastName = document.getElementById("additionalCoordinatorLastName1").value
        additionalcoordinators.push({firstName, lastName})
} 
    additionalcoordinators2 = []
        let optionalNameInput2 = document.getElementById("additionalCoordinatorFirstName2")
        if (optionalNameInput2 !== null) {
        const firstName = optionalNameInput2.value
        const lastName = document.getElementById("additionalCoordinatorLastName2").value
        additionalcoordinators2.push({firstName, lastName})
} 
    fetch ('http://localhost:3000/communityinfo',{
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({communityName:communityName, city:city, address:address,province:province, postcode:postcode, date:date, time:time,
           coordinatorFirstName:coordinatorFirstName, coordinatorLastName:coordinatorLastName,
           phoneNumber:phoneNumber,email:email, notes:note, requests:request,additionalcoordinators:additionalcoordinators,
           additionalcoordinators2:additionalcoordinators2})
    })

}


// request data from server  ///

function loadpage(){
    loadCommunity()
}

function loadCommunity(){  
        fetch ('http://localhost:3000/communityinfo')
        .then(response => response.json())
        .then (communityinfo =>loadDataOntoPage(communityinfo))
    }

function loadDataOntoPage(communityInfo){
    const communityname= document.getElementsByClassName('communityNameHeader')   ///get elemnts by id from the signupStat.html//
    const meetingDate = document.getElementById('date') 
    const meetingTime = document.getElementById('time') 
    const meetingplace = document.getElementById('meetingPoint')   
    communityInfo.forEach (community => {
        
for (let i = 0; i < communityname.length; i++) {
    communityname[i].textContent = community.communityName
    }
    meetingDate.textContent = community.date
    meetingTime.textContent = community.time
    meetingplace.textContent = community.address
    })
}




// function loadCommunity(){
//     const newcommunityname= document.getElementById('communityNameHeader')  ///get elemnt by id from the signupStat.html//
//     fetch ('http://localhost:3000/communityinfo')
//     .then(response =>response.json())
//     // .then (communityinfo => console.log(communityinfo))
//     .then (communityinfo => newcommunityname.textContent = JSON.stringify(communityinfo))
//     // // // // console.log(newcommunityname)
// }

// let arrayOfValues = document.getElementsByClassName('classOfInputs')
//   .map(element=>element.value)

// document.getElementById('idOfInputBox').value