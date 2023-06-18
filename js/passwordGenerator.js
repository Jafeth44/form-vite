export function passwordGenerator() {
    const lowCaseCharacters = "bcdfghjklmnpqrstvwxyz";
    const upCaseCharacters = "BCDFGHJKLMNPQRSTVWXYZ";
    const symbolCharacters = "!@#$%&*?/.,";
    const numCharacters = "0123456789";
    let finalPassword = [];
    function rng(set) {
        return Math.floor(Math.random()*set.length);
    }
    for (let i = 0; i < 2; i++) {
        finalPassword.push(lowCaseCharacters[rng(lowCaseCharacters)]);
        finalPassword.push(upCaseCharacters[rng(upCaseCharacters)]);
        finalPassword.push(symbolCharacters[rng(symbolCharacters)]);
        finalPassword.push(numCharacters[rng(numCharacters)]);
    }
    return finalPassword.join('');
}
