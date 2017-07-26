var xmlHttp
var id

function submit_post(url)
{ 
var post = document.getElementById('post_text').value;
//alert(url);
//text = document.getElementById("pic_text"+id).value
xmlHttp=GetXmlHttpObject(stateChanged)
xmlHttp.open("Post", url);
xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
xmlHttp.send("post="+post+"&todo=post");
}

function remove_user(url, username, id)
{ 
this.id = id;
//alert(url);
//text = document.getElementById("pic_text"+id).value
xmlHttp=GetXmlHttpObject(stateChanged_remove)
xmlHttp.open("Post", url);
xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
xmlHttp.send("username="+username+"&todo=remove");
}


function stateChanged() 
{ 

	if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
	{ 
	//alert(xmlHttp.responseText);
	document.getElementById("post_form").innerHTML=xmlHttp.responseText 
	
	} 
} 

function stateChanged_remove() 
{ 

	if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
	{ 
	//alert(xmlHttp.responseText);
	document.getElementById("remove_user_div_"+id).innerHTML=xmlHttp.responseText 
	
	} 
} 

function GetXmlHttpObject(handler)
{ 
var objXmlHttp=null

if (navigator.userAgent.indexOf("Opera")>=0)
{
alert("This example doesn't work in Opera") 
return 
}
if (navigator.userAgent.indexOf("MSIE")>=0)
{ 
var strName="Msxml2.XMLHTTP"
if (navigator.appVersion.indexOf("MSIE 5.5")>=0)
{
strName="Microsoft.XMLHTTP"
} 
try
{ 
objXmlHttp=new ActiveXObject(strName)
objXmlHttp.onreadystatechange=handler 
return objXmlHttp
} 
catch(e)
{ 
alert("Error. Scripting for ActiveX might be disabled") 
return 
} 
} 
if (navigator.userAgent.indexOf("Mozilla")>=0)
{
objXmlHttp=new XMLHttpRequest()
objXmlHttp.onload=handler
objXmlHttp.onerror=handler 
return objXmlHttp
}
} 