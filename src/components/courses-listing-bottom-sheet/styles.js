/**
 * IMPORTS
 */
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: "#cdcdcd",
    borderRadius: 6,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 6, 
    paddingBottom: 4,
    position:'relative'
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: '#1c47cc',
  },
  subTitle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#958f8f',
    
  },
  matricula: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1c47cc',
   
  },
  wrapperTextMatricula: {
    width: '100%',
    height: 26,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
  }
});


/**
 * EXPORTS
 */
export {
  styles
}