const pool = require('../config/db');
const produto = () => {
    getAll: async () => {
        const res = await pool.query('SELECT * FROM PRODUTOS');
        return res.rows
    }
}

module.exports = produto;