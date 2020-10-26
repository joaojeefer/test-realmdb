import React, { memo } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Repository = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.name}</Text>
      <Text style={styles.description} numberOfLines={2}>
        {data.description}
      </Text>
      <View style={styles.statusRow}>
        <View style={styles.statusItem}>
          <Icon name="star" size={16} color="#333" />
          <Text style={styles.counter}>{data.stars}</Text>
        </View>
        <View style={styles.statusItem}>
          <Icon name="code-fork" size={16} color="#333" />
          <Text style={styles.counter}>{data.forks}</Text>
        </View>
      </View>
    </View>
  );
};

export default memo(Repository);
