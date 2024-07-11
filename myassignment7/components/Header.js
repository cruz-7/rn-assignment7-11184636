import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';


const Header = ({navigation}) => {
  return (
    <View style={styles.container}>

      <View style={styles.textHeader}>
      <TouchableOpacity  style={styles.icon}>
        <Image source={require('../assets/Menu.png')} style={styles.image} />
      </TouchableOpacity>
      <Image source={require('../assets/Logo.png')} style={styles.logo} />
      <View style={styles.rightIcons}>
        <TouchableOpacity style={styles.icon}>
          <Image source={require('../assets/Search.png')} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate("CheckoutScreen")}>
          <Image source={require('../assets/shoppingBag.png')} style={styles.image} />
        </TouchableOpacity>
      </View>
      </View>

      <View style={styles.subHeader}>
      <Text style={styles.storyText}>OUR STORY</Text>
      <View style={styles.listFilterIcons}>
        <Image source={require('../assets/Listview.png')} style={styles.image} />
        <Image source={require('../assets/Filter.png')} style={styles.image} />
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
  },
  textHeader: {
    width: '100%',
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 20
  },
  subHeader: {
    width: '100%',
    height: 30,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20
  },
  icon: {
    marginHorizontal: 5,
  },
  image: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  storyText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  listFilterIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10
  },
});

export default Header;
