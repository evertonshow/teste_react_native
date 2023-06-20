/**
 * IMPRTS
 */
import React from 'react';

// react-native
import {View, Text, TouchableOpacity} from 'react-native';

// styles
import {styles} from './styles';

const CoursesListing = ({title, type, test, ...props}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>Perido: 02/07/2023 á 02/07/2025</Text>
      </View>
      <Text style={styles.matricula}>#Matricular</Text>
    </TouchableOpacity>
  );
};

/**
 * EXPORTS
 */
export {CoursesListing};
