
const bcrypt = require('bcrypt')


function protect(string) {
    const notAllowed = ['"', '<', '>', "'", '\\'];
    let protectedString = string;
  
    notAllowed.forEach(char => {
      protectedString = protectedString.split(char).join('');
    });
  
    return protectedString;
}

function verifySchuelerLogin(id, key, db) {
  db.query("SELECT * FROM Schueler WHERE SchuelerID = ? AND AuthKey = ?", [id, key], (err, results) => {
    if(err) {
      return false;
    } else if(results.length() > 0) {
      return true;
    } else {
      return false;
    }
  });
}

async function passwordHash(password) {
  try {
    const saltRounds = 5;
    const salt = await bcrypt.genSalt(saltRounds);

    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (error) {
    console.error('Fehler beim Hashen des Passworts:', error);
    throw error;
  }
}

module.exports = { protect, verifySchuelerLogin, passwordHash };
  