import React,{Component} from  'react';
import {View,Text,StyleSheet} from 'react-native';
import BaseComponent from "../common/BaseComponent";
import Utils from "../../utils/Utils";
import Color from "../../assets/Color";
import FetchUtl from '../../utils/FetchUtil'
import * as Url from '../../constants/Urls'
import MultiStateViewComponent from "../common/MultiStateViewComponent";
import * as Constants from '../../constants/Constants'
import PLImage from "../common/PLImage";
import {ListRow} from 'teaset'

export default class Details extends MultiStateViewComponent{

    static navigationOptions = ({navigation})=>({
        ...Utils.generateNavTitleOptions('detail'),
    })

    constructor(props){
        super(props)
        this.state = {
            id:'',
            data:{}
        }
    }

    componentDidMount() {
        const { navigation } = this.props;
        this.state.id = navigation.getParam('id','')
        this._fetchData()
    }

    _fetchData(){
        FetchUtl.post(Url.MOVIE_DETAILS+this.state.id,{},data=>{
            this.setState({
                data:data
            })
            this._updateStateView(Constants.VIEW_STATUS_CONTENT)


        },err=>{
            this._updateStateView(Constants.VIEW_STATUS_ERROR)
        })
    }


    _renderContent(){
        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <PLImage uri={this.state.data.images.medium} style={{width:120, height:200}}/>
                    <View style={styles.summarize}>
                        <View style={styles.textContainer}>
                            <Text style={styles.titleTextStyle}>片名：</Text>
                            <Text style={styles.contentTextStyle}>{this.state.data.title}</Text>
                        </View>
                        <View style={[styles.textContainer,{marginTop:5}]}>
                            <Text style={styles.titleTextStyle}>导演：</Text>
                            <Text style={styles.contentTextStyle}>{this._dealName(this.state.data.directors)}</Text>
                        </View>
                        <View style={[styles.textContainer,{marginTop:5}]}>
                            <Text style={styles.titleTextStyle}>主演：</Text>
                            <Text style={styles.contentTextStyle}>{this._dealName(this.state.data.casts)}</Text>
                        </View>
                        <View style={[styles.textContainer,{marginTop:5}]}>
                            <Text style={styles.titleTextStyle}>类型：</Text>
                            <Text style={styles.contentTextStyle}>{this.state.data.genres.join('/')}</Text>
                        </View>
                        <View style={[styles.textContainer,{marginTop:5}]}>
                            <Text style={styles.titleTextStyle}>制片国家/地区：</Text>
                            <Text style={styles.contentTextStyle}>{this.state.data.countries.join('/')}</Text>
                        </View>
                        <View style={[styles.textContainer,{marginTop:5}]}>
                            <Text style={styles.titleTextStyle}>又名：</Text>
                            <Text style={styles.contentTextStyle}>{this.state.data.aka.join('/')}</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.midContainer}>
                    <ListRow title='剧情简介' detail={this.state.data.summary} titlePlace='top' topSeparator='full'/>

                </View>
            </View>
        )
    }

    _dealName(name){
        var names = []
        name.forEach(item =>{
            names.push(item.name)
        })
        return names.join('/')
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Color.white
    },
    topContainer:{
        flex:1,
        height:220,
        flexDirection:'row',
        paddingRight:20,
        paddingLeft:20,
        paddingBottom:10,
        paddingTop:10,
    },
    summarize:{
        marginLeft:10,
        flexDirection:'column',
        flex:1,
    },
    textContainer:{
        flexDirection:'row',
    },
    titleTextStyle:{
        fontSize:14,
        color:Color.blackTextColor
    },
    contentTextStyle:{
        color:Color.gray,
        fontSize:14,
    },
    midContainer:{
        flexDirection:'column',
    }
})