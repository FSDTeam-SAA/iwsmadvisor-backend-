// src/entities/adminDashboard/adminDashboard.controller.js
import { generateResponse } from '../../lib/responseFormate.js';
import {
  createAdminAccountService,
  getContactMonthlyStatsService,
  getContactServiceStatsService,
} from './adminDashboard.service.js';

export const createAdminAccount = async (req, res, next) => {
  try {
    const { email, password, firstName, lastName } = req.body;

    const data = await createAdminAccountService({
      email,
      password,
      firstName,
      lastName,
    });

    return generateResponse(
      res,
      201,
      true,
      'Admin account created successfully',
      data
    );
  } catch (error) {
    if (error.message === 'Email and password are required') {
      return generateResponse(
        res,
        400,
        false,
        'Email and password are required',
        null
      );
    }

    if (error.message === 'User already registered.') {
      return generateResponse(
        res,
        400,
        false,
        'User already registered',
        null
      );
    }

    return next(error);
  }
};

// Admin: monthly contact counts for last 24 months
export const getContactMonthlyStats = async (req, res) => {
  try {
    const { year, from, to } = req.query;

    if (year !== undefined && Number.isNaN(Number(year))) {
      return res.status(400).json({ success: false, message: 'Invalid year parameter' });
    }
    if (year !== undefined && (from !== undefined || to !== undefined)) {
      return res.status(400).json({ success: false, message: 'Provide either year or from/to, not both' });
    }

    const payload = {
      year: year !== undefined ? Number(year) : undefined,
      from,
      to,
    };

    const stats = await getContactMonthlyStatsService(payload);
    return res.status(200).json({
      success: true,
      message: 'Contact monthly stats fetched successfully',
      data: stats.data,
    });
  } catch (error) {
    console.error('Get contact monthly stats error:', error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// Admin: per-service monthly counts/percentages for chosen range
export const getContactServiceStats = async (req, res) => {
  try {
    const { year, from, to } = req.query;

    if (year !== undefined && Number.isNaN(Number(year))) {
      return res.status(400).json({ success: false, message: 'Invalid year parameter' });
    }
    if (year !== undefined && (from !== undefined || to !== undefined)) {
      return res.status(400).json({ success: false, message: 'Provide either year or from/to, not both' });
    }

    const payload = {
      year: year !== undefined ? Number(year) : undefined,
      from,
      to,
    };

    const stats = await getContactServiceStatsService(payload);
    return res.status(200).json({
      success: true,
      message: 'Contact service stats fetched successfully',
      data: stats.data,
    });
  } catch (error) {
    console.error('Get contact service stats error:', error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
