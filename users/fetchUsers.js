export async function fetchUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const response = await fetch(url, {
        method:'GET',
        mode:'cors'
    });

    const users = await response.json();
    return users;
}