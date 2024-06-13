import React, {useCallback} from 'react';
import {Pressable, Text, View} from 'react-native';
import ReusableList from '../Utility/ReusableList';
import tw from 'twrnc';
import {TouchableOpacity} from 'react-native';
import {CategoryTypes} from '../Store/Models/TransactionTypes';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import StoreTransaction from '../Store/StoreTransaction';
import {useNavigation} from '@react-navigation/native';
import Rupee from 'react-native-vector-icons/MaterialIcons';

function NotBudgetedList() {
  const StoreCategoryData = StoreTransaction(state => state?.CategoryData);
  const navigation: any = useNavigation();
  const handleEditBudget = (items: any) => {
    navigation?.navigate('Set Budget', {
      items: items,
      pageString: 'Not_Budgeted',
    });
  };

  const renderItem = useCallback(
    (CategorysTypes: CategoryTypes) =>
      !CategorysTypes?.budget?.isBudgeted && (
        <View
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
          <Pressable
            onPress={() => handleEditBudget(CategorysTypes)}
            style={tw`rounded p-2 bg-stone-800 flex flex-row items-center gap-2`}>
            <Text style={tw`text-white uppercase`}>Set Budget</Text>
          </Pressable>
        </View>
      ),
    [],
  );
  return (
    <>
      <View style={tw`p-2`}>
        <Text style={tw`text-white font-medium text-sm tracking-wide`}>
          Not Budgeted categories
        </Text>
      </View>
      <View style={tw`flex gap-1`}>
        <ReusableList data={StoreCategoryData} renderItem={renderItem} />
      </View>
    </>
  );
}

export default NotBudgetedList;
