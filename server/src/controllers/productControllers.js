import pool from "../config/databaseConfig.js";

export const getAllProducts = async (req, res) => {
    try {
        /* Logica */
        const query = `
            SELECT
                p.id,
                p.title, 
                p.price,
                p.description,
                uf.url
            FROM
                products p 
            INNER JOIN 
                url_files uf ON p.id = uf.product_id 
        `;

        const response = await pool.query(query);

        const result = response.rows;

        res.status(200).json({
            succes: true,
            message: 'getting all products...',
            products: result
        });
    } catch(err) {
        console.error(err);
        res.status(500);
    }
}

export const getCartProducts = async (req, res) => {
    try {
        const { cartItems } = req.body; // Lista de IDs de productos

        if (!cartItems || cartItems.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No items in the cart",
                products: [],
            });
        }

        // Crear un array de placeholders para los IDs
        const placeholders = cartItems.map((_, index) => `$${index + 1}`).join(", ");

        const query = `
            SELECT
                p.id,
                p.title, 
                p.price,
                p.description,
                uf.url
            FROM
                products p
            INNER JOIN 
                url_files uf ON p.id = uf.product_id
            WHERE 
                p.id IN (${placeholders})
        `;

        // Ejecutar la consulta con los valores de cartItems como parámetros
        const response = await pool.query(query, cartItems);

        const result = response.rows;

        res.status(200).json({
            success: true,
            message: "Getting all products...",
            products: result,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Error getting products",
        });
    }
};
