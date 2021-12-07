const firebaseConfig = {
    apiKey: "AIzaSyB78BOd8u08o6dhufQ2vgWmTDUxNAfUxvs",
    authDomain: "bplcricket-ba0be.firebaseapp.com",
    databaseURL: "https://bplcricket-ba0be-default-rtdb.firebaseio.com",
    projectId: "bplcricket-ba0be",
    storageBucket: "bplcricket-ba0be.appspot.com",
    messagingSenderId: "644565317207",
    appId: "1:644565317207:web:db2238c2c322723ab1d512"
  };
  

 // Initialize Firebase
firebase.initializeApp(firebaseConfig);


function livedetails() {
    firebase.database().ref("/"+"TeamA").on('value', function(snapshot) { 
        snapshot.forEach(function(childSnapshot) { 
        childData = childSnapshot.val(); 
         team_a = childData;
         console.log(team_a);
  
    });  });
      document.getElementById("label").innerHTML = team_a;
    firebase.database().ref("/"+"TeamB").on('value', function(snapshot) { 
         snapshot.forEach(function(childSnapshot) { 
         childData = childSnapshot.val(); 
          team_b = childData;
          console.log(team_b);
   
     });  });
     firebase.database().ref("/"+"LiveScoreA").on('value', function(snapshot) { 
        snapshot.forEach(function(childSnapshot) { 
        childData = childSnapshot.val(); 
         live_a = childData;
         console.log(live_a);
  
    });  });
    firebase.database().ref("/"+"LiveScoreB").on('value', function(snapshot) { 
        snapshot.forEach(function(childSnapshot) { 
        childData = childSnapshot.val(); 
         live_b = childData;
         console.log(live_b);
  
    });  });
    firebase.database().ref("/"+"Description").on('value', function(snapshot) { 
        snapshot.forEach(function(childSnapshot) { 
        childData = childSnapshot.val(); 
         des = childData;
         console.log(des);
  
    });  });
    firebase.database().ref("scorecard").on('value', function(snapshot) { 
     
        snapshot.forEach(function(childSnapshot) { 
        childData = childSnapshot.key; 
        
         sc = childData;
        
         console.log(sc);

      
  
    });  });
  
    
}