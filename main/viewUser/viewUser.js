import { updateUser } from "../../users/updateUser.js";
import { getUserDetails } from "./getUserDetails.js";
import { showUserDetails } from "./showUserDetails.js";


const editButton = document.querySelector('.profileCard .userImage button');
const inputs = document.querySelectorAll('.userInfo .userData .formCard input');
const updateButton = document.querySelector('.update');
const urlParameters = new URLSearchParams(window.location.search);
const response = await getUserDetails(urlParameters.get('id'));

const name = document.querySelector('#name');
const userName = document.querySelector('#username');
const company = document.querySelector('#company');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const website = document.querySelector('#website');

if (response.ok) {
    const user = await response.json();
    showUserDetails(user);
}

editButton.onclick = ()=>{
    if (window.navigator.onLine) {
        const name = document.querySelector('#name');
        updateButton.hidden = false;
        for (const input of inputs) {
            input.style.padding = '.1em'
            input.removeAttribute('readonly')
        }
        name.focus();
    }
    else{
        alert('connect to internet to edit')
    }
}


const form = document.querySelector('.userInfo .userData');
form.addEventListener('submit', ( async (event)=>{
    updateButton.hidden = true;
    event.preventDefault();
    const obj = {
        name: name.value,
        username :userName.value,
        company: company.value,
        email:email.value,
        phone:phone.value,
        website:website.value
    }

    await updateUser(JSON.stringify(obj), urlParameters.get('id'));
}));
