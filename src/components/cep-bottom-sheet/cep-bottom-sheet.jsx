import React, {useState, useCallback} from 'react';
import {View, TextInput, Button, Text, Alert} from 'react-native';
import axios from 'axios';

// icons
import {SpinnerGap} from 'phosphor-react-native';

// styles
import {styles} from './styles';

const CepBottomSheet = () => {
  const [cep, setCep] = useState('');
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState(null);


  // procurando por cep
  const handleSearch = async () => {
    if (!cep) {
      Alert.alert('Erro', 'Por favor, digite um CEP válido');
      setAddress(null);
      return;
    }

    setLoading(true);

    try {
      const {data} = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      console.log(data);
      setAddress(data);

      setTimeout(() => {
        setAddress(data);
        setLoading(false);
      }, 1500);
    } catch (error) {
      console.error(error);
    }
  };

  // função que limpa o estado
  const handleCleanStateAnddres = useCallback(() => {
    if (cep === '') {
      setAddress(null);
    }
  }, [cep]);

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Digite um CEP..."
        placeholderTextColor={'#1e1e1e'}
        value={cep}
        onChangeText={text => {
          setCep(text);
          handleCleanStateAnddres();
        }}
      />
      <Button color={"#1c47cc"} title="Buscar" onPress={handleSearch}  />

      {loading ? (
        <View style={styles.viewSpinner}>
          <SpinnerGap size={32} color="#1c47cc" />
        </View>
      ) : (
        <>
          {address && (
            <View style={styles.addressContainer}>
              <Text style={styles.titleAddress}>CEP: {address?.cep}</Text>
              <Text style={styles.titleAddress}>
                Logradouro: {address?.logradouro}
              </Text>
              <Text style={styles.titleAddress}>Bairro: {address?.bairro}</Text>
              <Text style={styles.titleAddress}>
                Cidade: {address?.localidade}
              </Text>
              <Text style={styles.titleAddress}>Estado: {address?.uf}</Text>
            </View>
          )}
        </>
      )}
    </View>
  );
};

export default CepBottomSheet;
