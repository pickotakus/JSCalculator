function insert(num)
{
	document.form.textview.value = document.form.textview.value+num
}
function equal()
{
	var expression = document.form.textview.value;
	if(expression)
	{
		document.form.textview.value = eval(expression)
	}
}
function c()
{
	document.form.textview.value = "";
}
function b()
{
	var expression = document.form.textview.value;
	document.form.textview.value = expression.substring(0,expression.length-1);
}
