import React, {Suspense, useState} from 'react';
import {View, Text, Button, StyleSheet, FlatList} from 'react-native';
import {useLazyLoadQuery} from 'react-relay';
import {FETCH_TENANT_QUERY} from '../queries/tenant';
import Item from './renderItem';
function ListOfTenants() {
  const [dataPk, setDataPk] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const dataTenant = useLazyLoadQuery(FETCH_TENANT_QUERY);

  const fetchData = () => {
    if (dataTenant.tenant_connection) {
      setDataPk(dataTenant.tenant_connection?.edges);
    }
  };

  const DATA = [];
  dataPk.map((item, k) =>
    DATA.push({id: item.node.id, title: item.node.name, order: k + 1}),
  );
  const renderItem = ({item}) => {
    const backgroundColor =
      item.id === selectedId
        ? 'rgba(16, 15, 16, 0.5)'
        : 'rgba(111, 196, 222, 0.3)';
    const color = item.id === selectedId ? 'white' : 'black';
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };
  return (
    <View style={styles.containerPk}>
      <Text style={styles.titleStyle}>Tenant</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
      <Button title="Get tenant titles" onPress={fetchData} />
    </View>
  );
}

const styles = StyleSheet.create({
  containerPk: {
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  titleStyle: {
    fontSize: 30,
    fontWeight: '800',
  },
});

const List = () => {
  return (
    <Suspense>
      <ListOfTenants />
    </Suspense>
  );
};
export default List;
