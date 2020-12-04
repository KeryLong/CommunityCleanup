function volunteeRegister(){
    const teamname = document.getElementById('teamName')
    const teamName = teamname.value
    const captainfirstname = document.getElementById('captainFirstName')
    const captainFirstName = captainfirstname.value
    const Captainlastname = document.getElementById('CaptainLastName')
    const CaptainLastName = Captainlastname.value
    const captainphone = document.getElementById('captainPhone')
    const captainPhone = captainphone.value
    const Email = document.getElementById('phone')
    const phone = Email.value
    
    fetch ('http://localhost:3000/volunteerinfo',{
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({teamName:teamName,captainFirstName:captainFirstName,CaptainLastName:CaptainLastName,
        captainPhone:captainPhone,Email:phone })
    })

}
