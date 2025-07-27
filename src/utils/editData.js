const editData = async (personData) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("username", personData.username);
  urlencoded.append("fullName", personData.fullName);
  urlencoded.append("email", personData.email);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  const res = await fetch("http://localhost:3000/auth/edit", requestOptions);
  const data = await res.json();
  console.log(data);
  return data;
};

export default editData;
