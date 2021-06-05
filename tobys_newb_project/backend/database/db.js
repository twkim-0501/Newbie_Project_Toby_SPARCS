/*카테고리 별 옷 목록을 저장하는 역할*/

const ClothModel = require("../src/models/closet");

function getAll(callback) {
    let closet = {top:[], 
        bottom:[], 
        shoes: [], 
        outer: [], 
        accessory: []
    };
    ClothModel.find({}, (error,result) => {
        for(let i=0 ; i< result.length ; i++){
            if(result[i].category=="top"){
                closet["top"].push(result[i]);
            }
            else if(result[i].category=="bottom"){
                closet["bottom"].push(result[i]);
            }
            else if(result[i].category=="shoes"){
                closet["shoes"].push(result[i]);
            }
            else if(result[i].category=="outer"){
                closet["outer"].push(result[i]);
            }
            else if(result[i].category=="accessory"){
                closet["accessory"].push(result[i]);
            }
        }
        callback(closet);
        
    });
    

    /*----DB흉내
    callback(db);
    */
}
function getCategory(category, callback) {
    ClothModel.find({category: category}, (error,result) => {
        //console.log(result);
        callback(result);
    })

    //callback(db[category]);
}

function add(category, body, callback) {

    const newCloth = new ClothModel({
        text: body.text,
        wished: body.wished,
        category: category
    });
    newCloth.save((error, result) => {
        callback(result);
    });

    /*----DB 흉내
    let newid=Math.random().toString(36).substr(2,11);
    db[category].push({id: newid, text: body.text, wished: body.wished});
    callback();
    */
}
function remove(category, id, callback) {
    ClothModel.deleteOne({_id: id}, (error)=> {
        callback();
    });
    /*
    db[category]= db[category].filter(cloth => (cloth.id!==id));
    callback();*/
}
function toggle(category, id, callback) {
    ClothModel.findOne({_id:id}, (err, item) => {
        if(!item.wished){
            ClothModel.updateOne({_id:id}, {wished: true}, () => {
                callback();
            });
        }
        else{
            ClothModel.updateOne({_id:id}, {wished: false}, () => {
                callback();
            });
        }
    });
   
    /*
    let tog_i = db[category].findIndex(cloth => (cloth.id === id));
    let tog_cloth = db[category][tog_i];
    tog_cloth.wished = !(tog_cloth.wished);
    callback();*/
}

module.exports = {
    getAll,
    getCategory,
    add,
    remove,
    toggle
  };