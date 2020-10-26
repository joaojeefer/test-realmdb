import React, { useState, useEffect, useCallback } from 'react';
import {
  Alert,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Keyboard,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RepositoryItem } from "../../components";
import Creators from '../../store/actions';
import styles from './style';

function RepositoryList() {
  const dispatch = useDispatch();
  const repositories = useSelector((state) => state.repository.repositories);
  const [input, setInput] = useState('');

  useEffect(() => {
    loadRepositories();
  }, []);

  const loadRepositories = useCallback(
    () => dispatch(Creators.loadRepositories()),
    [dispatch],
  );

  async function handleFetchRepository() {
    await fetchRepository();
    setInput('');
    Keyboard.dismiss();
  }

  const fetchRepository = useCallback(
    () => dispatch(Creators.fetchRepository(input)),
    [dispatch, input],
  );

  const handleDeleteRepositories = useCallback(
    () => {
      Alert.alert(
        '',
        'Deseja deletar todos os repositórios?',
        [
          { text: 'Não', onPress: () => false },
          { text: 'Sim', onPress: () => dispatch(Creators.deleteRepositories()) },
        ],
        { cancelable: false },
      );
    },
    [dispatch],
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Repositórios</Text>
      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          onSubmitEditing={handleFetchRepository}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Digite o repositório..."
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.button} onPress={handleFetchRepository}>
          <Icon name="add" size={22} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handleDeleteRepositories}>
          <Icon name="delete" size={22} color="#b3131b" />
        </TouchableOpacity>
      </View>
      <FlatList
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
        data={repositories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={(props) => <RepositoryItem data={props.item} />}
      />
    </View>
  );
}

export default RepositoryList;
