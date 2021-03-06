const express                           = require('express');
const passport                           = require('passport');
const router                            = express.Router();
const streetDefectController            = require('./street-defect.controller');

/**
 * @swagger
 * /api/street-defects:
 *   get:
 *     tags:
 *       - StreetDefects
 *     description: Returns a list of streetDefects
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of streetDefects
 *         schema:
 *           $ref: '#/definitions/GeneralResponse'
 *       default:
 *         description: Error
 *         schema:
 *           $ref: '#/definitions/ErrorResponse'
 */
// router.route('/').get(passport.authenticate('bearer', { session: false }), streetDefectController.getStreetDefects);
router.route('/').get(streetDefectController.getStreetDefects);

/**
 * @swagger
 * /api/street-defects:
 *   post:
 *     tags:
 *       - StreetDefects
 *     description: add a new street Defect
 *     parameters:
 *      - name: streetDefect
 *        description: Street Defect properties
 *        in: body
 *        required: true
 *        schema:
 *         $ref: '#/definitions/StreetDefect'
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *       - application/x-www-form-urlencoded
 *     responses:
 *       200:
 *         description: the new street defect created
 *         schema:
 *           $ref: '#/definitions/GeneralResponse'
 *       default:
 *         description: Error
 *         schema:
 *           $ref: '#/definitions/ErrorResponse'
 */
router.route('/').post( passport.authenticate('bearer', { session: false }), streetDefectController.addStreetDefect);

router.route('/:objectId').get(streetDefectController.getStreetDefect);
router.route('/:objectId').put(streetDefectController.updateStreetDefect);
/**
 * @swagger
 * /api/street-defects/{objectId}:
 *   delete:
 *     tags:
 *       - StreetDefects
 *     description: Deletes a specific street defect based on ObjectId
 *     produces: application/json
 *     parameters:
 *      - name: objectId
 *        description: The ObjectId of the street defect
 *        in: path
 *        type: string
 *        required: true
 *     responses:
 *       200:
 *         description: The street defect that was deleted
 *         schema:
 *           $ref: '#/definitions/GeneralResponse'
 *       default:
 *         description: Error
 *         schema:
 *           $ref: '#/definitions/ErrorResponse'
 */
router.route('/:objectId').delete(streetDefectController.deleteStreetDefect);

module.exports = router;
