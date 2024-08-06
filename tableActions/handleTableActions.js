import { table } from "../getTableBody.js";
import { getId } from "../users/cacheId.js";
import { loadUsers } from "../users/loadUsers.js";
import { cache } from "../users/usersCache.js";

const dialog = document.querySelector('#deleteDialog');
const deleteBtn = document.querySelector('#deleteButton');
const cancelBtn = document.querySelector('#cancelButton');
const dialogText = document.querySelector('#deleteDialog p');
const tableBody = table;

cancelBtn.addEventListener('click', ()=> dialog.close());


export async function handleTableActions(actionName, row) {
    const firstName = row.children[0].textContent;
    const fullName = `${firstName} ${row.children[1].textContent}`;
    
    
    switch (actionName) {
        case 'Delete':
            dialog.showModal();
            dialogText.textContent = `You are deleting ${fullName}`;
            deleteBtn.onclick = async () =>await deleteUser(row, fullName);
            break;

        case 'View':
            localStorage.setItem('row', JSON.stringify(row.rowIndex));
            const viewUrl = `http://127.0.0.1:5500/main/viewUser/viewuser.html?id=${getId(fullName)}`;
            window.location.href = viewUrl;
            break;
        case 'Update':
            localStorage.setItem('row', JSON.stringify(row.rowIndex));
            const updateUrl = `http://127.0.0.1:5500/main/updateUser/updateuser.html?id=${getId(fullName)}`;
            window.location.href = updateUrl;
            break;
        default:
            break;
    } 
}


async function deleteUser(row, fullName) {
    if (navigator.onLine) {
        deleteBtn.disabled = true;
        const id = getId(fullName);
        const url = `https://jsonplaceholder.typicode.com/users/${id}`;
        
        const response = await fetch(url, {
            method:'DELETE',
            mode:'cors'
        });
        if(response.ok){
            tableBody.deleteRow(row.rowIndex-1);
            //loadUsers(1);
            dialog.close();
            deleteBtn.disabled = false;
            cache.splice(cache.findIndex(u => u.name = fullName), 1);    
        }
    }else{
        alert('No internet connection cant delete user');
    }
}

