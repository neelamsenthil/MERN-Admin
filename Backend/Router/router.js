const express = require('express')
const studentModel = require('../Model/studentModel')
const teacherModel = require('../Model/teacherLoginModel')
const studentLoginModel = require('../Model/studentLoginModel')
const bcrypt = require('bcrypt')

const router = express.Router()



router.post('/student/login', async (req, res) => {
    try {
        const { email, password } = req.body
        const mail = await studentLoginModel.findOne({ email })
        if (mail) {
            return res.status(201).send("This email is already exit ")

        }
        const hashPassword = await bcrypt.hash(password, 10)
        const studentLogin = new studentLoginModel({  email: email, password: hashPassword })
        await studentLogin.save()
        res.status(201).json(studentLogin)
    } catch (error) {
        res.status(500).json({ message: error.message })

    }
})



router.post('/teacher/login', async (req, res) => {
    try {
        const { email, password } = req.body
        const mail = await teacherModel.findOne({ email })
        if (mail) {
            return res.status(201).json({ message: "This email is already exit "})

        }
        const hashPassword = await bcrypt.hash(password , 10)
        const teacherLogin = new teacherModel({ email: email, password: hashPassword })
        await teacherLogin.save()
        res.status(201).json({message:"Login Successfully" })


    } catch (error) {
        res.status(500).json({ message: error.message })

    }
})



// ************************************************************************** //


router.post('/create', async (req, res) => {
    try {
        const { name, course, age, year } = req.body
        const createDetail = new studentModel({ name, course, age,  year })
        await createDetail.save()
        res.status(201).json(createDetail)

    } catch (error) {
        res.status(500).json({ message: error.message })

    }
})


router.get('/' , async (req,res)=> {
    try {
        const getDetail = await studentModel.find()
        res.status(201).json(getDetail)
    } catch (error) {
        res.status(500).json({ message: error.message })        
    }
})


router.get('/:id' , async (req,res ) => {
    try {
        const getOne = await studentModel.findById(req.params.id)
        if (!getOne) {
            return res.status(404).send("Not found")
            
        }
        res.status(201).json(getOne)
    } catch (error) {
        res.status(500).json({ message: error.message })        

        
    }
})


router.put('/edit/:id', async (req, res) => {
    try {
        const { name, course, age,  year } = req.body
        const updateDetail = await studentModel.findByIdAndUpdate(
            req.params.id,

            {
                name: name,
                course: course,
                age: age,
                year: year
            },

            { new: true }
        )

        if (!updateDetail) {
            return res.status(404).send("Data not found")

        }

        res.status(201).json(updateDetail)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }


})


router.delete('/delete/:id' , async (req,res) => {
    try {
        await studentModel.findByIdAndDelete(req.params.id)
        res.status(200).send("Delete successfully..")
    } catch (error) {
        res.status(500).json({ message: error.message })

        
    }
})





module.exports = router

