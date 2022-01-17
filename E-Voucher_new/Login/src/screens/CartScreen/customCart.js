import React from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'
export function CusCart({info}) {
  const navigation = useNavigation();
  const { Name, Quantity, IdCart, Price, IDuser, id } = info;
  return (
      <ScrollView>
        <View style={styles.cartLine}>
          {/* <Image style={styles.imageStyle} source={item.image} /> */}
          <View style={{ marginLeft: 20 }}>
          <Text style={styles.lineLeft}>{info.IDuser}</Text>
            <Text style={styles.lineLeft}>{info.Name}</Text>
            <Text style={styles.lineLeft}>{info.Quantity}</Text>
            <Text style={styles.lineLeft}>$ {info.totalPrice}</Text>
            <Text style={styles.lineLeft}>{info.id}</Text>
            <View style={{ flexDirection: 'row',alignItems:'center',alignSelf:'flex-start' }}>
              {/* <MaterialIcons
              style={{marginLeft:10}}
          name="remove-shopping-cart"
          size={24}
          color="black"
          onPress={() => deleteCart(info.id)}
        /> */}
            </View>
          </View>
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
    cartLine: {
      flexDirection: 'row',
    },
    cartLineTotal: {
      flexDirection: 'row',
      borderTopColor: '#dddddd',
      borderTopWidth: 1
    },
    lineTotal: {
      fontWeight: 'bold',
    },
    lineLeft: {
      fontSize: 20,
      lineHeight: 40,
      color: '#333333',
      marginLeft:5
    },
    lineRight: {
      flex: 1,
      fontSize: 20,
      fontWeight: 'bold',
      lineHeight: 40,
      color: '#333333',
      textAlign: 'right',
    },
    itemsList: {
      backgroundColor: '#eeeeee',
    },
    itemsListContainer: {
      backgroundColor: '#eeeeee',
      paddingVertical: 8,
      marginHorizontal: 8,
    },
    imageStyle: {
      height: 100,
      width: 100,
      alignItems: 'flex-start',
      alignSelf: 'center',
      padding: 10
    }
  });