import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { style } from './style';

const Home = ({navigation}) => {
    return (
        <View style={style.bagian2}>
        <View style={style.container}>
            <Text style={style.jarak}>Home Screen</Text>
            </View>
        <View style={style.container2}>
        <View style={{marginRight:10}}>
        <Button  color="#f23a8d" title='About'
            onPress={()=>navigation.navigate('About')}/>
        </View>
        <View style={{marginRight:10}}>
        <Button style={style.jarakBtn} color="#5e5e5e" title='Account'
            onPress={()=>navigation.navigate('Account')}/>
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
export default Home;