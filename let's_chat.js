function login(){
    username=document.getElementById("username").value;
    localStorage.setItem("UsernameKey", username);
    window.location="let's_chat_room.html";
}