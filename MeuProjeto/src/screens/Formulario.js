import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import FormComponent from '../../src/components/FormComponent';


const fields = [
  ['text', 'Nome Completo'],
  ['text', 'Endereço'],
  ['date', 'Data de Nascimento'],
  ['radio', 'Gênero', ['Masculino', 'Feminino', 'Outro']],
  ['picker', 'Estado', ['SP', 'MG', 'RJ', 'RS']],
  ['checkbox', 'Preferências', ['E-mail', 'SMS', 'Telefone']],
  ['textarea', 'Comentários'],
  ['upload', 'Anexar Imagem'],
  ['collapse', 'Detalhes Adicionais', [
    ['text', 'Informações Adicionais'],
    ['date', 'Data Extra']
  ]],
  ['inline', 'Contatos', [
    ['text', 'Nome'],
    ['text', 'Telefone'],
    ['text', 'E-mail']
  ]]
];

export default function Formulario({ navigation }) {
  const handleSubmit = (data) => {
    // Aqui você pode salvar no AsyncStorage e redirecionar para a tela de resultado
    navigation.navigate('Resultado', { formData: data });
  };

  return (
    <View style={styles.container}>
      <FormComponent fields={fields} onSubmit={handleSubmit} />
      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
