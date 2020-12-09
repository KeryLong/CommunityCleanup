

function addTeamMembers() {
  let appendDiv = document.getElementById("addTeamMemberDiv");
  let Name = document.createElement("input");
  
  Name.setAttribute('type', 'text');
  Name.setAttribute('placeholder', 'Name');
  Name.setAttribute('id', 'newTeammateName');
  appendDiv.appendChild(Name);
  
}
//DONATION DETAILS ONCLICK FUNCTION

function addDonationDetails() {
  let appendDiv = document.getElementById("addDonationDetailsDiv");
  let details = document.createElement("textarea");
  


  
  details.setAttribute('placeholder', 'Add additional details here. ');
  
  appendDiv.appendChild(details);

}
