import React, {useState} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/MaterialIcons';
import StoreTransaction from '../Store/StoreTransaction';
import {ThemeTypes} from '../Utility/Theme';
function Account() {
  const [selectedTheme, setSelectTheme] = useState<any>(null);
  const ThemeData = StoreTransaction(state => state?.allTheme);
  const setTheme = StoreTransaction(state => state?.setTheme);
  const handleSelectTheme = (selected_theme: ThemeTypes) => {
    setSelectTheme(selected_theme?.id);
    setTheme(selected_theme);
  };
  return (
    <ScrollView style={tw`p-3 bg-[#0C0C0C]`}>
      <View
        style={tw`rounded-full w-[100px] h-[100px] mx-auto bg-[#f9f9f9] overflow-hidden`}>
        <Image
          source={require('../images/profile.png')}
          style={tw`w-full h-full`}
        />
      </View>
      <Text
        style={tw`text-white text-xl text-center py-3 font-bold tracking-wide`}>
        Arun Prakash
      </Text>
      <View style={tw`pt-5`}>
        <Text style={tw`text-white py-3`}>Name</Text>
        <TextInput
          style={tw`text-sm rounded-lg font-medium px-2 py-3 bg-transparent border border-stone-800 tracking-[1px] text-white`}
          placeholder="Enter text"
          value="Arun Prakash"
        />
        <Text style={tw`text-white py-3`}>Email</Text>
        <TextInput
          style={tw`text-sm rounded-lg font-medium  px-2 py-3 bg-transparent border border-stone-800 tracking-[1px] text-white`}
          placeholder="Enter text"
          value="test@gmail.com"
        />
        <Text style={tw`text-white py-3`}>Phone Number</Text>
        <TextInput
          style={tw`text-sm rounded-lg font-medium  px-2 py-3 bg-transparent border border-stone-800 tracking-[3px] text-white`}
          placeholder="Enter text"
          value="6381941148"
        />
        <Text style={tw`py-5 text-white`}>Customize Theme</Text>
        <View style={tw` flex flex-row flex-wrap gap-2`}>
          {ThemeData?.map(themes => {
            return (
              <Pressable
                onPress={() => handleSelectTheme(themes)}
                key={themes?.id}
                style={tw`${
                  themes?.color
                } min-w-[40px] min-h-[40px] rounded-full
                 ${
                   themes && themes?.id === selectedTheme
                     ? 'border-[3px] border-green-500'
                     : ''
                 }`}></Pressable>
            );
          })}
          <TouchableOpacity
            style={tw`min-w-[40px] min-h-[40px] rounded-full bg-[#DCFFB7] flex items-center justify-center`}>
            <Icon name="add" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default Account;
