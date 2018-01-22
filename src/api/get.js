import { fromJS } from 'immutable';
export default async function(url) {
    const headers = new Headers();
    headers.append('Accept', `application/json`);
    const config = {
        method: 'GET',
        headers
    };
    const response = await fetch(url, config);
    const json = await response.json();
    return fromJS(json);
}
