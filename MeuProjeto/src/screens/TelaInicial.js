import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function TelaInicial({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Inicial</Text>
      <Button
        title="Preencher Formulário"
        onPress={() => navigation.navigate('Formulario')}
      />
      <Button
        title="Ver Resultados"
        onPress={() => navigation.navigate('Resultado')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
