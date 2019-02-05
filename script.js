var input=document.getElementById("input");
var button=document.getElementById("enter");
var ul=document.querySelector("ul");

function createElement(){
	var li=document.createElement("li");
	var newbutton=document.createElement("button");
	newbutton.innerHTML="remove item";
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(newbutton);
	ul.appendChild(li);
	li.addEventListener("click",toggle);
	newbutton.addEventListener("click",function(){
		li.remove();
	})
	input.value="";
}
button.addEventListener("click",function(){
	if(input.value.length > 0){
	createElement();
	}
});

input.addEventListener("keypress",function(enter){
	if(input.value.length > 0 && event.which===13){
		createElement();
	}
});

var list= document.querySelectorAll('#nav>ul>li');
for (var i =0; i<list.length;i++){
	list[i].addEventListener("click",toggle);
}

function toggle(){
	this.classList.toggle("done");
}

/*element.classList.toggle("mystyle");*/