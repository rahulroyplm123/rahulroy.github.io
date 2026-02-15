function login() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if(user == "admin" && pass == "1234") {
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("msg").innerHTML = "Wrong Username or Password!";
    }
}

function logout() {
    window.location.href = "index.html";
}

function goData() {
    window.location.href = "data.html";
}

function back() {
    window.location.href = "dashboard.html";
}

function saveData() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;

    if(name == "" || phone == "") {
        alert("Please fill all fields");
        return;
    }

    var oldData = localStorage.getItem("userdata");
    var data = oldData ? JSON.parse(oldData) : [];

    data.push({name:name, phone:phone});
    localStorage.setItem("userdata", JSON.stringify(data));

    alert("Data Saved!");

    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
}

function viewData() {
    window.location.href = "view.html";
}