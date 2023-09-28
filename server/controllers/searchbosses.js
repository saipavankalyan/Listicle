import { pool } from "../config/database.js";

const searchBosses = async (req, res) => {
  if (!req.body || !req.body.searchQuery) {
    res.status(400).json({ error: "No search query provided" });
    return;
  }

  const { searchQuery } = req.body;
  console.log(searchQuery);
  try {
    const { rows } = await pool.query(
      "SELECT * FROM bosses WHERE LOWER(name) LIKE $1",
      [`%${searchQuery.toLowerCase()}%`]
    );
    console.log(rows);
    res.status(200).json(rows);
  } catch (error) {
    console.error(error);
    res.status(409).json({ error: error.message });
  }
};

export default {
  searchBosses,
};
