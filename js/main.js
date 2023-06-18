import '../styles/style.css'
import '/node_modules/@fortawesome/fontawesome-free/css/all.css'
import { inputValidation, passwordConfirm, fetchData } from './validate'
import { passwordGenerator } from './passwordGenerator';

document.querySelector('#app').innerHTML = /*html*/`
  <form id="form">
    <label for="firstName">First name: 
      <input type="text" id="firstName">
    </label>
    <label for="lastName">Last name: 
      <input type="text" id="lastName">
    </label>
    <label for="email">Email: 
      <input type="text" id="email">
    </label>
    <label for="password">Password: 
      <input type="password" id="password">
    </label>
    <label for="passwordRepeat">Confirm Password: 
      <input type="password" id="passwordRepeat">
    </label>
    <input type="submit" value="Register">
  </form>
`
document.querySelector('#password-box').innerHTML = /*html*/`
  <h2>New!</h2>
  <p>Try our brand new password generator, it's free!</p>
  <input type="password" id="generated-password" readonly>
  <button id="btn-show">show / hide</button>
  <button id="btn-generator">NEW PASSWORD</button>
`

inputValidation(document.querySelector("#firstName"), "name");
inputValidation(document.querySelector("#lastName"), "name");
inputValidation(document.querySelector("#email"), "email");
inputValidation(document.querySelector("#password"), "password");
passwordConfirm(document.querySelector("#password"),document.querySelector("#passwordRepeat"));
fetchData(document.querySelector("form"));
passwordGenerator(document.querySelector('#btn-generator'),document.querySelector('#generated-password'));

document.querySelector("#btn-show").addEventListener('click', () => {
  if (document.querySelector("#generated-password").type == 'password') {
    document.querySelector("#generated-password").type = 'text';
  } else {
    document.querySelector("#generated-password").type = 'password';
  }
})