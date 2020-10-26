import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      padding: 20,
      marginBottom: 10,
      borderRadius: 10,
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
    },
    description: {
      marginTop: 5,
      color: '#333',
    },
    statusRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 15,
    },
    statusItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 20,
    },
    counter: {
      color: '#333',
      marginLeft: 5,
    },
  });

  export default styles;
