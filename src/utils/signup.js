async function signup(userData) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("username", userData.userName);
  urlencoded.append("email", userData.email);
  urlencoded.append("password", userData.password);
  urlencoded.append("confirmPassword", userData.confirmPassword);
  urlencoded.append("fullName", userData.fullName);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  const data = await fetch("http://localhost:3000/auth/signup", requestOptions);
  const res = await data.json();
  return res;
}

export default signup;
