document.addEventListener("DOMContentLoaded", () => {
  // No mostramos la contraseña al cargar la página
  const passwordDisplay = document.getElementById("passwordDisplay");
  if (passwordDisplay) {
    passwordDisplay.style.display = "none";
  }
});

function generatePassword(length: number): string {
  if (length <= 0) {
    throw new Error(
      "La longitud de la contraseña debe ser un número positivo."
    );
  }

  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
}

function savePassword(password: string): void {
  // Guardar la contraseña en localStorage
  localStorage.setItem("savedPassword", password);
}

function showModal(): void {
  const modal = document.getElementById("myModal");
  const closeModalBtn = document.getElementById("closeModal");

  if (modal) {
    modal.style.display = "block";

    // Cerrar modal al hacer clic en la "X"
    closeModalBtn?.addEventListener("click", () => {
      modal.style.display = "none";
    });

    // Cerrar modal al hacer clic fuera de él
    window.onclick = (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  }
}

document.getElementById("generateBtn")?.addEventListener("click", () => {
  const passwordLength = 12;
  const newPassword = generatePassword(passwordLength);
  const passwordDisplay = document.getElementById("passwordDisplay");

  if (passwordDisplay) {
    passwordDisplay.style.display = "block";
    passwordDisplay.innerText = `Contraseña Generada: ${newPassword}`;
  }
});

document.getElementById("saveBtn")?.addEventListener("click", () => {
  const displayedPassword =
    document.getElementById("passwordDisplay")!.innerText;
  if (displayedPassword.startsWith("Contraseña Generada:")) {
    const passwordToSave = displayedPassword.replace(
      "Contraseña Generada: ",
      ""
    );
    savePassword(passwordToSave);
    showModal(); // Mostrar el modal al guardar la contraseña
  } else {
    alert("No hay una contraseña generada para guardar.");
  }
});
