import { getAllIds, getId } from "../../users/cacheId.js";
import { updateUser } from "../../users/updateUser.js";
import { showUserDetails } from "../viewUser/showUserDetails.js";

const urlParameters = new URLSearchParams(window.location.search);
const response = await fetch(`https://jsonplaceholder.typicode.com/users/${urlParameters.get('id')}`, {
    method:'get',
    mode:'cors',
});

const form = document.querySelector('.updateForm');
if (response.ok) {
    const user = await response.json();
    showUserDetails(user);
    
    form.addEventListener('submit', async (event)=>{
        event.preventDefault();
        const submitBtn = document.querySelector('.updateForm button');
        submitBtn.hidden = true;
        const newUser = new FormData(form);
        const userObj = Object.fromEntries(newUser);
        
        await updateUser(JSON.stringify(userObj), urlParameters.get('id'));
    })
}
