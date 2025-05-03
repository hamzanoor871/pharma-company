var firebaseConfig = {
  apiKey: "AIzaSyAg60IS1RcfZUif6m0RTu2e_hIlvrr4Bc4",
  authDomain: "authentication-7dddb.firebaseapp.com",
  databaseURL: "https://authentication-7dddb-default-rtdb.firebaseio.com",
  projectId: "authentication-7dddb",
  storageBucket: "authentication-7dddb.firebasestorage.app",
  messagingSenderId: "744444976093",
  appId: "1:744444976093:web:d3b612e7989904d4b3b434"
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);
// var database = firebase.initializeApp(app);


function login() {
   var userName = document.getElementById("login-Username").value
    var email = document.getElementById("login-Email").value
   var  password = document.getElementById("login-password").value
    console.log(userName)
    console.log(email)
    console.log(password)
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error.message)
      });
    
    

  }
  

  function signup() {
    var userName = document.getElementById("SignUp-Username").value
     var email = document.getElementById("SignUp-mail").value
    var  password = document.getElementById("SignUp-password").value
     console.log(userName)
     console.log(email)
     console.log(password)

     var auth = firebase.auth().createUserWithEmailAndPassword(email ,password)
       .then((userCredential) => {
         // Signed up 
         var user = userCredential.user;
         console.log(user)
         // ...
       })
       .catch((error) => {
         var errorCode = error.code;
         var errorMessage = error.message;
         // ..
         alert(errorMessage)
       });
     
 
  } 
  var swiper = new Swiper('.swiper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
  });
  