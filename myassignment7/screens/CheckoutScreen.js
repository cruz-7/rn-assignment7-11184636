import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { CartContext } from '../screens/CartContext';
import CheckHeader from './CheckHeader';

export default function CheckoutScreen({ navigation }) {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const renderItem = ({ item }) => (
    <View key={item.uniqueId} style={styles.cartItem}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.itemDetails}>
        <Text style={styles.productName}>{item.title}</Text>
        <Text style={styles.description}>{item.subtitle}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
      <TouchableOpacity style={styles.removeButton} onPress={() => removeFromCart(item.uniqueId)}>
        <Text style={styles.removeButtonText}>×</Text>
      </TouchableOpacity>
    </View>
  );

  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')), 0).toFixed(2);
  };

  return (
    <View style={styles.container}> 
     <CheckHeader />
     <Text style={styles.header}>Checkout</Text>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={item => item.uniqueId}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Est. Total</Text>
        <Text style={styles.totalPrice}>${calculateTotal()}</Text>
      </View>
      <TouchableOpacity style={styles.checkoutButton} onPress={() => alert('Proceeding to checkout')}>
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
   
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    width: 80,
    height: 100,
    marginRight: 16,
  },
  itemDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: 'gray',
  },
  price: {
    fontSize: 14,
    color: 'red',
  },
  removeButton: {
    padding: 8,
  },
  removeButtonText: {
    fontSize: 18,
    color: 'red',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  totalText: {
    fontSize: 16,
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
  checkoutButton: {
    backgroundColor: 'black',
    padding: 16,
    borderRadius: 4,
    marginTop: 16,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 18,
  },
});
