import express from 'express'
import { StudentControllers } from './student.controller'

const router=express.Router()

router.post('/create-student',StudentControllers.createStudent);
router.get('/:studentId',StudentControllers.getAllStudents)
router.get('/', StudentControllers.getSingleStudent);
export const StudentRoutes= router;