
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
    let newFieldInput = document.getElementById("newField")
    let label = document.createElement("label")
    label.textContent = "First Name"
    let field = document.createElement("input")
    field.setAttribute("type","text")
    newFieldInput.appendChild(label)
    newFieldInput.appendChild(field)
    
}

function addFieldLastname(){
    let newFieldInput = document.getElementById("newField")
    let label = document.createElement("label")
    label.textContent = "Last Name"
    let field = document.createElement("input")
    field.setAttribute("type","text")
    newFieldInput.appendChild(label)
    newFieldInput.appendChild(field)
    
}











// let theButton = document.getElementById(addButton)
//     theButton.addEventListener("click", addFieldFirstname)
//     theButton.addEventListener("click", addFieldLastname)
