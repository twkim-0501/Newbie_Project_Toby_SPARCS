const { removeAllListeners } = require("nodemon");

const CalModel = require("../src/models/calendar");

function getAll(callback) {
    let codyList = {
        "Sun":[], "Mon":[], "Tue":[], "Wed":[], "Thu":[], "Fri":[], "Sat":[]
    };
    CalModel.find({}, (err, res)=> {
        for(let i=0 ; i< res.length ; i++){
            if(res[i].day=="Sun"){
                codyList["Sun"].push(res[i]);
            }
            else if(res[i].day=="Mon"){
                codyList["Mon"].push(res[i]);
            }
            else if(res[i].day=="Tue"){
                codyList["Tue"].push(res[i]);
            }
            else if(res[i].day=="Wed"){
                codyList["Wed"].push(res[i]);
            }
            else if(res[i].day=="Thu"){
                codyList["Thu"].push(res[i]);
            }
            else if(res[i].day=="Fri"){
                codyList["Fri"].push(res[i]);
            }
            else if(res[i].day=="Sat"){
                codyList["Sat"].push(res[i]);
            }
        }
        callback(codyList);
    });

    //callback(codyDB);
}

function add(cody, callback) {
    const newCody = new CalModel({
        day: cody.day,
        top: cody.top, bottom: cody.bottom,
        shoes: cody.shoes, outer: cody.outer, accessory: cody.accessory
    });
    newCody.save((error,result) => {
        callback();
    });
}

function remove(body, callback) {
    CalModel.deleteOne({_id: body._id}, (error)=>{
        callback();
    });
    /*
    codyDB[body.day]=codyDB[body.day].filter(cody => (cody.id!== body.id));
    callback();*/
}
module.exports = {
    getAll,
    add,
    remove
  };