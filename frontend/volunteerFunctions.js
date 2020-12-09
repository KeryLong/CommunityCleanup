

function volunteeRegister(){
    const teamname = document.getElementById('teamName')
    const teamName = teamname.value
    const captainfirstname = document.getElementById('captainFirstName')
    const captainFirstName = captainfirstname.value
    const Captainlastname = document.getElementById('teamCaptainLastName')
    const CaptainLastName = Captainlastname.value
    const captainphone = document.getElementById('teamCaptainPhone')
    const captainPhone = captainphone.value
    const Email = document.getElementById('teamCaptainEmail')
    const email = Email.value
    // // additionalTeam = [i].value
    // // let optionalNameInput = document.getElementsByClassName("newTeammateName")
    // // for (i=0; i < optionalNameInput.length; i++) {
    // // const newTeamName = optionalNameInput[i].value
    // // additionalTeam.push({newTeamName})
    // // }
    // additionalTeam={}
    // let i = 0
    // let additionalTeamInput = document.getElementsByClassName("newTeammateName")
    // if ( i < additionalTeamInput.length) {
    // const newTeamName = additionalTeamInput.value
    // i++
    // additionalcoordinators2.push({newTeamName})
    // function myFunction() {
        additionalTeam =[]
        var additionalTeamInput = document.getElementById("newTeammateName") 
        if (additionalTeamInput !== null) {
            let newTeam = additionalTeamInput.value
            additionalTeam.push({newTeam})
        }
        
    //     var data = [],
    //     subforms = parent.document.getElementsByTagName("form");

    // for (x = 0 ; x < subforms.length; x++) {
    //     var elements = subforms[x].elements;
    //     for (e = 0; e < elements.length; e++) {
    //         if (elements[e].name.length) {
    //             data.push(elements[e].name + "=" + elements[e].value);
    //         }
    
        // document.getElementById("demo").innerHTML = JSON.stringify(obj);

    
    fetch ('http://localhost:3000/volunteerinfo',{
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({teamName:teamName,captainFirstName:captainFirstName,captainLastName:CaptainLastName,
        captainPhone:captainPhone,email:email, additionalTeam:additionalTeam })
    })

}