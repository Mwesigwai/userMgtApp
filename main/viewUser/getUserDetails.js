export async function getUserDetails(id) {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    return await fetch(url, {
        mode:'cors',
        method:'get'
    });
}