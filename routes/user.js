import {User} from '../models/user.js'
import express from 'express'
import { isAuthenticated } from '../middlewares/auth.js'
import { register ,login ,logout, getMyProfile } from '../controllers/user.js'
 


const router = express.Router()


router.get('/me' ,isAuthenticated, getMyProfile)



router.post('/new' ,  register)
router.post('/login' ,  login)
router.get('/logout' , logout)


export default router

