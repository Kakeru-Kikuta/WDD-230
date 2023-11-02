var day = new Date(document.lastModified);
var y = day.getFullYear();
var m = day.getMonth();
var d = day.getDate();
var t = day.getTime();

if (m < 10) m ="0" + m;
if (d < 10) d = "0" + m;

year.innerHtml += y;
modDay.innerHtml += m+"/"+d+"/"+y;