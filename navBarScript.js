function hover(a)
{
    var p=document.getElementById("item"+a);
   p.style.width="2px";
   p.style.transform="scaleX(35)";
   p.style.borderRight="10px";
}

function unhover(a)
{
    var p=document.getElementById("item"+a);
    p.style.width="0px";
    p.style.transform="scaleX(1)";
}