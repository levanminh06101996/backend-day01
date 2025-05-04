const fs = require("fs").promises;
const DB_FILE = "./db.json";
async function readDB(resource, defaultValue = []) {
  try {
    const jsonDb = await fs.readFile(DB_FILE, "utf-8");
    return JSON.parse(jsonDb)[resource] ?? defaultValue;
  } catch (error) {
    return {};
  }
}
async function writeFile(resource, data) {
  let db = {};
  try {
    const jsonDb = await fs.readFile(DB_FILE, "utf-8");
    db = JSON.parse(jsonDb);
  } catch (error) {}
  db[resource] = data;

  await fs.writeFile(DB_FILE, JSON.stringify(db, null, 2));
}
writeFile("post", [{ id: 1, name: "tieu de blog" }]);

module.exports = {
  readDB,
  writeFile,
};
