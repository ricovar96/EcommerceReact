import express from 'express'
const router= express.Router()
import { protect, admin } from '../middleWare/authMiddleWare.js'
import {
    authUser, 
    getUserProfile, 
    registerUser, 
    updatetUserProfile,
    getUsers,
    deleteUser,
    getUserById,
    updatetUser
    } from '../controllers/userController.js'

router.route('/').post(registerUser).get(protect, admin, getUsers)
router.post('/login', authUser)
router
    .route('/profile')
    .get(protect, getUserProfile)
    .put(protect, updatetUserProfile)
router
.route('/:id')
.delete(protect, admin, deleteUser)
.get(protect,admin, getUserById)
.put(protect, admin, updatetUser)

export default router