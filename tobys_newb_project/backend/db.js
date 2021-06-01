/*카테고리 별 옷 목록을 저장하는 역할*/
let db = {
    top : [
        {
            id: 0,
            text: "123",
            wished: true
        },
        {
            id: 1,
            text: "123df",
            wished: true
        }

    ],
    bottom : [],
    shoes : [],
    outer : [],
    accessory: [],
}
function getAll(category, callback) {
    callback(db[category]);
}
function add(category, body, callback) {
    let id = db[category].length;
    db[category].push({id: id, text: body.text, wished: body.wished});
    //console.log(db[category]);
    callback();
}

//db.c1.push(item);
module.exports = {
    getAll,
    add
  };