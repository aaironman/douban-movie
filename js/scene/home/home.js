import React from 'react';
import BaseComponent from "../common/BaseComponent";
import {View,Text,StyleSheet} from 'react-native';
import Color from '../../assets/Color';
import Utils from '../../utils/Utils';

export default class Home extends BaseComponent{

    static navigationOptions = ({navigation}: any) => ({
        ...Utils.generateNavTitleOptions('home'),
    });

    _render(){
        return (
            <View style={styles.container}>
                <Text>Home</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: Color.backgroundColor
        }
    })