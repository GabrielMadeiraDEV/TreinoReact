import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getFormData } from '../../src/components/ASComponent';  // Ajuste o caminho conforme necessário

export default function Resultado({ route }) {
  const { formData } = route.params || {}; // Recebe os dados do formulário ou define como objeto vazio
  const [savedData, setSavedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFormData();  // Busca os dados salvos no AsyncStorage
      setSavedData(data);  // Atualiza o estado com os dados obtidos
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dados do Formulário</Text>
      {/* Renderiza os dados recebidos da navegação */}
      {Object.keys(formData).length > 0 ? (
        Object.keys(formData).map((key, index) => (
          <Text key={index} style={styles.text}>
            {key}: {formData[key]}
          </Text>
        ))
      ) : (
        <Text style={styles.text}>Nenhum dado enviado do formulário.</Text>
      )}

      <Text style={styles.title}>Dados Salvos no AsyncStorage</Text>
      {/* Renderiza os dados salvos no AsyncStorage */}
      {savedData.length > 0 ? (
        savedData.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            {Object.keys(item).map((key) => (
              <Text key={key} style={styles.text}>
                {key}: {item[key]}
              </Text>
            ))}
          </View>
        ))
      ) : (
        <Text style={styles.text}>Nenhum dado encontrado no AsyncStorage.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    marginVertical: 5,
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
    paddingBottom: 5,
  },
});
