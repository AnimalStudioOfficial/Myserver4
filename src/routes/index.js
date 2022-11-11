const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
  return res.status(200).json({message:"YAY It WORKS!"})
});
router.get("/oof", (req, res) => {
  return res.status(200).json({message:"OK Oof"})
});

module.exports=router
