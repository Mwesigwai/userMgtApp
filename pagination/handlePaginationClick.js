import { loadUsers } from "../users/loadUsers.js";

export function handlePaginationClick() {
    const pagination = document.querySelector('.pagination');
    pagination.removeEventListener('click', handle);
    pagination.addEventListener('click', handle);
}

function handle(event) {
    if (event.localName != 'div') {
        loadUsers(Number(event.target.textContent));
    }
}