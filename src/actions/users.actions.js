export const REQUEST_USERS_SUCCEEDED = 'REQUEST_USERS_SUCCEEDED';
export const REQUEST_USERS_FAILED = 'REQUEST_USERS_FAILED';
export const REQUEST_USERS = 'REQUEST_USERS';

export function requestUsersSucceeded(users) {
    return {
        type: REQUEST_USERS_SUCCEEDED,
        users
    };
}

export function requestUsersFailed() {
    return {
        type: REQUEST_USERS_FAILED
    };
}

export function requestUsers() {
    return {
        type: REQUEST_USERS
    };
}
