import { usersPerPage } from "./usersPerPage.js";

export function purginateUsers(users, page) {
    const start = (page - 1) * usersPerPage;
    const end = start + usersPerPage;
    return users.slice(start, end);
}