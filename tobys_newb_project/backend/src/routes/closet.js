/*Closet API의 라우터와 요청을 처리하는 로직 */
const mongoose = require("mongoose");
const schema = new mongoose.Schema({
    done: {
        wished: Boolean,
        default: false
    },
    name: String
}, {timestamps: true});

const ClosetModel = mongoose.model("cloth",schema);
module.exports = ClosetModel;