import React from 'react';
import {View, Text} from 'react-native';

// styles
import {styles} from './styles';

const CourseCard = ({title, location}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.location}>{location}</Text>
    </View>
  );
};

export default CourseCard;
