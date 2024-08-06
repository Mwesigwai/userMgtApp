const sessionIds = new Map();
export function cacheId(user) {
    sessionIds.set(user.name, user.id);
}

export function getId(userName) {
    const id =  sessionIds.get(userName);
    return id;
}

export function getAllIds() {
    return sessionIds;
}