import { usersPerPage } from "../users/usersPerPage.js";

export function showPagination(totalUsers) {
    const paginationDiv = document.querySelector('.pagination');
    const totalPages = (Math.ceil(totalUsers / usersPerPage));
    paginationDiv.innerHTML = '';
    for(let i = 0; i< totalPages; i++){
        const button = document.createElement('button');
        button.textContent = i+1;
        paginationDiv.appendChild(button);
    }
}