const getUsers = async () => {
  const res = await fetch("http://localhost:3000/users/get-users");
  const data = await res.json();
  return data;
};

export default getUsers;
