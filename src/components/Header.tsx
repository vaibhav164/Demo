import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Header =()=>{
    return(
        <View style={styles.headerBox}>
            <Text style={styles.text}>{"Plantify"}</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    headerBox:{
        width:'100%',
        height:'10%',
        justifyContent:'center',
        backgroundColor:'red',
        alignItems:'center',
        flexDirection:'row'
    },
    text:{
        fontSize:20,
        fontWeight:'600'
    }

})