
////////////// Add New Coordinator Functions  ////////
function addFieldFirstname(){
    let newFieldInput = document.getElementById("newField1")
    let label = document.createElement("label")
    label.textContent = "First Name"
    let field = document.createElement("input")
    field.setAttribute("type","text")
    newFieldInput.appendChild(label)
    newFieldInput.appendChild(field)
    
}

function addFieldLastname(){
    let newFieldInput = document.getElementById("newField2")
    let label = document.createElement("label")
    label.textContent = "Last Name"
    let field = document.createElement("input")
    field.setAttribute("type","text")
    newFieldInput.appendChild(label)
    newFieldInput.appendChild(field)
    
}

// request data from server  ///

function loadpage(){
    loadCommunity()
}


function loadCommunity(){
    const newcommunityname= document.getElementById('communityNameHeader')  ///get elemnt by id from the signupStat.html//
    fetch ('http://localhost:3000/communityinfo')
    .then(response => response.json())
    // .then (communityinfo => console.log(communityinfo))
    .then (communityinfo => newcommunityname.textContent = JSON.stringify(communityinfo))
    console.log(newcommunityname)
}


////////////  Post Community Iformation to the Server //////////
function Register(){
    const communityname = document.getElementById('communityName')
    const communityName = communityname.value
    const Address = document.getElementById('address')
    const address = Address.value
    const City = document.getElementById('city')
    const city = City.value
    const Province = document.getElementById('province')
    const province = Province.value
    const Postcode = document.getElementById('postcode')
    const postcode = Postcode.value
    const Date = document.getElementById('date')
    const date = Date.value
    const Time = document.getElementById('time')
    const time = Time.value
    fetch ('http://localhost:3000/communityinfo',{
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({communityName:communityName, city:city, address:address,province:province, postcode:postcode, date:date, time:time })
 })
}


// function loadDataOntoPage(){
//     const communityname= document.getElementById('communityNamePara')
//     fetch ('http://localhost:3000/communityinfo')
//     communityInfo.map(function(community){
//     communityname.textContent = community.communityName
//     })
// }

