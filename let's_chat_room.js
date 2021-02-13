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
  document.getElementById("username").innerHTML="Welcome "+username+" !";
  
  function addroom(){
        roomname=document.getElementById("roomname").value;
        localStorage.setItem("roomnamekey",roomname);
        firebase.database().ref("/").child(roomname).update({
              purpose:"addingroomname"
        })
        window.location="let's_chat_page.html";
  }
  
  
  
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;ReferenceError
        //Start code
  
        //End code
        });});}
  getData();
  