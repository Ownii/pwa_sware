import { fromJS } from 'immutable';
export default async function(url, data) {
    const headers = new Headers();
    headers.append('Accept', `application/json`);
    headers.append('Content-Type', `application/json`);
    const config = {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
    };
    const response = await fetch(url, config);
    const json = await response.json();
    return fromJS(json);
}
