import React, {useCallback} from 'react';
import {
  Button,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import tw from 'twrnc';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import StoreTransaction from '../../Store/StoreTransaction';
import {CategoryTypes} from '../../Store/Models/TransactionTypes';
import ReusableList from '../../Utility/ReusableList';
import Rupee from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
function Limiter() {
  const StoreCategoryData = StoreTransaction(state => state?.CategoryData);
  const navigation: any = useNavigation();
  const handleEditBudget = (items: any) => {
    navigation?.navigate('Set Budget', {items: items});
  };

  const renderItem = useCallback(
    (CategorysTypes: CategoryTypes) => (
      <TouchableOpacity
        onPress={() => handleEditBudget(CategorysTypes)}
        key={CategorysTypes?.id}
        style={tw`w-full flex flex-row items-center justify-between rounded shadow-md px-2 py-3 border-b border-stone-600/50`}>
        <View style={tw`flex flex-row items-center gap-2`}>
          <View style={tw`${CategorysTypes?.bgColor} rounded p-2`}>
            <MaterialIcon
              size={20}
              name={CategorysTypes?.icon}
              style={tw`text-white`}
            />
          </View>
          <Text
            style={tw`text-lg font-medium ${CategorysTypes?.color} capitalize tracking-wide`}>
            {CategorysTypes?.name}
          </Text>
        </View>
        <View style={tw`flex flex-row items-center gap-x-3`}>
          <View style={tw`flex flex-row items-center`}>
            <Rupee
              size={15}
              name="currency-rupee"
              style={tw`text-white font-medium `}
            />
            <Text style={tw`text-white font-medium `}>
              {CategorysTypes?.budget}
            </Text>
          </View>
          <MaterialIcon size={15} name="chevron-right" style={tw`text-white`} />
        </View>
      </TouchableOpacity>
    ),
    [],
  );
  return (
    <ScrollView style={tw` bg-[#0c0c0c] relative p-1`}>
      <View style={tw`flex-1`}>
        {/* //todo total spends */}
        <View style={tw`flex gap-1`}>
          <ReusableList data={StoreCategoryData} renderItem={renderItem} />
        </View>
      </View>
    </ScrollView>
  );
}

export default Limiter;
