import '../styles/style.css'
import '/node_modules/@fortawesome/fontawesome-free/css/all.css'
import { inputValidation, passwordConfirm, fetchData } from './validate'

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

inputValidation(document.querySelector("#firstName"), "name");
inputValidation(document.querySelector("#lastName"), "name");
inputValidation(document.querySelector("#email"), "email");
inputValidation(document.querySelector("#password"), "password");
passwordConfirm(document.querySelector("#password"),document.querySelector("#passwordRepeat"));
fetchData(document.querySelector("form"));