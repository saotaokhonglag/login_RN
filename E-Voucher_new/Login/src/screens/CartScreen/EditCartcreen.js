import React, { useEffect, useState, useContext } from 'react';
import {
  Text,
  Image,
  View,
  ScrollView,
  SafeAreaView,
  Button,
  StyleSheet
} from 'react-native';
import { AntDesign } from "@expo/vector-icons";
;

const EditCartScreen = ({ route }) => {

  const item = route.params;
  
  const [change, setChange] = useState({});
  function AddQty(item) {
    setChange(item.qty++)
    setCurPrice(item.qty * item.price)
  }

  
  function DecQty(item) {
    setChange(item.qty--)
    setCurPrice(item.qty * item.price)
  }
  function onAddToCart() {
    if(item.qty<=0){
      alert('Vui lòng chọn số lượng nhiều hơn 1')
    }
    else{
      try {
        const addSsCart = addDoc(collection(database, 'SessionCart'), {
          IDuser: 'Abc',
          IdCart: item.id,
          Name: item.name,
          Price: item.price,
          Quantity: item.qty
        });
        alert('Add to cart successfully!')
      } catch (error) {
        alert(error);
      }
    }
  }

  return (
    <SafeAreaView>
      <ScrollView>

        <View style={styles.infoContainer}>
          <Image
            style={styles.image}
            source={require('../../../assets/images/DaNang.jpg')}
          />
          
          {/* <View style={{backgroundColor:'#F4A460'}}> */}
          <View >
          {/* <Text style={styles.name}>{item.name}</Text>      
          <Text style={styles.location}>Địa điểm: {item.location}</Text>
          <Text style={styles.location}>$ {item.price}</Text> */}
          <Text style={styles.name}>haha</Text>      
          <Text style={styles.location}>Địa điểm: can tho</Text>
          <Text style={styles.location}>$ 10000</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start',marginBottom:10 }}>
            <Text style={{fontSize:16,fontWeight:'300'}}>Số lượng: </Text>
            <AntDesign
              name="minuscircle"
              size={24}
              color="black"
              onPress={() => DecQty(item)}
            />
            {/* <Text style={{marginLeft:10}}>{item.qty}</Text> */}
            <Text style={{marginLeft:10}}>10</Text>
            <AntDesign
              style={{ marginLeft: 10 }}
              name="pluscircle"
              size={24}
              color="black"
              onPress={() => AddQty(item)}
            />

          </View>
          {/* <Text style={styles.location}> Thành tiền: {curPrice}</Text> */}
          <Text style={styles.location}> Thành tiền: 1000</Text>
          <Button
            onPress={onAddToCart}
            title="Cập nhật"
            
          />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 
 
  image: {
    height: 300,
    width: '100%'
  },
  infoContainer: {
    padding: 16,
    backgroundColor:'#FFEFD5'
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
    
  },
  location:{
    fontSize: 16,
    fontWeight: '400',
    color: '#787878',
    marginBottom: 10,
    color: 'black',
    
  }
});

export default EditCartScreen;
