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
    //let len = db[category].length;
    //let newid = db[category][len-1].id + 1;
    let newid=Math.random().toString(36).substr(2,11);
    db[category].push({id: newid, text: body.text, wished: body.wished});
    console.log(db[category]);
    callback();
}
function remove(category, id, callback) {
    //db[category].splice(id, 1);
    //clothes.filter(cloth => (cloth.id!==id))
    db[category]= db[category].filter(cloth => (cloth.id!==id));
    //console.log(db[category]);
    callback();
}
function toggle(category, id, callback) {
    let tog_i = db[category].findIndex(cloth => (cloth.id === id));
    
    let tog_cloth = db[category][tog_i];
    tog_cloth.wished = !(tog_cloth.wished);
    /*
    let temp = [...db[category]];
    temp[tog_i] = {
        ...tog_cloth, wished: !(tog_cloth.wished)
    };
    db[category]=temp;*/
    callback();
}

//db.c1.push(item);
module.exports = {
    getAll,
    add,
    remove,
    toggle
  };