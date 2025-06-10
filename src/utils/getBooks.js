async function getBooks() {
  const myHeaders = new Headers();
  // myHeaders.append(
  //   "Authorization",
  //   "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY4MTQyOWEyNWUyNDE2ZGRjMjVjNDlhZCIsInVzZXJuYW1lIjoiYWxpIiwiZW1haWwiOiJhbGlhc2doYXJzaGFobmVoMjBAZ21haWwuY29tIiwiZnVsbE5hbWUiOiJhbGkgc2hhaG5laCIsImlzQWRtaW4iOnRydWUsInBhc3N3b3JkIjoiJDJiJDEyJHB4UGdIbjg2cnpNNWtGUGdzbG8yeHVZVkRaZ2U1azBveXhGN3Q4TG1DR1ZTMlByQkNENWVXIiwiY3JlYXRlZEF0IjoiMjAyNS0wNS0wMlQwMjoxMDo0Mi45NTVaIiwidXBkYXRlZEF0IjoiMjAyNS0wNS0wMlQwMjoxMDo0Mi45NTVaIiwiX192IjowfSwiaWF0IjoxNzQ2MTYyOTQ1LCJleHAiOjM2MzgzMjI5NDV9.Ysq1KOrBgmMMIsmCwcahl9mlYv0K-dcI-CbYDEBmWMY6keNh1hN36MV-J0-0_c_Gg5d8OZpE5oIyBbRVRJy_kA"
  // );

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
