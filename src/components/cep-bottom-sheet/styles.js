/**
 * IMPORTS
 */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 50,
    borderWidth: 2,
    borderRadius: 6,
    borderColor: '#cdcdcd',
    paddingLeft: 16,
    color: '#1e1e1e',
    marginBottom: 16,
  },
  addressContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#CDCDCD',
    marginTop: 12,
    padding: 12,
  },
  titleAddress: {
    fontSize: 14,
    color: '#1e1e1e',
    fontWeight: '600',
  },
  viewSpinner: {
    width: '100%',
    flex: 1,
    marginTop: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/**
 * EXPORTS
 */
export {styles};
