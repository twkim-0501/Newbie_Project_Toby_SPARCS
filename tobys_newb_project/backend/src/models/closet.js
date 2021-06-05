/*Closet API의 라우터와 요청을 처리하는 로직 */
const mongoose = require("mongoose");
const ClothSchema = new mongoose.Schema({
    text: String,
    wished: {
        type: Boolean,
        default: false
    },
    category: String
});

const ClothModel = mongoose.model("cloth", ClothSchema);
module.exports = ClothModel;