/*

My Custom JS
============

Author:  Brad Hussey
Updated: August 2013
Notes:	 Hand coded for Udemy.com

*/
$(function()
{
	$('a.pop').click(function(e){
		e.preventDefault();
		
	});
	$('a.pop').popover();
	$('#carousel').carousel({
                interval: 2000
        });

});