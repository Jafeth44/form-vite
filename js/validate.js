import Swal from "sweetalert2";

export function inputValidation(element, inputType) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[a-zA-Z]{2,16}$/;
    const passwordRegex = /(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[!@#$%&*?/.,])(?!.*[aeiouAEIOU])^.{8,}$/;
    let regexOnUse = "";

    if (inputType == "email") {
        regexOnUse = emailRegex;
    }
    if (inputType == "name") {
        regexOnUse = nameRegex;
    }
    if (inputType == "password") {
        regexOnUse = passwordRegex;
    }

    element.addEventListener("focusout", () => {
        if (element.value == "") {
            element.classList.remove("success");
            element.classList.remove("error");
        } 
        else if (!regexOnUse.test(element.value)) {
            element.classList.remove("success");
            element.classList.add("error");
        } 
        else {
            element.classList.remove("error");
            element.classList.add("success");
            return element.value;
        }
    });
}

export function passwordConfirm(pass1, pass2) {
    pass2.addEventListener("focusout", () => {
        if (pass2.value == "") {
            pass2.classList.remove("success");
            pass2.classList.remove("error");

        } 
        else if (pass1.value != pass2.value) {
            pass2.classList.remove("success");
            pass2.classList.add("error");
        } else {
            pass2.classList.remove("error");
            pass2.classList.add("success");
        }
    });
}

export function fetchData(form) {
    const userObj = (firstname, lastname, email, password) => {
        return {firstname, lastname, email, password};
    }
    form.addEventListener("submit", event => {
        event.preventDefault();
        if (form.firstName.classList.contains('success') &&
            form.lastName.classList.contains('success') &&
            form.email.classList.contains('success') &&
            form.password.classList.contains('success') &&
            form.passwordRepeat.classList.contains('success')
        ) {
            Swal.fire({
                icon: "success",
                title: "Registration complete!",
                timer: 2000
            })
            let newUser = userObj(
                form.firstName.value,
                form.lastName.value,
                form.email.value,
                form.password.value
                );
            const data = JSON.stringify(newUser);
            console.log(data);
            form.reset();
        } else {
            Swal.fire({
                icon: "error",
                title: "Please check the input values and retry.",
                confirmButtonText: "continue"
            })
        }
    })
}

