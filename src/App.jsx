import React, {useState, useRef, useEffect} from 'react';

import {View, FlatList, Text, TextInput} from 'react-native';

import BottomSheetRaw from 'react-native-raw-bottom-sheet';

import {SpinnerGap} from 'phosphor-react-native';

// components
import CepBottomSheet from './components/cep-bottom-sheet';

// utils
import CoursesJson from './utils/curso.json';
import {CardOptions} from './components/card-options/card-options';

import {CoursesListing} from './components/courses-isting-bottom-sheet/courses-isting-bottom-sheet';

// styles
import {styles} from './styles/global-app';

const App = () => {
  const bottomSheetRef = useRef(null);
  const bottomSheetCourseRef = useRef(null);
  const [address, setAddress] = useState(null);
  const [courses, setCourses] = useState([]);
  const [loadingCourses, setLoadingCourses] = useState(false);

  const dataOptions = [
    {id: '1', title: 'Course', type: 'course'},
    {id: '2', title: 'Buscar Cep', type: 'zip'},
    {id: '3', title: 'Em Breve', type: 'son'},
  ];

  // abrir opcão correta
  const openListCuros = type => {
    if (type === 'course') {
      bottomSheetCourseRef.current.open();
    }
    if (type === 'zip') {
      bottomSheetRef.current.open();
    } else {
      return;
    }
  };

  // filtragem de curso pelo titulo
  const filtrarItens = searchText => {
    setLoadingCourses(true);
    const resultCourse = CoursesJson?.filter(item =>
      item?.title.toLowerCase().includes(searchText?.toLowerCase()),
    );

    
    setTimeout(() => {
      console.log("*&", resultCourse.length)
      if(resultCourse.length){
        setCourses(resultCourse);
      }else{
        setCourses([])
      }
      setLoadingCourses(false);
    }, 1000);

    return;
  };


  useEffect(()=> {
    setCourses(CoursesJson)
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.wrapperTitle}>
        <Text style={styles.title}>Faça buscas Rapidas</Text>
        <Text style={styles.subTitle}>
          Pesqueise sobre oque for de seu interese pessoal
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        {dataOptions.map(data => (
          <CardOptions
            key={String(data.id)}
            title={data.title}
            onPress={() => openListCuros(data.type)}
            type={data?.type}
          />
        ))}
      </View>

      {/**BUSCAR POR CEP */}
      <BottomSheetRaw ref={bottomSheetRef}>
        <View style={styles.bottomSheetContainer}>
          <CepBottomSheet />
          {address && (
            <View style={styles.addressContainer}>
              <Text style={styles.titleAddress}>CEP: {address.cep}</Text>
              <Text style={styles.titleAddress}>
                Logradouro: {address.logradouro}
              </Text>
              <Text style={styles.titleAddress}>Bairro: {address.bairro}</Text>
              <Text style={styles.titleAddress}>
                Cidade: {address.localidade}
              </Text>
              <Text style={styles.titleAddress}>Estado: {address.uf}</Text>
            </View>
          )}
        </View>
      </BottomSheetRaw>

      {/**LITAGEM DE CURSO */}
      <BottomSheetRaw
        ref={bottomSheetCourseRef}
        closeOnDragDown
        customStyles={{
          wrapper: {
            flex: 1,
          },
          container: {
            flex: 1,
            width: '100%',
          },
          draggableIcon: {},
        }}>
        <View style={styles.bottomSheetContainer}>
          <View style={styles.addressContainer}>
            <TextInput
              style={styles.input}
              placeholder="Pesquisar..."
              placeholderTextColor={'#1e1e1e'}
              onChangeText={filtrarItens}
            />
          </View>
          <>
            {loadingCourses ? (
              <View
                style={styles.wrapperLoadingAndText}>
                <SpinnerGap size={32} color="#1c47cc" />
              </View>
            ) : (
              <>
           
                {courses.length === 0 ?(
                  <View style={styles.wrapperLoadingAndText}>
                     <Text style={{color: '#1e1e1e'}}>Nenhum registro encontrado.</Text>
                  </View>
                ) :(
                   <FlatList
                   data={courses}
                   keyExtractor={text => text.id}
                   renderItem={({item}) => (
                     <View style={styles.addressContainer}>
                       <CoursesListing title={item.title} />
                     </View>
                   )}
                 />
                )}
              
            
              </>
            )}
          </>
        </View>
      </BottomSheetRaw>
    </View>
  );
};

export default App;
