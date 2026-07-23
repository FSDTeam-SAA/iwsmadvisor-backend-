// src/entities/adminDashboard/adminDashboard.routes.js
import express from 'express';
import { verifyToken, adminMiddleware } from '../../core/middlewares/authMiddleware.js';
import {
  createAdminAccount,
  getContactMonthlyStats,
  getContactServiceStats,
} from './adminDashboard.controller.js';

const router = express.Router();

router.post('/create-admin', createAdminAccount);

// Admin dashboard: contact counts by month (last 24 months)
router.get('/contact-stats/monthly', verifyToken, adminMiddleware, getContactMonthlyStats);
// Admin dashboard: contact service distribution by month (counts & percentages)
router.get('/contact-stats/services', verifyToken, adminMiddleware, getContactServiceStats);

export default router;
