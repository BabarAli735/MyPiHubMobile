import React, { useMemo, useState } from "react";

export const AuthContext = React.createContext(null);

function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [authUser, setAuthUser] = useState({});
  const [role, setRole] = useState("");

  const value = useMemo(
    () => ({ authUser, setAuthUser, isAuth, setIsAuth, role, setRole }),
    [authUser, setAuthUser, isAuth, setIsAuth, role]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export default AuthProvider;
