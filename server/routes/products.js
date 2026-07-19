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

router.put("/:id/edit", (req, res) => {
    try {
        const { id } = req.params;

        const result = productsService.updateProduct(id, req.body);

        if (result.changes === 0) {
            return res.status(404).json({
                error: "Producto no encontrado"
            });
        }

        res.json({
            success: true
        });

    }
    catch (err) {
        console.error(err);

        res.status(500).json({
            error: err.message
        });
    }
});

router.delete("/:id/delete", (req, res) => {
    try {
        const { id } = req.params;

        const result = productsService.deleteProduct(id);

        if (result.changes === 0) {
            return res.status(404).json({
                error: "Producto no encontrado"
            });
        }

        res.status(200).json({
            message: "Producto eliminado correctamente"
        });
    }
    catch (err) {
        console.error(err);

        res.status(500).json({
            error: err.message
        });
    }
});

module.exports = router;