import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { style } from './style';


const Setting = ({navigation}) => {
    return (
        <View style={style.bagian2}>
        <View style={style.container}>
            <Text style={style.jarak}>Setting Screen</Text>
        </View>
        <View style={style.container2}>
        <View style={{marginRight:10}}>
        <Button color="#88dbb2" title='Go Back'
            onPress={()=>navigation.navigate('Home')}/>
        </View>
        <View style={{marginRight:10}}>
        <Button  color="#f23a8d" title='Go to About'
            onPress={()=>navigation.navigate('About')}/>
        </View>
        <View style={{marginRight:10}}>
        <Button style={style.jarakBtn} color="#5e5e5e" title='Account'
            onPress={()=>navigation.navigate('Account')}/>
        </View>
        <View style={{marginRight:10}}>
        <Button color="#4334eb" title='Upload'
            onPress={()=>navigation.navigate('Upload')}/>
        </View>
        </View>
        </View>
        );
};
export default Setting;