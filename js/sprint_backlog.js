/* sprint_backlog.js */
function submitSprintBacklogForm() 
{
	document.getElementById('sprint_backlog_form').submit();
}


// Add event listeners once the DOM has fully loaded by listening for the
// `DOMContentLoaded` event on the document, and adding your listeners to
// specific elements when it triggers.
document.addEventListener('DOMContentLoaded', function () {
  var oid='show_project_target_version';	
  document.getElementById(oid).addEventListener('click', submitSprintBacklogForm);

  oid='show_only_open_userstories';
  document.getElementById(oid).addEventListener('click', submitSprintBacklogForm);

  oid='show_only_own_userstories';
  document.getElementById(oid).addEventListener('click', submitSprintBacklogForm);


});