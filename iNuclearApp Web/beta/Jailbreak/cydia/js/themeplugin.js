var $$=Dom7;$$("body").addClass("theme-black");var check=""
var className="layout-dark theme-white";
var body=document.getElementById("changethistheme");
function changeTheme()
{
	if(document.getElementById("theme").checked) {
		localStorage.setItem('className',className);
		body.setAttribute("class",className);e.stopPropagation()
		;}
	else {
		localStorage.removeItem('className',className);
		body.removeAttribute("class",className);e.stopPropagation()
;}}
var retrievedClassName=localStorage.getItem('className');
	if(retrievedClassName) {
		body.setAttribute("class",retrievedClassName)
		;}
document.addEventListener('DOMContentLoaded',function() {
	var theme=document.querySelector('#theme');
	var isChecked=parseInt(localStorage.getItem('isChecked'));
	theme.checked=isChecked;
	theme.addEventListener('change',function() {
		var checked=this.checked?1:0;
		localStorage.setItem('isChecked',checked)
;});});