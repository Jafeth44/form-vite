export function passwordGenerator(element, input) {
    const lowCaseCharacters = "bcdfghjklmnpqrstvwxyz";
    const upCaseCharacters = "BCDFGHJKLMNPQRSTVWXYZ";
    const symbolCharacters = "!@#$%&*?/.,";
    const numCharacters = "0123456789";

    function rng(set) {
        return Math.floor(Math.random()*set.length);
    }
    
    element.addEventListener('click', () => {
        let finalPassword = [];
        for (let i = 0; i < 2; i++) {
            finalPassword.push(lowCaseCharacters[rng(lowCaseCharacters)]);
            finalPassword.push(upCaseCharacters[rng(upCaseCharacters)]);
            finalPassword.push(symbolCharacters[rng(symbolCharacters)]);
            finalPassword.push(numCharacters[rng(numCharacters)]);
        }
        input.value = finalPassword.join('');
    });
}
