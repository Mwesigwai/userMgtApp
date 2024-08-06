export function showUserDetails(user) {
    const name = document.querySelector('#name');
    const userName = document.querySelector('#username');
    const company = document.querySelector('#company');
    const email = document.querySelector('#email');
    const phone = document.querySelector('#phone');
    const website = document.querySelector('#website');

    name.value = user.name;
    userName.value = user.username;
    company.value = user.company.name;
    email.value = user.email;
    phone.value = user.phone;
    website.value = user.phone;
}
