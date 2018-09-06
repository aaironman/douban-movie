import React,{Component} from 'react';
import {View,StyleSheet,Text,TouchableOpacity} from 'react-native';
import Color from "../../assets/Color";
import PLImage from '../common/PLImage'
import {Toast} from 'antd-mobile-rn'
import Details from "./Details";
import {withNavigation} from "react-navigation";



export class FilmItem extends Component{

    constructor(props){
        super(props)

    }


    render(){
        return (
            <TouchableOpacity style={styles.container} onPress={()=>{
                Toast.info(this.props.item.title,3)
                this.props.navigation.navigate('Details')
            }}>
                <PLImage style={{width:'100%',
                    height:70}} uri={this.props.item.images['small']}/>
                <Text style={styles.title} numberOfLines={1}>{this.props.item.title}</Text>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Color.white,
        alignItems:'center',
        justifyContent:'center',
        borderColor:Color.gray,
        borderLeftWidth:1,
        borderBottomWidth:1


    },
    title:{
        fontSize:14,
        marginTop:5,
    },
})

export default withNavigation(FilmItem)