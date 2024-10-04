import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FormScreen = () => {
  const [name, setName] = useState('');

  const saveData = async () => {
    try {
      await AsyncStorage.setItem('userName', name);
      alert('Nome salvo com sucesso!');
    } catch (error) {
      console.log('Erro ao salvar nome:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Formulário de Cadastro</Text>
      <TextInput
        placeholder="Digite seu nome"
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, borderColor: '#000', width: 200, marginBottom: 20, padding: 10 }}
      />
      <Button title="Salvar Nome" onPress={saveData} />
    </View>
  );
};

export default FormScreen;
