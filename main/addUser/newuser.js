import { addNewUser } from "../../users/addNewUser.js";


const form = document.querySelector('#userDetailsForm');
form.addEventListener('submit', addNewUser);
