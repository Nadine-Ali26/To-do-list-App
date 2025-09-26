let container = document.querySelector(".container");
let addBtn = document.querySelector("#Add");
let input = document.querySelector("#input");
let langBtn = document.getElementById("lang");
let title = document.getElementById("title");

// signup elements
// let signupBtn = document.getElementById("signup");
// let loginBtn = document.getElementById("login");
// let loginLink = document.getElementById("loginLink");
// let signupLink = document.getElementById("signupLink");
// let title_signup = document.getElementById("title_signup");
// let name_signup = document.getElementById("username");
// let email = document.getElementById("email");
// let pass = document.getElementById("pass");
// let signup_submitBtn = document.getElementById("signupBtn");
// let login_submitBtn = document.getElementById("loginBtn");
// let usernameLogin = document.getElementById("usernameLogin");
// let passwordLogin = document.getElementById("passwordLogin");

let currentUser = JSON.parse(localStorage.getItem("currentUser"));

addBtn.addEventListener("click", function () {
    if (input.value !== "") {
        let divTask = document.createElement("div");
        let delBtn = document.createElement("button");

        if (document.body.dir === "ltr") {
            delBtn.innerHTML = "Delete";
        } else {
            delBtn.innerHTML = "حذف";
        }

        delBtn.style.background = "red";
        delBtn.id = "delBtn";

        let pTask = document.createElement("p");

        divTask.style.cssText =
            "display:flex; background: rgb(63, 63, 255); justify-content:center; align-items: center ; gap:40px; padding: 0 40px; margin:20px; border-radius:5px ";

        pTask.innerHTML = input.value;
        divTask.appendChild(pTask);
        divTask.appendChild(delBtn);
        container.appendChild(divTask);

        let tasks = JSON.parse(localStorage.getItem("tasks")) || {};
        if (!tasks[currentUser.id]) {
            tasks[currentUser.id] = [];
        }
        tasks[currentUser.id].push(input.value);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        input.value = "";

        // حذف المهمة
        delBtn.addEventListener("click", function () {
            divTask.remove();
            let tasks = JSON.parse(localStorage.getItem("tasks")) || {};
            let index = tasks[currentUser.id].indexOf(pTask.textContent.trim());
            if (index !== -1) {
                tasks[currentUser.id].splice(index, 1);
                localStorage.setItem("tasks", JSON.stringify(tasks));
            }
        });
    }
});

// الترجمات
