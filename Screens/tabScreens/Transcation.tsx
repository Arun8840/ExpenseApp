import React, {useCallback} from 'react';
import {
  Button,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import tw from 'twrnc';
import ListItems from '../../Components/ListItems';
import {useNavigation} from '@react-navigation/native';
import StoreTransaction from '../../Store/StoreTransaction';
import useGetTheme from '../../Utility/Theme';
import {CategoryTypes} from '../../Store/Models/TransactionTypes';
import ReusableList from '../../Utility/ReusableList';
import Cards from '../../Components/Cards';
function Transaction() {
  // todo store data
  const transactionList = StoreTransaction(state => state?.transactions);
  const categoryList = StoreTransaction(state => state?.CategoryData);
  const cardData = StoreTransaction(state => state?.CardData);
  const navigation: any = useNavigation();
  const handleRedirect = () => {
    navigation.navigate('Settings');
  };

  const handleRedirect_Category = (type: any) => {
    navigation?.navigate('Transactions', type);
  };
  const {mainTheme} = useGetTheme();

  let isValid_showCreateButton = transactionList?.length === 0;

  const renderItem = useCallback(
    (CategorysTypes: CategoryTypes) => (
      <TouchableOpacity
        onPress={() => handleRedirect_Category(CategorysTypes?.name)}
        key={CategorysTypes?.id}
        style={tw`min-w-[140px] h-[100px] mx-auto rounded-lg shadow-md p-1 ${CategorysTypes?.bgColor}`}>
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

  // todo enabled Card data
  const EnabledCard: any = cardData?.find(
    allItems => allItems?.isSelected === true,
  );
  return (
    <>
      <ScrollView alwaysBounceVertical style={tw`bg-[#0C0C0C]`}>
        {/* //todo top header */}
        <View style={tw`flex flex-row items-center justify-between px-3 py-5 `}>
          <Text style={tw`text-center   ${mainTheme?.textPrimary}`}>
            Friday, 12 May
          </Text>
          <TouchableOpacity
            onPress={handleRedirect}
            style={tw`rounded-full w-[40px] h-[40px] overflow-hidden`}>
            <Image
              source={require('../../images/profile.png')}
              style={tw`w-full h-full rounded-full`}
            />
          </TouchableOpacity>
        </View>

        {/* //todo card */}
        <View style={tw` px-1 py-1 border flex-1`}>
          <Cards
            showBalance={{
              show: true,
              value: 0,
            }}
            accounts={EnabledCard}
          />
        </View>

        <Text style={tw`text-lg font-medium tracking-wide  text-white p-2`}>
          Categories
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={tw`flex flex-row gap-2 pl-2`}>
            <ReusableList data={categoryList} renderItem={renderItem} />
          </View>
        </ScrollView>

        {/* //todo header and create button */}
        <View style={tw`flex flex-row justify-between items-center py-3 px-3 `}>
          <Text style={tw`text-lg font-medium tracking-wide  text-white`}>
            Recent Transaction
          </Text>
          {!isValid_showCreateButton && (
            <TouchableOpacity
              onPress={() => navigation.navigate('Create Transaction')}
              style={tw`py-2 px-2 rounded ${mainTheme?.primary} flex flex-row items-center gap-2`}>
              <Text>Add</Text>
              <Icon name="add" size={20} />
            </TouchableOpacity>
          )}
        </View>
        {/* //todo lists */}
        <View style={tw`px-2`}>
          {transactionList?.length > 0 ? (
            transactionList?.map((lists, index) => {
              return <ListItems key={index} lists={lists} index={index} />;
            })
          ) : (
            <View style={tw`flex-1 flex justify-center items-center`}>
              <Text style={tw`text-gray-500 p-2 text-xs tracking-wide`}>
                No Transaction Found
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Create Transaction')}
                style={tw`py-2 px-10 rounded ${mainTheme?.primary} flex flex-row items-center gap-2`}>
                <Text>Create</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
    </>
  );
}

export default Transaction;
