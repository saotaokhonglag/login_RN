import React, {useState} from 'react'
import { 
    Text, 
    View, 
    StyleSheet, 
    ScrollView } from 'react-native'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import {useNavigation} from '@react-navigation/native'



const ConfirmEmailScreen = () =>{

    const [code, setCode] = useState('');

    const navigation = useNavigation();
  
    const onConfirmPressed = () =>{
        navigation.navigate('Home')
    }
    const onSignInPressed = () =>{
        navigation.navigate('SignIn')
    }
    const onResendPressed = () =>{
        console.warn('onResendPressed')
    }
    return(
        <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.root}>
            
            <Text style={styles.title}>Confirm  your Email</Text>

             <CustomInput 
             placeholder="Enter your confirmation code" 
             value={code} 
             setvalue={setCode}
             />
        
             <CustomButton text="Confirm" onPress={onConfirmPressed}/>
             
             <CustomButton 
             text="Resend code" 
             onPress={onResendPressed}
             type="SECONDARY"
             />

             <CustomButton 
             text="Back to Sign In" 
             onPress={onSignInPressed}
             type="TERTIARY"
             />
        </View>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding:20,
    },
 
    title:{
        fontSize: 24,
        fontWeight:'bold',
        color: '#051C60',
        margin: 10,
    },
    text:{
        color: 'gray',
        marginVertical: 10,
    },
    link:{
        color:'#FDB875',
    },
});

export default ConfirmEmailScreen