function Valudator(e) {
  e.preventDefault();
  let fname = document.getElementById("fristName").value;
  let lname = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;
  let inputs_div = document.querySelectorAll(".form-input");

  inputs_div.forEach((input) => {
    input.classList.remove("is-error");
  });

  console.log({
    fname,
    lname,
    email,
    pass,
  });

  if (fname == "" && lname == "" && email == "" && pass == "") {
    inputs_div.forEach((input) => {
      input.classList.add("is-error");
    });
    return false;
  }

  if (fname.length < 3) {
    inputs_div[0].classList.add("is-error");
  }
  if (lname.length < 3) {
    inputs_div[1].classList.add("is-error");
  }
  if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    inputs_div[2].classList.add("is-error");
  }
  if (pass.length < 8) {
    inputs_div[3].classList.add("is-error");
  }
  return true;
}
