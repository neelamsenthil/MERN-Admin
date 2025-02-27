const mongoose = require('mongoose')

const teacherSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }

})

module.exports = mongoose.model('Teacher-Login' , teacherSchema)