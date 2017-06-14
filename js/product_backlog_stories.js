/* product_backlog_stories */
function submitFilterForm() 
{
	document.getElementById('filterform').submit();
}

// Add event listeners once the DOM has fully loaded by listening for the
// `DOMContentLoaded` event on the document, and adding your listeners to
// specific elements when it triggers.
document.addEventListener('DOMContentLoaded', function () {
  var oid='show_only_us_without_storypoints';	
  document.getElementById(oid).addEventListener('click', submitFilterForm);

  oid='show_resolved_userstories';
  document.getElementById(oid).addEventListener('click', submitFilterForm);

  oid='show_closed_userstories';
  document.getElementById(oid).addEventListener('click', submitFilterForm);

  oid='show_only_userstories_without_sprint';
  document.getElementById(oid).addEventListener('click', submitFilterForm);

  oid='show_only_project_userstories';
  document.getElementById(oid).addEventListener('click', submitFilterForm);

  oid='show_project_target_version';
  document.getElementById(oid).addEventListener('click', submitFilterForm);


});