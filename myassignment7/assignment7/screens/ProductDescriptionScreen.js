// screens/ProductDescriptionScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const ProductDescriptionScreen = ({ route, navigation }) => {
  const { item } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{uri: item.image}} style={styles.productImage} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.header}>MATERIALS</Text>
        <Text style={styles.text}>
          We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.
        </Text>
        <View style={styles.direction}>
        <Image style={styles.image} source={require("../assets/Do Not Bleach.png")} />
        <Text style={styles.text}>Do not use bleach</Text>
        </View>
        <View style={styles.direction}>
        <Image style={styles.image} source={require("../assets/Do Not Tumble Dry.png")} />
        <Text style={styles.text}>Do not tumble dry</Text>
        </View>
        <View style={styles.direction}>
        <Image style={styles.image} source={require("../assets/Do Not Wash.png")} />
        <Text style={styles.text}>Dry clean with tetrachloroethylene</Text>
        </View>   
      <View style={styles.direction}>
        <Image style={styles.image} source={require("../assets/Iron Low Temperature.png")} />
        <Text style={styles.text}>Iron at a maximum of 110°C/230°F</Text>
        </View>
        
        <View style={styles.direction}>
        <Image style={styles.image} source={require("../assets/Shipping.png")} />
        <Text style={styles.header}>Free Flat Rate Shipping</Text>
        </View>
        
        <Text style={styles.text}>Estimated to be delivered on 09/11/2021 - 12/11/2021.</Text>
       
        <View style={styles.bottom}>
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('CheckoutScreen')}>
        <Image style={styles.imagePlus} source={require("../assets/Plus.png")} />
          <Text style={styles.addButtonText}>ADD TO BASKET</Text>
          <Image style={styles.imagePlus} source={require("../assets/Heart.png")} />
        </TouchableOpacity>
        </View>
      </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  productImage: {
    width: '50%',
    height: 300,
    resizeMode: 'cover',
    padding: '100px',
    marginLeft: 80,
    
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: '#888',
    marginVertical: 10,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
    paddingLeft: 10,
  },
  addButton: {
    backgroundColor: 'black',
    padding: 16,
    borderRadius: 4,
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
  },
  direction: {
    flexDirection: 'row',
  },
  imagePlus: {
    tintColor: 'white',
  }
});

export default ProductDescriptionScreen;
