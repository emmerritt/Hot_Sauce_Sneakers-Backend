import express from 'express';
const adminRouter = express.Router();
import { 
    getAllUsers,
    getUserById,
    upgradeUserToAdmin,
    deactivateUser
} from '../db/index.js'

// Get list of all users
adminRouter.get('/users', async (req, res, next) => {
    const user = req.user;
    
    if (!user || !user.isAdmin) {
        next({
            error: 'Admin Permissions Required',
            message: `You must be logged in as an admin user to perform this action.`
        });
    }

    try {
        const allUsers = await getAllUsers();

        res.send(allUsers);
    } catch ({error, message}) {
        next ({error, message});
    }
})

// Get details of specific user
adminRouter.get('/users/:userId', async (req, res, next) => {
    const { userId } = req.params;
    const user = req.user;
    
    if (!user || !user.isAdmin) {
        next({
            error: 'Admin Permissions Required',
            message: `You must be logged in as an admin user to perform this action.`
        });
    }

    try {
        const userDetails = await getUserById({id: userId});

        res.send(userDetails);
    } catch ({error, message}) {
        next ({error, message});
    }
})

// Upgrade user to Admin
adminRouter.patch('/users/upgrade/:userId', async (req, res, next) => {
    const { userId } = req.params;
    const user = req.user;
    
    if (!user || !user.isAdmin) {
        next({
            error: 'Admin Permissions Required',
            message: `You must be logged in as an admin user to perform this action.`
        });
    }

    try {
        const userDetails = await getUserById({id: userId});
        const upgradedUser = await upgradeUserToAdmin(userDetails);

        res.send(upgradedUser);
    } catch ({error, message}) {
        next ({error, message});
    }
})

// Deactivate user
adminRouter.patch('/users/deactivate/:userId', async (req, res, next) => {
    const { userId } = req.params;
    const user = req.user;
    
    if (!user || !user.isAdmin) {
        next({
            error: 'Admin Permissions Required',
            message: `You must be logged in as an admin user to perform this action.`
        });
    }

    try {
        const userDetails = await getUserById({id: userId});
        const deactivatedUser = await deactivateUser(userDetails);

        res.send(deactivatedUser);
    } catch ({error, message}) {
        next ({error, message});
    }
})

export { adminRouter };