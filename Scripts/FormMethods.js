function clearForm(formId) {
  const form = document.getElementById(formId); 
  const inputs = form.getElementsByTagName('input');

  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    input.value = ''; 
  }
}
function openForm(FormName) {
  clearForm(FormName);
  document.getElementById(FormName).style.display = "block";
  document.querySelector(".main-container").style.webkitFilter = "blur(10px)";
}

function closeForm(FormName) {
  clearForm(FormName);
  document.getElementById(FormName).style.display = "none";
  document.querySelector(".main-container").style.webkitFilter = "blur(0px)";
}
