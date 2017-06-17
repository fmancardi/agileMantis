/* sprint_backlog_actions.js */
function sprintConfirmation() 
{
  var oo;
  var go;
  var oid='confirm_sprint_btn';
  oo = document.getElementById(oid);

  go = acceptSprintConfirm(oo.dataset.q1,oo.dataset.q2); 
  if(go)
  {
  	document.getElementById('confirmSprintForm').submit();
  }	
}



// Add event listeners once the DOM has fully loaded by listening for the
// `DOMContentLoaded` event on the document, and adding your listeners to
// specific elements when it triggers.
document.addEventListener('DOMContentLoaded', function () {
  var oid='confirm_sprint_btn';	
  document.getElementById(oid).addEventListener('click', sprintConfirmation);

});