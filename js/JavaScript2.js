// Ob kliku na element z ID "con" zažene funkcijo
  document.addEventListener("DOMContentLoaded", function() {
  const signUpBtn = document.getElementById("con");
	
  signUpBtn.addEventListener("click", function () {
    // Izbere polje za email, geslo,ime...
    const nameInput = document.querySelector('input[placeholder="First name *"]');
    const surnameInput = document.querySelector('input[placeholder="Last name *"]');
    const emailInput = document.querySelector('input[placeholder="Email address *"]');
    const passwordInput = document.querySelector('input[placeholder="Password *"]');
    const confirmPasswordInput = document.querySelector('input[placeholder="Confirm Password *"]');
   // Prebere vrednosti in odstrani presledke
    const name = nameInput.value.trim();
    const surname = surnameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();
   
	//da so vsi enake barve,naredis samo enkrat
    const alertOptions = (title, text, icon) => ({
      title: title,
      text: text,
      icon: icon,
      background: "#FFF",       // belo ozadje
      color:"#990A2C",            // rdeč napis
      confirmButtonColor: "#000",  // črn gumb
      confirmButtonText: "OK",
      iconColor: "#990A2C",        // rdeča ikona
	  heightAuto: false
    });
	//če manka katero se pokaze popup
    if (!name || !surname||!email.includes("@") || !email.includes(".")||!password || !confirmPassword||password !== confirmPassword) {
      Swal.fire(alertOptions("Missing Name or Surname", "Please enter both your first name and surname!", "error"));
      return;
    }
/*	
	if (!name || !surname) {
      Swal.fire(alertOptions("Missing Name or Surname", "Please enter both your first name and surname!", "error"));
      return;
    }
	// Če email ni veljaven, pokaže opozorilo
    if (!email.includes("@") || !email.includes(".")) {
      Swal.fire(alertOptions("Invalid Email", "Please enter a valid email address!", "warning"));
      return;
    }
	//če gesli mankata
    if (!password || !confirmPassword) {
      Swal.fire(alertOptions("Missing Password", "Please fill both password fields!", "error"));
      return;
    }
	//če gesli nista enaki
    if (password !== confirmPassword) {
      Swal.fire(alertOptions("Passwords Do Not Match", "Please make sure both passwords are identical!", "error"));
      return;
    }
	*/
	 // Če je vse v redu, izpiše prijavo in počisti polja
    Swal.fire({
      title: "Success!",
      text: "Your account has been created!",
      icon: "success",
      background: "#FFF",
      color: "#000",
      confirmButtonColor: "#000",
      confirmButtonText: "Continue",
      iconColor: "rgb(47,181,72)",
	  heightAuto: false
    }).then(() => {
      // počisti polja
      nameInput.value = "";
      surnameInput.value = "";
      emailInput.value = "";
      passwordInput.value = "";
      confirmPasswordInput.value = "";
      document.getElementById("country").selectedIndex = 0;
      document.getElementById("gender").selectedIndex = 0;

      const newsletterCheckbox = document.querySelector('.Sign-up .kvadrat');
      if (newsletterCheckbox) newsletterCheckbox.checked = false;
	   //poslje na index.html po uspešni prijavi
	   window.location.href = "index.html";
    });
  });
});
//deluje na classu "date"
const dateInput = document.getElementById('date');
//danasni dan
const today = new Date();
//leto-18 let
const yyyy = today.getFullYear() - 18; // subtract 18 years

let mm = today.getMonth() + 1;
let dd = today.getDate();

if (mm < 10) mm = '0' + mm;
if (dd < 10) dd = '0' + dd;

// Maximum datum = danes - 18 let
const maxDate = `${yyyy}-${mm}-${dd}`;

// Minimum datum = Januar 1, 1910
const minDate = '1920-01-01';
//max in min input
dateInput.max = maxDate;
dateInput.min = minDate;