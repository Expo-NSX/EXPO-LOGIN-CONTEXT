
import React, { createContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export const AuthContext = createContext({});

export default function AuthProvider({ children }){
    const navigation = useNavigation();

    const [data, setData]   = useState([]);

    function Logar(usuario, senha){
        if(usuario != '' && senha != ''){
            setData({usuario: usuario, senha: senha, token: 'JKASJDLKASJDLSA...'});
            navigation.navigate('Home');
        }
    }

    return(
        <AuthContext.Provider value={{ Logar, data }} >
            {children}
        </AuthContext.Provider>
    );
}