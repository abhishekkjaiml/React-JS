import { createContext, useContext, useReducer } from "react";
import loginReducer from "../reducres/loginReducer";

const LoginContext = createContext();

const initialState = {
  email: "",
  password: "",
  token: "",
};

const LoginProvider = ({ children }) => {

    const [{email, password, token }, loginDispatch] = useReducer(loginReducer, initialState)

  return (
    <LoginContext.Provider  value={{email, password, token, loginDispatch}}>
        {children}
    </LoginContext.Provider>
  )
};

const useLogin = () => useContext(LoginContext);

export { LoginProvider, useLogin };
