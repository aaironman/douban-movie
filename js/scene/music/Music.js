import React from 'react';
import BaseComponent from "../common/BaseComponent";
import {View,Text,StyleSheet} from 'react-native';
import Color from '../../assets/Color';
import Utils from '../../utils/Utils';

export default class Music extends BaseComponent{

    static navigationOptions = ({navigation}: any) => ({
        ...Utils.generateNavTitleOptions('music'),
    });

    _render(){
        return (
            <View  style={styles.container}>
                <Text>Music</Text>
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