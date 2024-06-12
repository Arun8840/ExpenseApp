import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import tw from 'twrnc';
import useGetTheme from '../Utility/Theme';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

function BudgetEdit() {
  const route = useRoute();
  const {items}: any = route?.params;
  const {mainTheme} = useGetTheme();
  const navigation = useNavigation();
  return (
    <View style={tw`flex-1 p-2 bg-[#0c0c0c] flex flex-col gap-2`}>
      <Text
        style={tw`text-center font-medium text-sm tracking-wide p-3 ${mainTheme?.textPrimary}`}>
        Friday,15 jul
      </Text>
      <View style={tw`p-1 flex flex-row gap-2`}>
        <View
          style={tw`rounded w-[80px] h-[80px] flex items-center justify-center ${items?.bgColor}`}>
          <MaterialIcon name={items?.icon} size={30} style={tw`text-white`} />
        </View>
        <Text style={tw`text-white text-lg`}>{items?.name}</Text>
      </View>
      <TextInput
        keyboardType="numeric"
        placeholder="0"
        placeholderTextColor={'white'}
        style={tw`border border-stone-600 p-3 rounded`}
      />
      <View style={tw`p-2 flex flex-row justify-end gap-2`}>
        <Pressable
          onPress={() => navigation?.goBack()}
          style={tw`bg-gray-500/20 px-10 py-2 rounded`}>
          <Text style={tw`text-white`}>Cancel</Text>
        </Pressable>
        <Pressable style={tw`px-10 py-2 rounded ${mainTheme?.primary}`}>
          <Text>Save</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default BudgetEdit;
