import { createContext, useContext, ReactNode, useState } from "react";

interface IUser{
    biography: string;
    nik: string;
    jobPosition: string;
    company: string;
    division: string;
    location: string;
}
type authContextType = {
    user: boolean;
    checkEdit: () => void;
    logout: () => void;
    isEdit:boolean;
    setDataCustomer: (data: IUser) => void;
    dataCustomer:IUser
};

// const authContextDefaultValues: authContextType = {
//     user: false,
//     isEdit:false,
//     checkEdit: () => {},
//     logout: () => {},
//     setDataUser: (data: IUser) => void
// };

// const AuthContext = createContext<authContextType|undefined>(undefined);
const AuthContext = createContext<authContextType | undefined>(undefined);

export const useAuth = (): authContextType => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useMyContext must be used within a MyContextProvider');
    }
    return context;
  };
// export function useAuth() {
//     return useContext(AuthContext);
// }

type Props = {
    children: ReactNode;
};



export function AuthProvider({ children }: Props) {
    const [user, setUser] = useState<boolean>(false);
    const [isEdit,setIsEdit]=useState<boolean>(false)
    const [dataCustomer,setDataCustomer]=useState<IUser>({
        biography: '',
        nik: '',
        jobPosition: '',
        company: '',
        division: '',
        location: '',
    })
    const checkEdit = () => {
        setUser(true);
        setIsEdit(!isEdit)
    };

    const logout = () => {
        setUser(false);
    };

    const value = {
        user,
        checkEdit,
        logout,
        isEdit,
        setDataCustomer,
        dataCustomer
    };

    return (
        <>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </>
    );
}
