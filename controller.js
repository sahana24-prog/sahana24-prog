const Attendance = require('../models/Attendance');
exports.getAllAttendance = async (req, res) => {
    try {
        const attendance = await Attendance.find();
        res.json(attendance);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createAttendance = async (req, res) => {
    const attendance = new Attendance(req.body);
    try {
        const newAttendance = await attendance.save();
        res.status(201).json(newAttendance);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateAttendance = async (req, res) => {
    try {
        const updatedAttendance = await Attendance.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedAttendance);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteAttendance = async (req, res) => {
    try {
        await Attendance.findByIdAndDelete(req.params.id);
        res.json({ message: 'Attendance deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
