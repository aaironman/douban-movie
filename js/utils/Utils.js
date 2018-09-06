import {Platforms} from "./Platforms";
import Color from '../assets/Color'
import {navigate,goBack} from "./NavigationService";
import {
    StatusBar,
} from 'react-native'

export default class Utils{
    static generateNavTitleOptions(title) {
        if (Platforms.onAndroid) {
            return {
                title: title?title:'',
                headerBackTitle:null,
                headerTintColor: 'white',
                headerTitleStyle: {
                    fontSize: 17,
                    fontWeight: undefined,
                    textAlign: 'center',
                    alignSelf:'center',
                    flex:1,
                },
                headerStyle: {
                    backgroundColor: Color.primary,
                    paddingTop: StatusBar.currentHeight,
                    height: StatusBar.currentHeight+44,
                    elevation: 0,
                }

            }
        }
        return {
            title: title?title:'',
            headerBackTitle:null,
            headerTintColor: 'white',
            headerTitleStyle: {
                fontSize: 17,
                fontWeight: undefined
            },
            headerStyle: {
                backgroundColor: Color.primary,
            },
        }
    }

    static navigateTo(scene, params){
        navigate(scene, params)
    }

    static goBack(){
        goBack()
    }

}