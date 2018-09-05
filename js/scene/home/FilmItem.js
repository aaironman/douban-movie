import React,{Component} from 'react';
import {View,StyleSheet,Text} from 'react-native';
import Color from "../../assets/Color";
import PLImage from '../common/PLImage'



export default class FilmItem extends Component{

    constructor(props){
        super(props)

    }


    render(){
        return (
            <View style={styles.container}>
                <PLImage style={ {width:'100%',
                    height:70}} uri={this.props.item.images['small']}/>
                <Text style={styles.title} numberOfLines={1}>{this.props.item.title}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Color.white,
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        fontSize:14,
        marginTop:5,
    },
})