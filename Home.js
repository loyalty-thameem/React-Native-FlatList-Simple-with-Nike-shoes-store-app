import React from 'react';
import { View, Text, Image, TouchableOpacity,FlatList } from 'react-native';
import {COLORS,FONTS,SIZES,icons,images} from '../constants'; 

// dummyData created
const dummyData =[
  {
    id:1,bgColor:'blue',image:images.nikeMetcon3,size:[7,8,9,10,11,12]
  }, {
    id:12,bgColor:'yellow',image:images.nikeMetcon4,size:[7,8,9,10,11,12]
  }, {
    id:13,bgColor:'green',image:images.nikeMetcon5Black,size:[7,8,9,10,11,12]
  }, {
    id:14,bgColor:'gray',image:images.nikeMetcon5Purple,size:[7,8,9,10,11,12]
  }
]

// this function component inside the RECEIVE PROPS value with title
const Item = ({ title }) => (
   <View style={{marginHorizontal:20,marginTop:40}}>
         <Text style={{fontFamily:'arial',fontSize:22}}>My color {title}</Text>
    </View>
);
const Home=()=>{
  //  renderItem inside function component to passing the title PROP with DATA Pass
    const renderItem=({item})=>(
       <Item title={item.bgColor} />
    )
  return(
    <View style={{flex:1,backgroundColor:'red'}}>
    <View style={{marginHorizontal:20,marginTop:10}}>
         <Text style={{fontFamily:'arial',fontSize:22}}>Hello World</Text>
    </View>
    <FlatList 
            data={dummyData}
            renderItem={renderItem}
             keyExtractor={item => item.id}
    />    
    </View>
  )
}
export default Home;
