/*canlendar API의 라우터와 요청을 처리하는 로직 */
const mongoose = require("mongoose");
const CalSchema = new mongoose.Schema({
    day: String,
    top: String,
    bottom: String,
    shoes: String,
    outer: String,
    accessory: String
});

const CalModel = mongoose.model("calendar", CalSchema);
module.exports = CalModel;