

function addTeamMembers() {
  let appendDiv = document.getElementById("addTeamMemberDiv");
  let firstName = document.createElement("input");
  let lastName = document.createElement("input");


  firstName.setAttribute('type', 'text');
  firstName.setAttribute('placeholder', 'First Name');
  firstName.setAttribute('class', 'newTeammateFirstName');
  appendDiv.appendChild(firstName);
  lastName.setAttribute('type', 'text');
  lastName.setAttribute('placeholder', 'Last Name');
  lastName.setAttribute('class', 'newTeammateLastName');
  appendDiv.appendChild(lastName);
}
//DONATION DETAILS ONCLICK FUNCTION

function addDonationDetails() {
  let appendDiv = document.getElementById("addDonationDetailsDiv");
  let details = document.createElement("textarea");
  


  
  details.setAttribute('placeholder', 'Add additional details here. ');
  
  appendDiv.appendChild(details);

}
