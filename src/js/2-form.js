const form = document.querySelector(".feedback-form");

const formData = {
    email: "",
    message: ""
}

form.addEventListener("input", () => {
    const dataForm = new FormData(form);
    const email = dataForm.get("email");
    const message = dataForm.get("message");
    
    formData.email = email;
    formData.message = message;
    saveToLocalStorage("feedback-form-state", formData)
})

function saveToLocalStorage(key, value) {
    const jsonData = JSON.stringify(value);
    localStorage.setItem(key, jsonData);
}

function getFromLocalStorage(key) {
    const json = localStorage.getItem(key);
    try {
        const data = JSON.parse(json);
        return data;
    }
        catch {
            return json;
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const data = getFromLocalStorage('feedback-form-state');

    form.elements.email.value = data?.email || "";
    form.elements.message.value = data?.message || "";
})

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (formData.email === "" || formData.message === "") {
    alert('Fill please all fields');
    return;
  }

  localStorage.removeItem("feedback-form-state"); 
  formData.email = '';
  formData.message = '';
  form.reset();
}); 