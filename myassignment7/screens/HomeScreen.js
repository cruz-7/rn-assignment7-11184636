import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { CartContext } from '../screens/CartContext';  // Corrected path
import Header from '../components/Header';

const products = [
  { id: 1, title: 'Office Wear', subtitle: 'reversible angora cardigan', price: '$120', image: require('../assets/dress1.png') },
  { id: 2, title: 'Black', subtitle: 'reversible angora cardigan', price: '$120', image: require('../assets/dress2.png') },
  { id: 3, title: 'Church Wear', subtitle: 'reversible angora cardigan', price: '$120', image: require('../assets/dress3.png') },
  { id: 4, title: 'Lamerei', subtitle: 'reversible angora cardigan', price: '$120', image: require('../assets/dress4.png') },
  { id: 5, title: '21WN', subtitle: 'reversible angora cardigan', price: '$120', image: require('../assets/dress5.png') },
  { id: 6, title: 'Lopo', subtitle: 'reversible angora cardigan', price: '$120', image: require('../assets/dress6.png') },
  { id: 7, title: '21WN', subtitle: 'reversible angora cardigan', price: '$120', image: require('../assets/dress7.png') },
  { id: 8, title: 'lame', subtitle: 'reversible angora cardigan', price: '$120', image: require('../assets/dress3.png') },
];

const HomeScreen = ({ navigation }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <View>
        <Header navigation={navigation} />
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.productGrid}>
          {products.map((product) => (
            <View key={product.id} style={styles.productCard}>
              <Image source={product.image} style={styles.productImage} />
              <TouchableOpacity style={styles.addButton} onPress={() => addToCart(product)}>
                <Image source={require('../assets/add_circle.png')} style={styles.addIcon} />
              </TouchableOpacity>
              <Text style={styles.title}>{product.title}</Text>
              <Text style={styles.subtitle}>{product.subtitle}</Text>
              <Text style={styles.price}>{product.price}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  content: {
    padding: 10,
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCard: {
    width: '48%',
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  addButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#fff',
    borderRadius: 12,
  },
  addIcon: {
    width: 24,
    height: 29,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    marginHorizontal: 10,
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: '#e91e63',
    marginHorizontal: 10,
    marginBottom: 10,
  },
});

export default HomeScreen;
