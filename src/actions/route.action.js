export const CHANGE_ROUTE = 'CHANGE_ROUTE';

export function changeRoute(path) {
    return {
        type: CHANGE_ROUTE,
        path
    };
}
