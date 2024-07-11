import React, { useContext, useState, useEffect } from 'react';
import { View, ScrollView, TouchableOpacity, Text, StyleSheet, Image, Touchable } from 'react-native';
import { CartContext } from './CartContext';
import Header from '../components/Header';
import axios from 'axios';

// const products = [
//   { id: 1, title: 'Office Wear', subtitle: 'reversible angora cardigan', price: '$120', image: require('../assets/dress1.png') },
//   { id: 2, title: 'Black', subtitle: 'reversible angora cardigan', price: '$120', image: require('../assets/dress2.png') },
//   { id: 3, title: 'Church Wear', subtitle: 'reversible angora cardigan', price: '$120', image: require('../assets/dress3.png') },
//   { id: 4, title: 'Lamerei', subtitle: 'reversible angora cardigan', price: '$120', image: require('../assets/dress4.png') },
//   { id: 5, title: '21WN', subtitle: 'reversible angora cardigan', price: '$120', image: require('../assets/dress5.png') },
//   { id: 6, title: 'Lopo', subtitle: 'reversible angora cardigan', price: '$120', image: require('../assets/dress6.png') },
//   { id: 7, title: '21WN', subtitle: 'reversible angora cardigan', price: '$120', image: require('../assets/dress7.png') },
//   { id: 8, title: 'lame', subtitle: 'reversible angora cardigan', price: '$120', image: require('../assets/dress3.png') },
// ];



const HomeScreen = ({ navigation }) => {
  const { addToCart } = useContext(CartContext);
  const [data, setData] = useState([])
  
  const fetchProduct = async () => {
    axios.get('https://fakestoreapi.com/products').then((response) => {
      setData(response.data);
      console.log(data);
    })
  
  }
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.productGrid}>
          {data.map((item) => (
            <TouchableOpacity key={item.id} style={styles.productCard} onPress={() => navigation.navigate('ProductDescriptionScreen', { item })}>
              <Image source={{uri: item.image}} style={styles.productImage} />
              <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
                <Image source={require('../assets/add_circle.png')} style={styles.addIcon} />
              </TouchableOpacity>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCard: {
    width: '48%',
    marginBottom: 20,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  addButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  addIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginTop: 150
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    marginHorizontal: 10,
  },
  price: {
    fontSize: 16,
    color:'#000',
fontWeight: 'bold',
marginVertical: 10,
marginHorizontal: 10,
},
checkoutButton: {
backgroundColor: '#000',
paddingVertical: 15,
paddingHorizontal: 20,
borderRadius: 5,
position: 'absolute',
bottom: 20,
right: 20,
},
checkoutButtonText: {
color: '#fff',
fontSize: 16,
fontWeight: 'bold',
},
});

export default HomeScreen;
