import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import tw from 'twrnc';
function SplashScreen() {
  const navigation: any = useNavigation();
  // todo navigate to home screen
  const handleNavigate = () => {
    navigation.navigate('welcome');
  };

  useEffect(() => {
    setTimeout(() => {
      handleNavigate();
    }, 2000);
  }, []);
  return (
    <View style={tw`bg-[#0c0c0c] flex justify-center items-center flex-1`}>
      <Image
        style={{
          resizeMode: 'cover',
          height: 150,
          width: 150,
        }}
        source={require('../images/SplashImage.png')}
      />
    </View>
  );
}

export default SplashScreen;
