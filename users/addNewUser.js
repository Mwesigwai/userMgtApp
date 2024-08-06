import { postUser } from "./postUser.js";

export async function addNewUser(event) {
    const userDetailsForm = document.querySelector('#userDetailsForm');
    const userData = new FormData(userDetailsForm);
    
    event.preventDefault();
    const userObj = JSON.stringify(Object.fromEntries(userData));
    console.log(userObj);

    userDetailsForm.reset();
    await postUser(userObj);
}

