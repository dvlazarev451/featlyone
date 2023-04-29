'use strict';

const fetch = require('node-fetch');

const API_KEY = 'featlytalksfu_default_secret';
// const FEATLYTALK_URL = 'https://talk.featly.io/api/v1/meeting';
const FEATLYTALK_URL = 'https://localhost:3010/api/v1/join';

function getResponse() {
    return fetch(FEATLYTALK_URL, {
        method: 'POST',
        headers: {
            authorization: API_KEY,
            'Content-Type': 'application/json',
        },
    });
}

getResponse().then(async (res) => {
    console.log('Status code:', res.status);
    const data = await res.json();
    console.log('meeting:', data.meeting);
});