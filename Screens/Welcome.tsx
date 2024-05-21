import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
  Button,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import tw from 'twrnc';
function Welcome() {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation: any = useNavigation();
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  // todo navigate to home screen
  const handleNavigate = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={tw`bg-white flex flex-col justify-between flex-1`}>
      <View style={tw`flex flex-1 gap-2`}>
        <View style={tw`w-full max-h-[450px]`}>
          <Image
            style={tw`w-full h-full`}
            source={require('../images/banner.png')}
          />
        </View>
        <View style={tw` flex-1 flex flex-col justify-center items-center`}>
          <Text style={tw`text-[40px] font-bold text-center leading-10 px-3`}>
            Always take control you finance
          </Text>
          <Text
            style={tw`text-center text-sm tracking-wide text-stone-500 px-5 py-4 capitalize`}>
            finances must be arranged to set a better lifestyle in the feature
          </Text>
        </View>
      </View>
      {/* //todo button */}
      <View>
        <TouchableOpacity
          onPress={handleNavigate}
          style={tw`bg-[#232323] py-4 rounded-lg w-[90%] mx-auto`}>
          <Text
            style={tw`text-white font-medium text-center text-sm tracking-wide`}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Welcome;
