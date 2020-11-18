
function addTeamMembers(){
  let firstName = document.createElement("input");
  

  let appendDiv = document.getElementById("addTeamMemberDiv");
  firstName.setAttribute('type', 'text');
  appendDiv.appendChild(firstName);
  document.getElementsByTagName("input").placeholder = "Team member first name";
}