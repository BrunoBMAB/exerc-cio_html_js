document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault();
  const fieldA = parseFloat(document.getElementById("fieldA").value);
  const fieldB = parseFloat(document.getElementById("fieldB").value);
  const message = document.getElementById("message");
  if (fieldB > fieldA) {
    message.innerHTML = "Formulário válido!";
    message.style.color = "green";
  } else {
    message.innerHTML = "Formulário inválido.";
    message.style.color = "red";
  }
});
