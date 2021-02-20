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
//Start code
console.log (firebase_message_id);
console.log (message_data);
user_name=message_data["name"];
message=message_data["msg"];
like=message_data["like"];
name_tag="<h3>"+user_name+"<img class='user_tick' src='tick.png'></h3>";
msg_tag="<h3 class='message_h4'>"+message+"</h3>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='update_likes(this.id)'>";
span_tag="<span class='glyphicon glyphicon-thumbs-up'> like:"+like+"</span></button><hr>";
row=name_tag+msg_tag+like_button+span_tag;
document.getElementById("output").innerHTML+=row;
//End code
} });  }); }
getData();
function update_likes(msg_id){
console.log(msg_id)
likes=document.getElementById(msg_id).value;
newlikes=Number(likes)+1;
firbase.database.ref(room_name).child(msg_id).update({
      like:newlikes;
});
}