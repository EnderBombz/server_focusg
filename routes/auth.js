const express = require('express');
const authController = require('../controllers/auth');
const router = express.Router();

router.get("/", (req, res) => {
    res.send("hellou")
})

router.post("/registro", authController.register)
router.post("/login", authController.login)
router.post("/token", authController.token)
router.post("/forgotPass", authController.forgot)
router.post("/validateCode", authController.code)
router.put("/resetPass", authController.reset)
router.put("/setFirst", authController.first)
router.post("/confirmEmail", authController.confirmEmail)

module.exports = router;