import React from 'react';
import BaseComponent from "../common/BaseComponent";
import {View,Text,StyleSheet,Button} from 'react-native';
import Color from '../../assets/Color';
import Utils from '../../utils/Utils';
import FetchUtls from '../../utils/FetchUtil';
import * as Urls from '../../constants/Urls';

export default class Home extends BaseComponent{

    static navigationOptions = ({navigation}: any) => ({
        ...Utils.generateNavTitleOptions('home'),
    });

    constructor(props){
        super(props)
        this.state = {
            titleText:''
        }
    }

    _render(){
        return (
            <View style={styles.container}>
                <Button onPress={this._fetch.bind(this)} title='Home'/>
                <Text>{this.state.titleText}</Text>
            </View>
        )
    }

    _fetch(){
        FetchUtls.post(Urls.Config,{},data=>{
            this.setState({
                titleText:'success:' + JSON.stringify(data)
            })
        },msg =>{
            this.setState({
                titleText:'error:' + JSON.stringify(msg)
            })
        })
    }
}



const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: Color.backgroundColor
        }
    })