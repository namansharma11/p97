function adduser() {
    user_name = document.getElementById("user_name").value;
    
    localStorage.getItem("user_name", user_name);
    
      window.location = "kwitter_room.html";
  }
  
  
  
  // Your web app's Firebase configuration
  
  var firebaseConfig = {
    apiKey: "AIzaSyDRfzlau2exSI8SPZqSPO17f6sxc8hcEWs",
    authDomain: "classtest-d428d.firebaseapp.com",
    projectId: "classtest-d428d",
    storageBucket: "classtest-d428d.appspot.com",
    messagingSenderId: "952855662518",
    appId: "1:952855662518:web:0cc6e7b0ddf8d58c1f3b17"
  
  };
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
    
    firebase.database().ref("/").child("room_name").update({  
      purpose : "adding room name"
    });
    
    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
  }
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementByID("output").innerHTML;
         Group_name = childKey;
         //Start Code
           console.log(firebase_message_id);
           console.log(message_data);
           name = message_data['name'];
           message = message_data['message'];
           like = message_data['like'];
           name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
           message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
      like_button = "button class='btn btn-warning' id="                                                                             
         });});}
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
    
  }
  
  function logout()
  {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = ("kwitter.html");
  }
  
  function send()
  {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
    });
    
    document.getElementById("msg").value = "";
  }
   
  function updateLike(message_id)
  {
    console.log("clicked on like button - " + message_id);
    button_id = message_id;
    like = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;
    console.log(updated_likes);
    
  firebase.database().ref(room_name).child(message_id).update({
    like = updated_likes
    });
    
  }