import express from 'express';
import twCtrl from '../controllers/twitter.controller'
const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
/** GET /api/users - Get list of users */
.get(twCtrl.getTweets);

export default router;