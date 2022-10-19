import * as React from 'react';
import { View,Text, StyleSheet, Button } from 'react-native';
import { style } from './style';

const Account = ({navigation}) => {
    return (
        <View style={style.bagian2}>
        <View style={style.container}>
            <Text style={style.jarak}>Account Screen</Text>
        </View>
        <View style={style.container2}>
        <View style={{marginRight:10}}>
        <Button color="#88dbb2" title='Go Back'
            onPress={()=>navigation.navigate('Home')}/>
        </View>
        <View style={{marginRight:10}}>
        <Button  color="#f23a8d" title='About'
            onPress={()=>navigation.navigate('About')}/>
        </View>
        <View style={{marginRight:10}}>
        <Button style={style.jarakBtn} color="#02a4f5" title='Setting'
            onPress={()=>navigation.navigate('Setting')}/>
        </View>
        <View style={{marginRight:10}}>
        <Button color="#4334eb" title='Upload'
            onPress={()=>navigation.navigate('Upload')}/>
        </View>
        </View>
        </View>
    );
};
export default Account;