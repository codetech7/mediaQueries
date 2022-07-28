window.onload = myFunction;
window.onresize = myFunction;

function myFunction(){
    const myWidth = window.innerWidth;
    const myHeight = window.innerHeight;
    document.getElementById('size').innerHTML = 'width:' + myWidth + ' height:' + myHeight;
}