import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import tw from 'twrnc';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
interface PropsTypes {
  index: number;
  lists: any;
}
function ListItems({lists, index}: PropsTypes) {
  const navigation: any = useNavigation();
  // todo redirect to details page
  const handleRedirect = () => {
    navigation.navigate('Transaction Details', {paramValue: lists});
  };
  return (
    <TouchableOpacity onPress={handleRedirect}>
      <View
        key={index}
        style={tw`border-b p-2 bg-white border-gray-100 rounded flex flex-row items-center gap-4`}>
        <View style={tw`rounded-full bg-stone-100 p-4`}>
          <MaterialIcon name={lists?.icon} size={20} />
        </View>
        <View style={tw`flex-1 flex flex-row justify-between items-center`}>
          <View style={tw``}>
            <Text
              style={tw`text-[17px] font-semibold tracking-wide text-stone-600`}>
              {lists?.title}
            </Text>
            <Text style={tw`text-sm tracking-wide font-medium text-stone-600`}>
              {lists?.date}
            </Text>
          </View>
          <Text style={tw`text-red-500 text-sm font-semibold`}>
            ${lists?.totalAmount}
          </Text>
        </View>
        <Icon name="chevron-forward" style={tw`text-stone-400`} />
      </View>
    </TouchableOpacity>
  );
}

export default ListItems;
