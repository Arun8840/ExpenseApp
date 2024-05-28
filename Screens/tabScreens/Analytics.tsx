import React, {useCallback} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
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
        key={CategorysTypes?.id}
        style={tw`min-w-[170px] h-[100px] mx-auto rounded-lg shadow-md p-2 ${CategorysTypes?.bgColor}`}
        onPress={() => handleRedirect(CategorysTypes?.name)}>
        <View style={tw` flex flex-row items-center`}>
          <View
            style={tw`flex justify-center items-center h-[30px] w-[30px] rounded-lg`}>
            <MaterialIcon
              name={CategorysTypes?.icon}
              style={tw`text-lg ${CategorysTypes?.color}`}
            />
          </View>
          <Text style={tw`flex-1 text-white text-sm font-bold`}>
            {CategorysTypes?.name}
          </Text>
        </View>

        <View style={tw`flex-1 flex justify-center items-center`}>
          <Text
            style={tw`text-[30px] text-center text-white font-bold px-2 py-3`}>
            {CategorysTypes?.useage}
          </Text>
        </View>
      </TouchableOpacity>
    ),
    [],
  );
  return (
    <ScrollView style={tw` bg-[#0c0c0c] relative p-5`}>
      <View style={tw`flex-1`}>
        {/* //todo total spends */}
        <View style={tw`flex flex-row flex-wrap gap-3`}>
          <ReusableList data={StoreCategoryData} renderItem={renderItem} />
        </View>

        <TouchableOpacity
          onPress={handleDirect}
          style={tw`${mainTheme?.primary} absolute -bottom-10 right-7 rounded p-2`}>
          <Icon name="add" size={30} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default Analytics;
