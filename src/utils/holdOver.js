async function holdOver(id, isExist) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("id", id);
  urlencoded.append("isExist", isExist);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  const res = await fetch(
    "http://localhost:3000/book/hold-over-book",
    requestOptions
  );

  const data = await res.json();
  return data;
}

export default holdOver;
