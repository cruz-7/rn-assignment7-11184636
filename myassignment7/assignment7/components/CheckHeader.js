import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

const CheckHeader = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textHeader}>
        <View style={styles.logoIcon}>
          <Image source={require('../assets/Logo.png')} style={styles.logo} />
        </View>
        <View style={styles.rightIcons}>
          <TouchableOpacity style={styles.icon}>
            <Image source={require('../assets/Search.png')} style={styles.image} />
          </TouchableOpacity>
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
    paddingRight: 20,
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
  logoIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default CheckHeader;
