export async function updateUser(user, id) {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    
    const response = await fetch(url, {
        method: 'put',
        mode:'cors',
        body:user
    });
    if(response.ok){
        localStorage.setItem('newUser', user);
        window.location.href = 'http://127.0.0.1:5500/main/app.html';
    }
}

