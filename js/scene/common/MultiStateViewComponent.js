import React,{Component} from 'react'
import {View,StyleSheet,ActivityIndicator,Image,Text} from 'react-native'
import BaseComponent from "./BaseComponent";
import * as Constants from '../../constants/Constants'
import Utils from '../../utils/Utils'
import Color from "../../assets/Color";
import PropTypes from 'prop-types'
import ImageSourcePropType from 'ImageSourcePropType'


export default class MultiStateViewComponent extends BaseComponent{

    static navigationOptions = ()=>({
        ...Utils.generateNavTitleOptions(''),
    })


    constructor(props){
        super(props)
    }

    static defaultProps = {
        viewState:Constants.VIEW_STATUS_LOADING,
        errMsg:'',
        emptyImg:require('../../assets/images/empty_list.png'),
        errorImg:require('../../assets/images/ic_error.png')
    }

    static propTypes = {
        errMsg:PropTypes.string,
        emptyImg:ImageSourcePropType,
        emptyImgStyle:PropTypes.object,
        errorImg:ImageSourcePropType,
        errorImgStyle:PropTypes.object
    }

    _updateStateView(status,errMsg=''){
        this.setState({
            viewState:status,
            errMsg:errMsg
        })
    }

    _render(){
        switch (this.state.viewState){
            case Constants.VIEW_STATUS_LOADING:
                return this._renderLoading()
            case Constants.VIEW_STATUS_EMPTY:
                return this._renderEmpty()
            case Constants.VIEW_STATUS_CONTENT:
                return this._renderContent()
            case Constants.VIEW_STATUS_ERROR:
                return this._renderError()
            default:
                return this._renderLoading()
        }

    }


    _renderLoading(){
        return (<View style={styles.container}>
                    <ActivityIndicator size='large' color={Color.primary}/>
                </View>)
    }


    _renderEmpty(){
        return (
            <View style={styles.container}>
                <Image source={this.state.emptyImg} style={[styles.imgStyle,this.props.emptyImgStyle]}/>
            </View>
        )
    }

    _renderContent(){

    }

    _renderError(){
        return (
            <View style={styles.container}>
                <Image source={this.state.errorImg} style={[styles.imgStyle,this.props.errorImg]}/>
                <Text style={styles.title}>{this.state.errMsg}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Color.background,
        alignItems:'center',
        justifyContent:'center'
    },
    imgStyle:{
        resizeMode:'contain'
    },
    title:{
        fontSize:16,
        color:Color.gray,
        marginTop:10
    }
})