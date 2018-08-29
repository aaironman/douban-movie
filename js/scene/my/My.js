import React from 'react';
import BaseComponent from "../common/BaseComponent";
import {View,Text,StyleSheet} from 'react-native';
import Color from '../../assets/Color';
import Utils from '../../utils/Utils';

export default class My extends BaseComponent{

    static navigationOptions = ({navigation}: any) => ({
        ...Utils.generateNavTitleOptions('My'),
    });

    _render(){
        return (
            <View style={styles.container}>
                <Text>My</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.backgroundColor,
        alignItems:'center'
    }
})