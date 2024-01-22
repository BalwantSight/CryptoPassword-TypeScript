function generatePassword(length: number): string {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
}

document.getElementById("generateBtn")?.addEventListener("click", () => {
  const passwordLength = 12;
  const newPassword = generatePassword(passwordLength);
  document.getElementById(
    "passwordDisplay"
  )!.innerText = `Contraseña Generada: ${newPassword}`;
});
