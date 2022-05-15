const form = document.querySelector("form");

form.addEventListener("submit", onSubmitButton);

function onSubmitButton(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    return alert("Увага! Форма не заповнена!");
  }
  const object = { email: email.value, passwors: password.value };
  console.log(object);
  form.reset();
}
