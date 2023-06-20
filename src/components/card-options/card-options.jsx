/**
 * IMPRTS
 */
import React from "react";

// react-native
import { View, Text, TouchableOpacity,StyleSheet } from "react-native";

// libs
import { GraduationCap, MagnifyingGlass, ClockAfternoon  } from 'phosphor-react-native';

// styles
import { styles } from "./styles";

const CardOptions = ({title, type, ...props})=> {
  return(
    <TouchableOpacity {...props} style={styles.container} activeOpacity={0.8}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.icon}>
          <>
            {type === "course" && (
              <GraduationCap size={24} color="#FFF" />
            )}
          </>
          <>
            {type === "zip" && (
              <MagnifyingGlass  size={24} color="#FFF" />
            )}
          </>
          <>
            {type === "son" && (
              <ClockAfternoon  size={24} color="#FFF" />
            )}
          </>
        
      </View>
    </TouchableOpacity>
  )
};


/**
 * EXPORTS
 */
export {
   CardOptions
}