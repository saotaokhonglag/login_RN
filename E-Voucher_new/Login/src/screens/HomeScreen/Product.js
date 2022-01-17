import React from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'
export function Product(info) {
  const navigation = useNavigation();
  const { name, image, location, price, id,mota } = info;
  return (
    <TouchableOpacity onPress={() => {
      navigation.navigate("DetailsScreen",
        {
            id: info.id,
            name: info.name,
            price:info.price,
            qty:0,
            location:info.location,
            mota:info.mota
        });
    }}>
      <ScrollView>
        <View style={styles.card}>
          <Image style={styles.thumb} source={require('../../../assets/images/DaNang.jpg')} />
          <Text style={{ marginLeft: 10 }}>{info.name}</Text>
          <Text style={styles.price}>{info.price}</Text>

        </View>
      </ScrollView>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,

    marginLeft:20
  },
  thumb: {
    height: 100,
    width:'100%',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,

  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
});
