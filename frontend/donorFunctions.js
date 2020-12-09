
function donate(){
    const businessName = document.getElementById('teamName')
    const name = businessName.value
    const businessaddress = document.getElementById('businessAddress')
    const address = businessaddress.value
    const businessphone = document.getElementById('businessPhone')
    const phone = businessphone.value
    const contactFirstName = document.getElementById('BusinessContactFirstName')
    const contactfirstname = contactFirstName.value
    const contactLastName = document.getElementById('BusinessContactLastName')
    const contactlastname = contactLastName.value
    const businesscontactphone = document.getElementById('BusinessContactPhone')
    const contactphone = businesscontactphone.value
    const businesscontactemail = document.getElementById('BusinessContactEmail')
    const contactemail = businesscontactemail.value
    const details = document.getElementById('donationDetails')
    const donationdetails = details.value
    
    fetch ('http://localhost:3000/donorinfo',{
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({businessName:name,businessAddress:address,
        businessPhone:phone,businessContactFirstName:contactfirstname,contactLastName:contactlastname,
        businessContactPhone:contactphone,businessContactEmail:contactemail,donationDetails:donationdetails })
    })

    

}