import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import tw from 'twrnc';
import useGetTheme from '../Utility/Theme';
function Welcome() {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation: any = useNavigation();
  const {mainTheme} = useGetTheme();
  // todo navigate to home screen
  const handleNavigate = () => {
    navigation.navigate('dashboard');
  };

  return (
    <View style={tw`bg-[#0c0c0c] flex flex-col justify-between flex-1`}>
      <View style={tw`flex flex-1 gap-2`}>
        <View style={tw`w-full flex-1`}>
          <Image
            style={tw`w-full h-full`}
            source={require('../images/Banner-Coins.png')}
          />
        </View>
        <View style={tw` flex flex-col justify-center items-center`}>
          <Text
            style={tw`text-[40px] font-bold text-center leading-10 px-3 text-white`}>
            Always take control you finance
          </Text>
          <Text
            style={tw`text-center text-sm tracking-wide text-stone-400 px-5 py-4 capitalize`}>
            finances must be arranged to set a better lifestyle in the feature
          </Text>
        </View>
      </View>
      {/* //todo button */}
      <View style={tw`p-1`}>
        <TouchableOpacity
          onPress={handleNavigate}
          style={tw`${mainTheme?.primary} py-4 rounded-lg w-[90%] mx-auto`}>
          <Text style={tw`font-medium text-center text-sm tracking-wide`}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Welcome;
