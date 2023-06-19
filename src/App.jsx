import React, {useState, useRef} from 'react';
import {
  View,
  Button,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Alert,
  Text,
} from 'react-native';
import BottomSheetRaw from 'react-native-raw-bottom-sheet';

import CepBottomSheet from './components/CepBottomSheet';
import CourseCard from './components/CourseCard';
import CoursesJson from './utils/curso.json';

const App = () => {
  const bottomSheetRef = useRef(null);
  const [address, setAddress] = useState(null);
  const [courses, setCourses] = useState([]);
  const [loadingCourses, setLoadingCourses] = useState(false);

  const handleAddressSearch = async data => {
    setAddress(data);
    bottomSheetRef.current.open();
  };

  const handleCoursesSearch = async () => {
    if (!address) {
      Alert.alert('Erro', 'Por favor, digite um CEP válido primeiro');
      return;
    }

    setLoadingCourses(true);

    try {
      // Simulação de busca de cursos próximos
      // Substitua esta parte pela chamada à API de cursos real
      // const response = await axios.get('https://api.example.com/courses', {
      //   params: {
      //     lat: address.lat,
      //     lng: address.lng,
      //   },
      // });

      const courses = CoursesJson;
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }

    setLoadingCourses(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="Buscar Endereço"
          onPress={() => bottomSheetRef.current.open()}
        />
        <Button title="Buscar Cursos" onPress={handleCoursesSearch} />
      </View>

      <BottomSheetRaw ref={bottomSheetRef}>
        <View style={styles.bottomSheetContainer}>
          <CepBottomSheet onAddressSearch={handleAddressSearch} />

          {address && (
            <View style={styles.addressContainer}>
              <Text>CEP: {address.cep}</Text>
              <Text>Logradouro: {address.logradouro}</Text>
              <Text>Bairro: {address.bairro}</Text>
              <Text>Cidade: {address.localidade}</Text>
              <Text>Estado: {address.uf}</Text>
            </View>
          )}

          {loadingCourses ? (
            <ActivityIndicator size="large" color="#000" />
          ) : (
            <View style={styles.coursesContainer}>
              <FlatList
                data={courses}
                renderItem={({item}) => (
                  <CourseCard title={item.title} location={item.location} />
                )}
                keyExtractor={item => item.id.toString()}
              />
            </View>
          )}
        </View>
      </BottomSheetRaw>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  bottomSheetContainer: {
    padding: 16,
    backgroundColor: '#fff',
    height: 600,
  },
  addressContainer: {
    marginBottom: 16,
  },
  coursesContainer: {
    maxHeight: 300,
  },
});

export default App;
