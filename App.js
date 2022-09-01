import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {RelayEnvironmentProvider} from 'react-relay';
import environment from './fetchGraphQl';
import ListOfTenants from './src/components/ListOfTenants';

const App = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <SafeAreaView>
        <View style={styles.container}>
          <ListOfTenants />
        </View>
      </SafeAreaView>
    </RelayEnvironmentProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
