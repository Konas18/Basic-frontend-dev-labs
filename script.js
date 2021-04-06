var key = new Boolean(false)                
var username;                
function knopka() {
if(key==true){
    alert("Я это сделал, а " + username + " тебе от меня совет: \"Поступай правильно - поступай в ВятГУ!\"")
}
else{
    username = prompt("Привет, скажи твоё имя.");
    alert("Я это сделал, а " + username + " тебе от меня совет: \"Поступай правильно - поступай в ВятГУ!\"");
    key = true;
}
}
