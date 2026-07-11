const express = require("express");
const router = express.Router();

const productsService = require("../services/productsService");

router.get("/", (req, res) => {
    try {
        const products = productsService.getAllProducts();
        res.json(products);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            error: err.message
        });
    }
});

module.exports = router;