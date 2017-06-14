/* assume_userstories */
function submitFilterForm() 
{
	document.getElementById('filterform').submit();
}

function loadUserStory() 
{
  var imgObj;
  var oid='product_backlog_show_info';
  
  imgObj = document.getElementById(oid);
  //alert(imgObj.dataset.rowId);
  //alert(imgObj.dataset.urlPlugin);
  loadUserstoryNoExpert(imgObj.dataset.rowId,imgObj.dataset.urlPlugin);

}

// Add event listeners once the DOM has fully loaded by listening for the
// `DOMContentLoaded` event on the document, and adding your listeners to
// specific elements when it triggers.
document.addEventListener('DOMContentLoaded', function () {

  var oid='show_only_us_without_storypoints';
  var nodeSet;

  nodeSet = document.getElementsByClassName("assume");

  oid='assume_userstories';
  document.getElementById(oid).addEventListener('click', deleteCookie);

  oid='product_backlog_show_info';
  document.getElementById(oid).addEventListener('click', loadUserStory);


});