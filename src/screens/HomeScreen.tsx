import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { productList } from '../constant';
import { Header } from '../components/Header';

export const HomeScreen = () => {
    const [isProductActive, setProductActive] = useState(true);
    const handleProductDetail =(val)=>{
        setProductActive(true)
    }
    const productCard=(item:any)=>{
        return(
            <TouchableOpacity onPress={()=>handleProductDetail(item.item)}>
            <View style={styles.card}>
                <Text style={{fontSize:40}}>{item.item.name}</Text>
                <Text>{item.item.category}</Text>
                <Text>{item.item.price}</Text>
                <Image height={30} width={30} source={{uri:`${item.item.image}`}}/>
            </View>
            </TouchableOpacity>
        )
    }
  return (
   <View style={styles.container}>
    <Header />
    {isProductActive ? 
    <View style={styles.listBox}>
    <FlatList 
        data={productList}
        renderItem={productCard}
    />
    </View>:
    <View style={{flex:1}}>
        <View  style={{width:'100%', height:'40%', position:'absolute', borderStartColor:'#56D1A7'}}/> 
            <Text onPress={()=>{setProductActive(false)}}>Back</Text>
    </View>
    }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading:{
    fontSize:20,
    fontWeight:'600'
  },
  listBox:{
    flex:1,
    // justifyContent:'center',
    // alignItems:'center',
    width:'100%',
    height:'100%'
  },
  card:{
    height:'50%',
    width:'100%',
    backgroundColor:'#56D1A7',
    borderRadius:10,
    marginHorizontal:'10%'
  }
});

