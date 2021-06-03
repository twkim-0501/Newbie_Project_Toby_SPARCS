const { removeAllListeners } = require("nodemon");

let codyDB = {
    "Sun": [
        {
            id: 100,
            top: "a",
            bottom: "b",
            shoes: "c",
            outer: "d",
            accessory: "e",
        },
        {
            id: 110,
            top: "a",
            bottom: "b",
            shoes: "c",
            outer: "d",
            accessory: "e",
        }
    ],
    "Mon": [],
    "Tue": [],
    "Wed": [],
    "Thu": [],
    "Fri": [],
    "Sat": [],
}

function getAll(callback) {
    callback(codyDB);
}

function add(cody, callback) {
    let newid
    for (var i = 0 ; i< cody.day.length ; i++){
        newid=Math.random().toString(36).substr(2,11);
        codyDB[cody.day[i]].push({id: newid, top: cody.top, bottom: cody.bottom,
            shoes: cody.shoes, outer: cody.outer, accessory: cody.accessory});
    }
    callback();
}
function remove(body, callback) {
    codyDB[body.day]=codyDB[body.day].filter(cody => (cody.id!== body.id));
    callback();
}
module.exports = {
    getAll,
    add,
    remove
  };