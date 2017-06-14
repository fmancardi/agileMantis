function teamIDOnChageHandler() 
{
	this.form.submit();
}

// Add event listeners once the DOM has fully loaded by listening for the
// `DOMContentLoaded` event on the document, and adding your listeners to
// specific elements when it triggers.
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('team_id').addEventListener('change', teamIDOnChageHandler);
});