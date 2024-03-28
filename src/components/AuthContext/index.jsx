import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { authService } from "../../services/auth.service";
import { message } from "antd";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user"));
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const login = async (data) => {
    try {
      const res = await authService.login(data);
    } catch (err) {
      if (err?.response?.data?.message) {
        message.error(err.response.data.message);
      }
      console.log("err", err);
    }
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
