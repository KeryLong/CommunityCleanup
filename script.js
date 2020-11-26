

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
//   let firstName = document.createElement("input");
  

//   firstName.setAttribute('type', 'text');

//   appendDiv.appendChild(firstName);
//   document.getElementsByTagName("input").placeholder = "Team member first name";
