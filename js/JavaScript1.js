
document.addEventListener("DOMContentLoaded", function () {

  const conBtn = document.getElementById("con");
  const emailField = document.querySelector('input[type="email"]');
  const passwordField = document.querySelector('input[type="password"]');

  const VALID_EMAIL = "test@test.test";
  const VALID_PASSWORD = "test";

  if (conBtn) {
    conBtn.addEventListener("click", function (ev) {
      
      if (ev && typeof ev.preventDefault === "function") ev.preventDefault();

      const email = (emailField && emailField.value || "").trim();
      const password = (passwordField && passwordField.value || "").trim();

      // če polja niso izpolnjena
      if (!email || !password) {
        Swal.fire({
          title: "Missing Information",
          text: "Please enter both email and password!",
          icon: "error",
          background: "#FFF",
          color: "#990A2C",
          confirmButtonColor: "#000",
          confirmButtonText: "OK",
          iconColor: "#990A2C",
          heightAuto: false
        });
        return;
      }

       if (email === VALID_EMAIL && password === VALID_PASSWORD) {
        Swal.fire({
          title: "Welcome!",
          text: "You are now signed in",
          icon: "success",
          background: "#FFF",
          color: "#000",
          confirmButtonColor: "#000",
          confirmButtonText: "Continue",
          iconColor: "rgb(47,181,72)",
          heightAuto: false
        }).then(() => {
          
          if (emailField) emailField.value = "";
          if (passwordField) passwordField.value = "";
          
        });
        return;
      }

       if (email === VALID_EMAIL && password !== VALID_PASSWORD) {
        Swal.fire({
          title: "Wrong password",
          text: "The password you entered is incorrect.",
          icon: "error",
          background: "#FFF",
          color: "#990A2C",
          confirmButtonColor: "#000",
          confirmButtonText: "Try again",
          iconColor: "#990A2C",
          heightAuto: false
        });
        return;
      }

      Swal.fire({
        title: "Invalid credentials",
        text: "Email or password is incorrect.",
        icon: "error",
        background: "#FFF",
        color: "#990A2C",
        confirmButtonColor: "#000",
        confirmButtonText: "Try again",
        iconColor: "#990A2C",
        heightAuto: false
      });

    });
  } else {
    console.warn("Gumb #con ni najden v DOM-u.");
  }

  
  const logo = document.getElementById("logo");
  if (logo) {
    logo.style.cursor = "pointer";
    logo.addEventListener("click", function (ev) {
      ev.stopPropagation();
      Swal.fire({
        title: "Credits",
        text: "Tadej Humar, 4.Ra",
        icon: "success",
        background: "#FFF",
        color: "#000",
        confirmButtonColor: "#000",
        confirmButtonText: "Continue",
        iconColor: "rgb(47,181,72)",
        heightAuto: false
      });
    });
  } else {
    console.warn("Element #logo ni najden v DOM-u. Preveri HTML (dodaj id='logo' divu).");
  }

});
