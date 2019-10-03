import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    restaurantHeading : {
        color: '#45AEFC',
        textDecorationLine: "underline line-through",
        textDecorationColor:'red',
        fontSize:30,
        fontWeight:"bold",
        height:100
    },
    email:{
        width:300,
        fontSize:20,
        color:'#45AEFC',
        borderBottomWidth:3,
        borderBottomColor:'#45AEFC'
    },
    forgotPassword:{
        color:'#631F1F',
        fontSize:20,
        fontWeight:'bold',
        height:100
    },
    signInButton:{
        // backgroundColor:'#84BCE5',
        // color:'white',
        // borderRadius:10,
        width:'50%',
        height:100
    }
})

export default styles;