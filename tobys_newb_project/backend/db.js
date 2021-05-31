/*카테고리 별 옷 목록을 저장하는 역할*/
let db = {
    top : [
        {
            id: 0,
            name: "123",
            wished: true
        },
        {
            id: 1,
            name: "123df",
            wished: true
        },
        {
            id: 2,
            name: "1sdf23",
            wished: false
        },

    ],
    bottom : [],
    shoes : [],
    outer : [],
    accessory: [],
}
function getAll(id, callback) {
    callback(db[id]);
}
//db.c1.push(item);
