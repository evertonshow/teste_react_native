import React, {useState} from 'react';
import {View, TextInput, Button, Text, Alert} from 'react-native';
import axios from 'axios';

const CepBottomSheet = ({onAddressSearch}) => {
  const [cep, setCep] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!cep) {
      Alert.alert('Erro', 'Por favor, digite um CEP válido');
      return;
    }

    setLoading(true);

    try {
      const {data} = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      onAddressSearch(data);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <View>
      <TextInput
        placeholder="Digite um CEP"
        value={cep}
        onChangeText={setCep}
      />
      <Button title="Buscar" onPress={handleSearch} />

      {loading && <Text>Carregando...</Text>}
    </View>
  );
};

export default CepBottomSheet;
