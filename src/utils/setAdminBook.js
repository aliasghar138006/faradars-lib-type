async function setAdminBook(book) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const urlencoded = new URLSearchParams();
  urlencoded.append("_id", book._id);
  urlencoded.append("title", book.title);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  const res = await fetch(
    "http://localhost:3000/users/set-books",
    requestOptions
  );

  const data = await res.json();
  return data;
}

export default setAdminBook;
