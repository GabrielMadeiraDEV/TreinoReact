import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bem-vindo à Tela Inicial!</Text>
      <Button title="Ir para Perfil" onPress={() => navigation.navigate('Profile')} />
      <Button title="Abrir Formulário" onPress={() => navigation.navigate('Form')} />
    </View>
  );
};

export default HomeScreen;
