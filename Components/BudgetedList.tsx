import React, {useCallback} from 'react';
import {Pressable, Text, View} from 'react-native';
import ReusableList from '../Utility/ReusableList';
import tw from 'twrnc';
import {CategoryTypes} from '../Store/Models/TransactionTypes';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import StoreTransaction from '../Store/StoreTransaction';
import {useNavigation} from '@react-navigation/native';
import Rupee from 'react-native-vector-icons/MaterialIcons';
import useGetTheme from '../Utility/Theme';

function BudgetedList() {
  const {colormain} = useGetTheme();
  const StoreCategoryData = StoreTransaction(state => state?.CategoryData);
  const navigation: any = useNavigation();
  const handleEditBudget = (items: any) => {
    navigation?.navigate('Set Budget', {items: items, pageString: 'Budgeted'});
  };

  const renderItem = useCallback((CategorysTypes: CategoryTypes) => {
    let totalAmount: any =
      CategorysTypes?.totalAmount?.length > 0 &&
      CategorysTypes?.totalAmount?.reduce((acc, curr) => acc + curr);
    const percentage: any =
      (totalAmount / CategorysTypes?.budget?.amount) * 100;
    let totalPercentage = Math.round(percentage) ?? 0;
    // todo is exeed the limiter amount
    let isExcedAmount = totalAmount > CategorysTypes?.budget?.amount;
    let progresStyle: any = {
      backgroundColor: isExcedAmount ? 'red' : colormain,
      padding: 3,
      borderRadius: 100,
      width: totalPercentage + '%',
    };
    return (
      CategorysTypes?.budget?.isBudgeted && (
        <>
          <View
            key={CategorysTypes?.id}
            style={tw`w-full  shadow-md px-2 py-3 border-b border-stone-600/50`}>
            <View
              style={tw`flex flex-row items-center justify-between rounded`}>
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
                <Rupee name="edit" style={tw`text-white`} />
                <Text style={tw`text-white`}>Edit</Text>
              </Pressable>
            </View>

            {/* //todo limit and expense header */}
            <View style={tw`flex flex-row items-center justify-between`}>
              <View style={tw`flex flex-row items-center pt-2`}>
                <Text style={tw`text-white  font-medium text-sm tracking-wide`}>
                  Expense:
                </Text>
                <>
                  <Rupee
                    size={15}
                    name="currency-rupee"
                    style={tw`text-white font-medium`}
                  />
                  <Text
                    style={tw`text-white font-medium text-sm tracking-wide`}>
                    {totalAmount ?? 0}
                  </Text>
                </>
              </View>
              <View style={tw`flex flex-row items-center pt-2`}>
                <Text style={tw`text-white  font-medium text-sm tracking-wide`}>
                  Limit:
                </Text>
                <Rupee
                  size={15}
                  name="currency-rupee"
                  style={tw`text-white font-medium`}
                />
                <Text style={tw`text-white font-medium text-sm tracking-wide`}>
                  {' '}
                  {CategorysTypes?.budget?.amount}
                </Text>
              </View>
            </View>
            {/* //todo progresbar */}
            <View
              style={tw`bg-stone-600/30 rounded-full mt-2 w-full overflow-hidden`}>
              <View style={progresStyle}></View>
            </View>
            <Text
              style={tw`text-right p-1 font-medium tracking-wide text-sm ${
                isExcedAmount ? 'text-red-500' : 'text-white'
              }`}>
              {isExcedAmount ? 'Amount Exceded' : totalPercentage + '%'}
            </Text>
          </View>
        </>
      )
    );
  }, []);
  let isBudgetedListThere = StoreCategoryData?.some(
    allItems => allItems?.budget?.isBudgeted === true,
  );
  return (
    <>
      {isBudgetedListThere && (
        <View style={tw`p-2`}>
          <Text style={tw`text-white font-medium text-sm tracking-wide`}>
            Budgeted categories
          </Text>
        </View>
      )}
      <View>
        <ReusableList data={StoreCategoryData} renderItem={renderItem} />
      </View>
    </>
  );
}

export default BudgetedList;
