import React, {useState,useEffect} from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  FlatList,
  TextInput,
  
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import {collection, query, where, getDocs} from 'firebase/firestore'
import { database } from '../../../firebase-config';
import {useAuth} from '../../../firebase'

//new
import { Product } from './Product';
import { getProducts } from '../../consts/tour';
import Navigation from '../../navigation/admin';

import Slider from './Slider'
const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

const HomeScreen = ({navigation}) => {
  const currentUser = useAuth();
  
  const [tour, settour] = useState([])
  const user = 'user'

/* Lấy toàn bộ Voucher */
async function getAllData() {
  const q = query(collection(database, "user"), where("id", "==", "DN01"));

  const querySnapshot = await getDocs(q);
    let vouchers = [];
    querySnapshot.forEach(doc=>{
        vouchers.push(doc.data());
    })
    settour(vouchers)
    console.log(tour);
}

useEffect(() => {
    getAllData();
}, [])

  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(getProducts());
  });
  function header(){
    return (
      <View>
        <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}>
        <View style={styles.inputContainer}>
          <Icon name="search" size={28} />
          <TextInput
            style={{flex: 1, fontSize: 18}}
            placeholder="Tìm kiếm"
          />
        </View>
      </View>
      <View style={styles.header}>
        <View>
          <Slider/>
        </View> 
      </View>
      <Text style={{alignItems:'flex-start',alignSelf:'flex-start',fontWeight:'bold'}}> Sản phẩm</Text>
      </View>
    )
  }
 
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      
      <View
        style={{
          marginTop: 40,
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}>
        <View style={styles.inputContainer}>
          <Icon name="search" size={28} />
          <TextInput
            style={{flex: 1, fontSize: 18}}
            placeholder="Tìm kiếm"
          />
        </View>
      </View>
      <View style={styles.header}>
        <View>
          <Slider/>
        </View> 
      </View>
      <Text style={{alignItems:'flex-start',alignSelf:'flex-start',fontWeight:'bold'}}> Sản phẩm</Text>
      <FlatList
      style={styles.productsList}
      contentContainerStyle={styles.productsListContainer}
      keyExtractor={(item) => item.id.toString()}
      data={tour}
      renderItem={({item: product})=>{
        return <Product {...product} 
        info={product}/>
      }}
    />
    </SafeAreaView>
    );
  
};

const styles = StyleSheet.create({
  productsList: {
    backgroundColor: '#eeeeee',
  },
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
  productsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  sortBtn: {
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesListContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  categoryBtnImgCon: {
    height: 35,
    width: 35,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: 230,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,
  },
  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
