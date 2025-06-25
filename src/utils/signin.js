async function signin(userData) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("email", userData.email);
  urlencoded.append("password", userData.password);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  const data = await fetch("http://localhost:3000/auth/login", requestOptions);
  const res = await data.json();

  return res;
}

export default signin;
