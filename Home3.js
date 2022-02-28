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
  function renderTrendingShoes(item, index) {
  // First index ooda marginLeft ah size pannum. 
    var trendingStyle = {};

    if (index === 0) {
      trendingStyle = {
        marginLeft: SIZES.padding,
      };
    }
    return (
      // TouchableOpacityla height and width use pannittu ithu ulla FLEX use panni full view eduthukkalaam
      /* Intha Viewla Flex use panni TouchableOpacity ooda h and w full ah edukka mudiyum ex:FLEX*/
      <TouchableOpacity
        style={{
          height: 240,
          width: 180,
          marginHorizontal: SIZES.base,
          justifyContent: 'center',...trendingStyle
          // trendingStyle margin left ah change panniduchi
        }}>
        <Text style={{ color: COLORS.gray, ...FONTS.h5 }}>{item.type}</Text>

        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            marginTop: SIZES.base,
            borderRadius: 10,
            marginRight: SIZES.padding,
            paddingLeft: SIZES.radius,
            paddingRight: SIZES.padding,
            paddingBottom: SIZES.radius,
            backgroundColor: item.bgColor,
          }}>
          <View
            style={{
              height: '35%',
              justifyContent: 'space-between',
            }}>
            <Text style={{ color: COLORS.white, ...FONTS.body4 }}>
              {item.name}
            </Text>
            <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
              {item.price}
            </Text>
          </View>
        </View>
        <Image
          source={item.img}
          resizeMode="cover"
          style={{
            position: 'absolute',
            top: 50,
            right: 0,
            width: '98%',
            height: 80,
            transform: [{ rotate: '-15deg' }],
          }}
        />
      </TouchableOpacity>
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
          renderItem={({ item, index }) => renderTrendingShoes(item, index)}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};
export default Home;
