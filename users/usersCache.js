import { fetchUsers } from "./fetchUsers.js";
export let cache = [];
export async function getUsersFromCache() {
    if(cache.length === 1 || cache.length === 0){
        const users = await fetchUsers();
        cache.push(...users);
        return cache;
    }else{
        return cache
    }
}

export const totalUsers = cache.length;