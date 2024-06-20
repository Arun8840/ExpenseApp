import React, {useCallback} from 'react';
import {
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import tw from 'twrnc';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import StoreTransaction from '../../Store/StoreTransaction';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import useGetTheme from '../../Utility/Theme';
import {CategoryTypes} from '../../Store/Models/TransactionTypes';
import ReusableList from '../../Utility/ReusableList';

function Analytics() {
  const StoreCategoryData = StoreTransaction(state => state?.CategoryData);
  const navigation: any = useNavigation();
  const {mainTheme} = useGetTheme();

  const handleRedirect = (type: any) => {
    navigation?.navigate('Transactions', type);
  };

  // todo navigate add new category page
  const handleDirect = () => {
    navigation?.navigate('Create Category');
  };

  const renderItem = useCallback(
    (CategorysTypes: CategoryTypes) => (
      <TouchableOpacity
        onPress={() => handleRedirect(CategorysTypes?.name)}
        key={CategorysTypes?.id}
        style={tw`w-full flex flex-row items-center justify-between rounded shadow-md py-3 border-b border-stone-600/50`}>
        <View style={tw`flex flex-row items-center gap-2`}>
          <View style={tw`${CategorysTypes?.bgColor} rounded p-2 relative`}>
            <MaterialIcon
              size={20}
              name={CategorysTypes?.icon}
              style={tw`text-white`}
            />
            {/* //todo badge */}
            {CategorysTypes?.useage !== 0 && (
              <View
                style={tw`absolute -right-1 -top-2 w-[20px] h-[20px] bg-red-500 rounded-full flex justify-center items-center`}>
                <Text style={tw`text-white`}>{CategorysTypes?.useage}</Text>
              </View>
            )}
          </View>
          <Text
            style={tw`text-lg font-medium ${CategorysTypes?.color} capitalize tracking-wide`}>
            {CategorysTypes?.name}
          </Text>
        </View>

        <MaterialIcon
          name="chevron-right"
          style={tw`text-white px-3 text-lg`}
        />
      </TouchableOpacity>
    ),
    [],
  );
  return (
    <View style={tw`bg-[#0c0c0c] flex-1 p-2`}>
      {/* //todo list items */}
      <ScrollView style={tw`flex-1  relative`}>
        <ReusableList data={StoreCategoryData} renderItem={renderItem} />
      </ScrollView>
      {/* //todo new category add button */}
      <TouchableOpacity
        onPress={handleDirect}
        style={tw`${mainTheme?.primary} absolute bottom-10 right-8 rounded-full p-3`}>
        <Icon name="add" size={30} />
      </TouchableOpacity>
    </View>
  );
}

export default Analytics;
