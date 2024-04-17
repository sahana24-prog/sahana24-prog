const mongoose = require('mongoose');
const attendanceSchema = new mongoose.Schema({
    studentName: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    present: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Attendance', attendanceSchema);

