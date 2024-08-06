import { handlePaginationClick } from "../pagination/handlePaginationClick.js";
import { showPagination } from "../pagination/showPagination.js";
import { appendUser } from "./appendUser.js";
import { cacheId } from "./cacheId.js";
import { fetchUsers } from "./fetchUsers.js";
import { purginateUsers } from "./paginateUsers.js";

let isLoading = false;

export async function loadUsers(page) {
    if (isLoading) 
        return;
    isLoading = true;
    const tableBody = document.querySelector('main table #tableBody');
    const pagination = document.querySelector('.pagination');
    const users = await fetchUsers();
    let purginatedUsers = purginateUsers(users, page);
    
    tableBody.innerHTML = '';
    purginatedUsers.forEach(user => {
        appendUser(tableBody, user);
        cacheId(user);
    });
    
    pagination.innerHTML = '';
    showPagination(users.length);
    handlePaginationClick();

    isLoading = false;
}