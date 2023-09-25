import { pool } from "./database.js";
import "./dotenv.js";
import bossData from "../data/bosses.js";

const createBossesTable = async () => {
  const createTableQuery = `
      DROP TABLE IF EXISTS bosses;
      CREATE TABLE IF NOT EXISTS bosses (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          area VARCHAR(255) NOT NULL,
          health smallint NOT NULL,
          story TEXT NOT NULL,
          gif_url TEXT NOT NULL
      )
  `;

  try {
    const res = await pool.query(createTableQuery);
    console.log("🎉 bosses table created successfully");
  } catch (err) {
    console.error("⚠️ error creating bosses table", err);
  }
};

const seedBossesTable = async () => {
  await createBossesTable();

  bossData.forEach((boss) => {
    const insertQuery = {
      text: "INSERT INTO bosses (name, area, health, story, gif_url) VALUES ($1, $2, $3, $4, $5)",
    };

    const values = [
      boss.name,
      boss.area,
      boss.health,
      boss.story,
      boss.gif_url,
    ];

    pool.query(insertQuery, values, (err, res) => {
      if (err) {
        console.error("⚠️ error inserting boss", err);
        return;
      }

      console.log(`✅ ${boss.name} added successfully`);
    });
  });
};

seedBossesTable();
