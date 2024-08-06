import { handleTableActions } from "../tableActions/handleTableActions.js";
import { loadUsers } from "../users/loadUsers.js";

const tableBody = document.querySelector('main table #tableBody');
const newUser = JSON.parse(localStorage.getItem('newUser'));
const rowNumber = JSON.parse(localStorage.getItem('row'));


tableBody.addEventListener('click', async(event)=> {
    if (event.target.parentElement.classList.contains('action')) {
        const actionName = event.target.textContent;
        const row = event.target.parentElement.parentElement;
        await handleTableActions(actionName, row);
    }
});
await loadUsers(1);

if(newUser){
    const rowToUpdate = tableBody.rows[rowNumber-1];
    const firstName = newUser.name.split(' ')[0];
    const lastName = newUser.name.split(' ')[1];
    rowToUpdate.children[0].textContent = firstName;
    rowToUpdate.children[1].textContent = lastName;
    rowToUpdate.children[2].textContent = newUser.email;
    localStorage.clear();
}
