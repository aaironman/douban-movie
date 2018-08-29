import React,{Component} from  'react';
import {View,Text,StyleSheet} from 'react-native';
import BaseComponent from "../common/BaseComponent";
import Utils from "../../utils/Utils";
import Color from "../../assets/Color";

export default class Details extends BaseComponent{

    static navigationOptions = ({navigation})=>({
        ...Utils.generateNavTitleOptions('detail'),
    })

    _render(){
        return (
            <View style={styles.container}>
                <Text>details</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Color.white
    }
})