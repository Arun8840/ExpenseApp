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
        <View style={tw`flex-1`}>
          <View style={tw`flex justify-between flex-row pb-2`}>
            <Text
              style={tw`text-[16px] font-medium tracking-wide text-stone-600`}>
              {lists?.title}
            </Text>
            <Icon
              style={tw`${
                lists?.paymentType === 'cash'
                  ? 'text-[#e4b938]'
                  : 'text-[#3cbd7e]'
              }`}
              name={lists?.paymentType}
              size={20}
            />
          </View>
          <View style={tw`flex justify-between flex-row pt-2`}>
            <Text
              style={tw`text-[12px] font-medium tracking-wide text-stone-400`}>
              {lists?.date}
            </Text>
            <Text
              style={tw`text-[12px] font-semibold tracking-wide text-red-500`}>
              ${lists?.totalAmount}
            </Text>
          </View>
        </View>
        <Icon name="chevron-forward" style={tw`text-stone-400`} />
      </View>
    </TouchableOpacity>
  );
}

export default ListItems;
