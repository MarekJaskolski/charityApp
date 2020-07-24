export default {
  login: (data) => {
    const { username, password } = data;
    return new Promise((resolve, reject) => {
      if (username === "marekjaskolski46@gmail.com" && password === "qwerty") {
        resolve({
          username,
          password,
          name: "Jan",
          surname: "Kowalski",
        });
      } else {
        reject("Hasło lub login są nieprawidłowe!");
      }
    });
  },
};
