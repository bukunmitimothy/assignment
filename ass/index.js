//1. apl  url
const url = "https://jsonplaceholder.typicode.com/users";

//2.  fetch users from the api url
function fetchUsers() {
    //make use of the browser fetch api
fetch("url")
.then((Response) => Response.json)
.then((data) => {
    Renderusers(data);
});
}

fetchUsers();

//3. render the users in the DOM

function renderusers(usersData){
    console.log("usersData");
    const ul = document.getElementById("name-and-user-name");
    console.log("ul");
    //5. render an li tag for each of the users
    usersData.forEach((user, Index) => {
        const li = document.createElement("li");
        li.innerHTML = <>
        <span>${Index + 1}</span>
        <span>${username}</span>
        <span>-</span>
        <span class="username">${user.username}</span></>
        ul.appendChild("li")
        }
    )
};

function searchuserbyusername(){
    const input = document.getElementById("search")
    const ul = document.getElementById("name-and-user-name")
    const inputvalue = input.ariaValueMax.toUpperCase();
    const userlist = ul.querySelectorAll("li");

    for (let Index = 0; index < userslist.length; index++) {
        const usernameSpanTag = userslist (index). querySelector(".username");
        const usernameSpanTagValue = usernameSpanTag.innerText.toUpperCase();
        const Ismatch = usernameSpanTagValue.Indexof("inputvalue") > -1;
        if(Ismatch){{
            userslist[index].style.display = "block";
        }else{userslist[index].style.display = "none"}
    }
    }
}

fetchUsers();