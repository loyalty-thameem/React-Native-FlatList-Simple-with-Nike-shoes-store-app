import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { images, icons, COLORS, FONTS, SIZES } from '../constants';
const Home = () => {
  // Dummy Data
  const [trending, setTrending] = React.useState([
    {
      id: 0,
      name: 'Nike Air Zoom Pegasus 36',
      img: images.nikePegasus36,
      bgColor: '#BF012C',
      type: 'RUNNING',
      price: '$186',
      sizes: [6, 7, 8, 9, 10],
    },
    {
      id: 1,
      name: 'Nike Metcon 5',
      img: images.nikeMetcon5Black,
      bgColor: '#D39C67',
      type: 'TRAINING',
      price: '$135',
      sizes: [6, 7, 8, 9, 10, 11, 12],
    },
    {
      id: 2,
      name: 'Nike Air Zoom Kobe 1 Proto',
      img: images.nikeZoomKobe1Proto,
      bgColor: '#7052A0',
      type: 'BASKETBALL',
      price: '$199',
      sizes: [6, 7, 8, 9],
    },
  ]);
  // Render
  function renderTrendingShoes(item,index ) {
    return (
      <View>
        <Text>{item.type}</Text>
      </View>
    );
  }
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Text
        style={{
          marginTop: SIZES.radius,
          marginHorizontal: SIZES.padding,
          ...FONTS.largeTitleBold,
        }}>
        TRENDING
      </Text>
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={trending}
          renderItem={({item,index})=>renderTrendingShoes(item,index)}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
};
export default Home;
