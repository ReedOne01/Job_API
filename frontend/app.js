const loginBtn = document.getElementById("login_button");
const email = document.getElementById("login_email");
const password = document.getElementById("login_password");

loginBtn?.addEventListener("click", async () => {
  const payload = {
    email: email.value,
    password: password.value,
  };

  const response = await fetch("http://localhost:8000/api/auth/login", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  // if (!response.ok) return alert("incorrect data");

  const data = await response.json();
  console.log(data);
  // localStorage.setItem("token", JSON.stringify(data.token));
  // alert(data.message);
  // window.location.href = "/zzz.html";
});
// console.log(payload);
