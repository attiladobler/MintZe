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

module.exports = { protect, verifySchuelerLogin };
  