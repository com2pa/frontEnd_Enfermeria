import {  createContext,  useState } from "react";
import { useContext } from "react";

export const AuthContext = createContext({});
export const AuthProvider = ({ Children })=>{
    const [auth ,setAuth] = useState({});
    return  <AuthContext.Provider value={{auth,setAuth}}>{Children}</AuthContext.Provider>    
};
const useAuth =()=>{
    return useContext(AuthContext);
}
export default useAuth;