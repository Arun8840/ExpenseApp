import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import tw from 'twrnc';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import useGetTheme from '../Utility/Theme';
import {Swipeable} from 'react-native-gesture-handler';
import StoreTransaction from '../Store/StoreTransaction';
interface PropsTypes {
  index: number;
  lists: any;
}
function ListItems({lists, index}: PropsTypes) {
  const navigation: any = useNavigation();
  const deleteItem = StoreTransaction(state => state?.delete_Transaction);
  // todo redirect to details page
  const handleRedirect = () => {
    navigation.navigate('Transaction Details', {paramValue: lists});
  };
  const {mainTheme} = useGetTheme();
  const handleDelete = () => {
    deleteItem(lists);
  };
  const renderRightActions = () => (
    <TouchableOpacity
      style={tw`bg-red-500 px-6 flex justify-center items-center`}
      onPress={handleDelete}>
      <MaterialIcon name="delete" style={tw`text-white text-2xl`} />
    </TouchableOpacity>
  );
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableOpacity onPress={handleRedirect}>
        <View
          key={index}
          style={tw` p-2 border-b border-stone-800 rounded flex flex-row items-center gap-4`}>
          <View style={tw`rounded-full p-4 ${mainTheme?.primary}`}>
            <MaterialIcon
              name={lists?.icon}
              style={tw`text-[#0c0c0c]`}
              size={20}
            />
          </View>
          <View style={tw`flex-1 flex flex-row justify-between items-center`}>
            <View style={tw``}>
              <Text
                style={tw`text-[17px] font-semibold tracking-wide text-white`}>
                {lists?.title}
              </Text>
              <Text style={tw`text-sm tracking-wide font-medium text-white`}>
                {lists?.date}
              </Text>
            </View>
            <Text style={tw`text-[#FF6868] text-sm font-semibold`}>
              -${lists?.totalAmount}
            </Text>
          </View>
          <Icon name="chevron-forward" style={tw`text-[#DCFFB7]`} />
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
}

export default ListItems;
