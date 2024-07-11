import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';

const { height } = Dimensions.get('window');

const SideMenu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={() => navigation.closeDrawer()}>
        <Image style={styles.closeText} source={require("../assets/Close.png")} />
      </TouchableOpacity>
      <Text style={styles.header}>ERIC ATSU</Text>
      <View style={styles.separator} />
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={styles.menuItem}>Store</Text>
      </TouchableOpacity>
      <Text style={styles.menuItem}>Locations</Text>
      <Text style={styles.menuItem}>Blog</Text>
      <Text style={styles.menuItem}>Jewelry</Text>
      <Text style={styles.menuItem}>Electronic</Text>
      <Text style={styles.menuItem}>Clothing</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 35,
    paddingLeft: 15,
  },
  closeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30,
    left: 0
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  menuItem: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default SideMenu;
