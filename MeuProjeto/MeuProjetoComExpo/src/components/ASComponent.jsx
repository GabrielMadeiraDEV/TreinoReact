import AsyncStorage from '@react-native-async-storage/async-storage';

const FORM_DATA_KEY = 'formData';

export const saveFormData = async (data) => {
  try {
    const existingData = await AsyncStorage.getItem(FORM_DATA_KEY);
    const parsedData = existingData ? JSON.parse(existingData) : [];
    // Adicionar data e hora atuais ao novo dado
    const currentDateTime = new Date();
    const datahora = currentDateTime.toISOString(); // ou qualquer outro formato de data/hora que preferir

    // Adicionar o novo dado junto com a data e hora
    const updatedData = [...parsedData, { ...newData, datahora }];
    await AsyncStorage.setItem(FORM_DATA_KEY, JSON.stringify(updatedData));
  } catch (error) {
    console.error('Erro ao salvar os dados:', error);
  }
};

export const getFormData = async () => {
  try {
    const storedData = await AsyncStorage.getItem(FORM_DATA_KEY);

    if (storedData) {
      const parsedData = JSON.parse(storedData);
      // Verifique se parsedData é um array, caso contrário, transforme-o em um array
      return Array.isArray(parsedData) ? parsedData : [parsedData];

    } else {
      console.log("Nenhum dado foi encontrado no AsyncStorage.");
      return null;
    }

  } catch (error) {
    console.error('Erro ao obter dados:', error);
    return null; // Ou lance um erro, dependendo da sua estratégia de tratamento
  }
};

export const updateFormData = async (data) => {
  try {
    const existingData = await getFormData();
    const updatedData = { ...existingData, ...data }; // Mescla os dados existentes com os novos
    await AsyncStorage.setItem(FORM_DATA_KEY, JSON.stringify(updatedData));
    console.log('Dados atualizados com sucesso!');
  } catch (error) {
    console.error('Erro ao atualizar dados:', error);
    // Tratamento de erro (opcional)
  }
};

export const deleteFormData = async (keyToDelete) => { // Adiciona o parâmetro keyToDelete
  try {
    const existingData = await getFormData();
    if (existingData) {
      delete existingData[keyToDelete]; // Remove a chave especificada
      await AsyncStorage.setItem(FORM_DATA_KEY, JSON.stringify(existingData));
      console.log(`Chave '${keyToDelete}' excluída com sucesso!`);
    } else {
      console.log('Nenhum dado encontrado para excluir.');
    }
  } catch (error) {
    console.error(`Erro ao excluir chave '${keyToDelete}':`, error);
    // Tratamento de erro (opcional)
  }
};
