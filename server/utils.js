function protect(string) {
    const notAllowed = ['"', '<', '>', "'", '\\'];
    let protectedString = string;
  
    notAllowed.forEach(char => {
      protectedString = protectedString.split(char).join('');
    });
  
    return protectedString;
}

module.exports = { protect };
  