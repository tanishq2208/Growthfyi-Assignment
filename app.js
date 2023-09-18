const express = require('express');
const axios = require('axios');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const apiUrl = 'https://api.dataforseo.com/v3/on_page/instant_pages'; // Replace with the actual endpoint
const username = 'tan2208.gkp@gmail.com';
const password = '700bba3491943260';

app.post('/seoInfo', (req, res) => {
    const post_array = [];
    post_array.push({
        "url": req.body.url,
        "enable_javascript": true,
        "custom_js": "meta = {}; meta.url = document.URL; meta;"
    });
    axios({
        method: 'post',
        url: apiUrl,
        auth: {
            username: username,
            password: password
        },
        data: post_array,
        headers: {
            'content-type': 'application/json'
        }
    }).then(function (response) {
        const result = response['data']['tasks'][0]['result'][0]['items'][0];
        console.log('request processed....');
        res.json(result);
    }).catch(function (error) {
        console.log('Something went wrong: ', error);
    });
});

app.listen(port, () => {
    console.log('Listening on port ${port}');
})