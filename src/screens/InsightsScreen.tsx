import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InsightsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sleep Insights</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 16,
  },
});

export default InsightsScreen;