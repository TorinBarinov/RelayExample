import React, {useEffect, useState} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {
  fetchQuery,
  RelayEnvironmentProvider,
  useLazyLoadQuery,
} from 'react-relay';
import {fetchTenant} from './src/queries/tenant';
import environment from './fetchGraphQl';
const App = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <SafeAreaView>
        <View style={styles.Container}>
          <Text>Pk</Text>
          <Button title="Press" />
        </View>
      </SafeAreaView>
    </RelayEnvironmentProvider>
  );
};

const styles = StyleSheet.create({
  Container: {
    margin: 20,
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
