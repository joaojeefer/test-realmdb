import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#999',
    padding: 20,
    flex: 1,
  },
  titleText: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  inputArea: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    maxWidth: 350,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 8,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#fff',
  },
  button: {
    justifyContent: 'center',
    marginLeft: 10,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#6db4c1',
  },
  list: {
    marginTop: 10,
  },
  loadingArea: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
