let loginform=document.getElementById("loginForm");
let signupform=document.getElementById("signupForm");

let signup_submitBtn=document.getElementById("signupBtn");
let login_submitBtn=document.getElementById("loginBtn");

let signupBtn=document.getElementById("signup");
let loginBtn=document.getElementById("login");

let loginLink=document.getElementById("loginLink");
let signupLink=document.getElementById("signupLink");

function showSignup (e){
e.preventDefault();
signupform.classList.remove("hidden");
loginform.classList.add("hidden");
}

function showLogin(e)
{
e.preventDefault();
signupform.classList.add("hidden");
loginform.classList.remove("hidden");
}

let i = JSON.parse(localStorage.getItem("userCounter")) || 0;

    signupBtn.addEventListener("click",showSignup);
    signupLink.addEventListener("click",showSignup);

    loginBtn.addEventListener("click",showLogin);
    loginLink.addEventListener("click",showLogin);


let users=JSON.parse(localStorage.getItem("users"))||[];

signup_submitBtn.addEventListener("click",function (e){
    e.preventDefault();

    if(document.body.dir==="rtl"){
        document.getElementById("signup_name")
    }

    let uname = document.getElementById("signup_name");
    let uemail=document.getElementById("email");
    let pass=document.getElementById("signup_password");
    let userId=++i;
    localStorage.setItem("userCounter", JSON.stringify(i));

    let found = users.find(
    (element) =>
    element.username === uname.value || element.email === uemail.value
    );

    if (found){
    alert("Accout already exists!");
    showSignup(e);
    }

        else if (uname.value!=="" && uemail.value!=="" && pass.value!=="" ){
        let User={username:uname.value,email:uemail.value,password:pass.value,id:userId,isNew:true};
        users.push(User);
        localStorage.setItem("users",JSON.stringify(users));
        localStorage.setItem("currentUser", JSON.stringify(User));
        alert("Account created successfully");
        window.location.href = "index.html";
        }});

    login_submitBtn.addEventListener("click",function(e){
    e.preventDefault();
    let loginname=document.getElementById("login_name");
    let loginpass=document.getElementById("login_password");
    let found = users.find(
    (element) =>
        element.username === loginname.value &&
        element.password === loginpass.value 
    );

    if(found){
        found.isNew=false;
        alert("logged in successfully");
        localStorage.setItem("currentUser", JSON.stringify(found));
        window.location.href = "index.html";
        
    }
    else{
        alert("Account not found");
        loginname.value="";
        loginpass.value="";
        showLogin(e);
    }
})





// login_submitBtn.addEventListener("click", function(e) {
//   e.preventDefault();

//   let loginname = document.getElementById("login_name");
//   let loginpass = document.getElementById("login_password");

//   let found = users.find(function(element) {
//     return element.username === loginname.value &&
//            element.password === loginpass.value;
//   });

//   if (found) {
//     alert("Logged in successfully");
//     window.location.href = "index.html";
//   } else {
//     alert("Invalid username or password");
//   }
// });


// let loginform = document.getElementById("loginForm");
// let signupform = document.getElementById("signupForm");
// let signup_submitBtn = document.getElementById("signupBtn");
// let login_submitBtn = document.getElementById("loginBtn");

// let signupBtn = document.getElementById("signup");
// let loginBtn = document.getElementById("login");

// // زرار يظهر الفورم بتاع signup
// signupBtn.addEventListener("click", function (e) {
//   e.preventDefault();
//   signupform.classList.remove("hidden");
//   loginform.classList.add("hidden");
// });

// // زرار يظهر الفورم بتاع login
// loginBtn.addEventListener("click", function (e) {
//   e.preventDefault();
//   loginform.classList.remove("hidden");
//   signupform.classList.add("hidden");
// });

// let users = JSON.parse(localStorage.getItem("users")) || [];

// // Sign up
// signup_submitBtn.addEventListener("click", function (e) {
//   e.preventDefault();

//   let uname = document.getElementById("signup_name");
//   let uemail = document.getElementById("email");
//   let pass = document.getElementById("signup_password");

//   // Check لو اليوزر موجود قبل كدا
//   let exists = users.some(
//     (element) =>
//       element.username === uname.value && element.email === uemail.value
//   );

//   if (exists) {
//     alert("Account already exists!");
//     return;
//   }

//   let newUser = {
//     username: uname.value,
//     email: uemail.value,
//     password: pass.value,
//   };

//   users.push(newUser);
//   localStorage.setItem("users", JSON.stringify(users));

//   alert("Account created successfully");
//   window.location.href = "index.html";
// });

// // Login
// login_submitBtn.addEventListener("click", function (e) {
//   e.preventDefault();

//   let loginname = document.getElementById("login_name");
//   let loginpass = document.getElementById("login_password");

//   let found = users.find(
//     (element) =>
//       element.username === loginname.value &&
//       element.password === loginpass.value
//   );

//   if (found) {
//     alert("Logged in successfully");
//     window.location.href = "index.html";
//   } else {
//     alert("Invalid credentials");
//   }
// });






