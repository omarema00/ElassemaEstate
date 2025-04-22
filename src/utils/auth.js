export const login = async (email, password) => {
  try {
    const res = await fetch("http://localhost:5000/users");
    const users = await res.json();

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      return true;
    }

    return false;
  } catch (err) {
    console.error("Login error", err);
    return false;
  }
};


export const logout = () => localStorage.removeItem("currentUser");

export const getCurrentUser = () => JSON.parse(localStorage.getItem("currentUser"));

export const isAdmin = () => {
  const user = getCurrentUser();
  return user?.role === "admin";
};