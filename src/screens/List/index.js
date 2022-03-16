import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { AuthContext } from '../../contexts/auth';

import { styles } from './style';

export default function List(){
    const { data } = useContext(AuthContext);

    return(
        <View style={styles.container}>
            <Text>Usuario: {data.usuario}</Text>
            <Text>Senha:   {data.senha}</Text>
            <Text>Token:   {data.token}</Text>
        </View>
    );
}