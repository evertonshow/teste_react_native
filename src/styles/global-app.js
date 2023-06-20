/**
 * IMPORTS
 */
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'flex-start',
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    paddingLeft: 16,
    paddingRight: 16,
  },
  wrapperTitle: {
    width: '100%',
    marginTop: 20,
    marginBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    color: '#1c47cc',
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#958f8f',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    marginBottom: 16,
  },

  bottomSheetContainer: {
    flex: 1,
    padding: 16,
  },
  coursesContainer: {
    maxHeight: 300,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 2,
    borderRadius: 6,
    borderColor: '#cdcdcd',
    paddingLeft: 16,
    color: '#1e1e1e',
  },
  wrapperLoadingAndText: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

/**
 * EXPORT
 */
export {
  styles
}