async function getBooks() {
  const myHeaders = new Headers();

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const res = await fetch(
    "http://localhost:3000/book/get-books",
    requestOptions
  );
  console.log(res);
  const data = await res.json();
  return data;
}

export default getBooks;
