const request = require("request");

const opt = {
    url: "http://localhost:3000",
    method: "GET"
};

const promiseJSON = () => {
    return new Promise(resolve => {
        request(opt, (err, res, body) => {
            detectJSON = JSON.parse(body);
            resolve(detectJSON);
        });
    });
};

let translateDataString;

// promiseJSON()
//     .then(data => {
//         translateDataString = `source=${data.langCode}&target=ko&text=ありがとうございます。`;
//         console.log(translateDataString);
//     })
//     .catch(console.error);

(async () => {
    let data = await promiseJSON();
    translateDataString = `source=${data.langCode}&target=ko&text=ありがとうございます。`;
    console.log(translateDataString);
})();
