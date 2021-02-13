//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyBR6rjYLwJeCQdSmJI4CKGKLZ07OA7lEs8",
    authDomain: "let-s-chat-cc40f.firebaseapp.com",
    databaseURL: "https://let-s-chat-cc40f-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-cc40f",
    storageBucket: "let-s-chat-cc40f.appspot.com",
    messagingSenderId: "612318693753",
    appId: "1:612318693753:web:251f02d7e418d5f69587a8",
    measurementId: "G-G7M5QB23QW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  username=localStorage.getItem("UsernameKey");
  room_name=localStorage.getItem("roomnamekey");
  document.getElementById("roomname").innerHTML="roomname-"+room_name;

  function send(){
        message=document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
              name:username,msg:message,like:0
        });
        document.getElementById("msg").value="";
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
function logout(){
    localStorage.removeItem("UsernameKey");
    localStorage.removeItem("roomnamekey");
    window.location="index.html";
}