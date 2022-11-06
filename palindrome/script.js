body = document.querySelector("body");
url = 'https://source.unsplash.com/'+String(window.innerWidth)+"x"+String(window.innerHeight)+'/?math'
body.style.backgroundImage = "url("+url+")"

function check(n){
  n = String(n);
  newS = "";
  k = n.length;
  for (i = k-1; i>=0; i--){
    newS += n[i];
  }
  if (n == newS){
    return true;
  }
  else {
    return false;
  }
}

function btn(){
  z = document.getElementById("inp");
  //alert(z.value)
  if (z.value != ""){
    res = check(z.value);
    alert(res);
  }
}
