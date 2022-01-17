import { where } from 'firebase/firestore';
import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Image } from 'react-native';
import {getDocs, collection} from 'firebase/firestore'
import { CartContext } from '../../../CartContext';
import { database } from '../../../firebase-config';
import { CusCart } from './customCart';
export function Cart() {

  const { items, getItemsCount, getTotalPrice,addQuantity} = useContext(CartContext);

  let [tour, settour] = useState([])
async function getAllData() {
    const query = await getDocs(collection(database, "SessionCart"));
    let vouchers = [];
    query.forEach(doc=>{
        vouchers.push({...doc.data(),id:doc.id})
    })
    settour(vouchers)
   console.log(vouchers)
}

useEffect(() => {
    getAllData();
}, [])
  function Totals() {
    let [total, setTotal] = useState(0);
    useEffect(() => {
      setTotal(getTotalPrice());
    });
    
    return (
      <View style={styles.cartLineTotal}>
        <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
        <Text style={styles.lineRight}>$ {total}</Text>
      </View>
    );
  }
  
  return (
    <FlatList
      style={styles.itemsList}
      contentContainerStyle={styles.itemsListContainer}
      keyExtractor={(item, index) => index.toString()}
      data={tour}
      renderItem={({item})=>{
        return (
        
          <View>
            <CusCart info={item}/>
              <Text>UID: {item.id}</Text>
          </View>
          )
      }}
      
      ListFooterComponent={Totals}
    />
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
