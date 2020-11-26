
// let addnewperson = 1

// function addNewPerson(){
//     if (addnewperson < 2){
//         addFieldFirstname()
//         addFieldLastname() 
//     }
//     else{
//         console.log("you can not add more")
//         alert("you can not add more")
//     }
// }

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

function Register(){
    const communityname = document.getElementById('communityName')
    const communityName = communityname.value
    fetch ('http://localhost:3000/comunityinfo',{
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({communityName:communityName})
 } )
}



// var id = 0;
// var newinput = function() {
//   var parent = document.body
//   var field = document.createElement("input")
//   field.className = "myclassname"
//   field.style = "display:block;"
//   field.id = "input" + id;
//   parent.appendChild(field);
//   id += 1;
// }
// <body>
//   <div>Click plus to add input</div>
//   <button type="button" name="button" onclick="newinput()">+</button>
// </body>