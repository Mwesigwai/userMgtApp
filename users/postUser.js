export async function postUser(user) {
    const url = 'https://jsonplaceholder.typicode.com/users';
    
    const response = await fetch(url, {
        method: 'post',
        mode:'cors',
        body:user
    });
    if(response.ok){
        localStorage.setItem('newUser', user);
        window.location.href = 'http://127.0.0.1:5500/main/app.html';
    }
}