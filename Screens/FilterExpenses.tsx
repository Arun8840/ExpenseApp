import {useRoute} from '@react-navigation/native';
import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import tw from 'twrnc';
import StoreTransaction from '../Store/StoreTransaction';
import ListItems from '../Components/ListItems';
import useGetTheme from '../Utility/Theme';
function FilterExpenses() {
  const route = useRoute();
  const type: any = route?.params;
  const {mainTheme} = useGetTheme();
  const allTransactions = StoreTransaction(state => state?.transactions);

  let filteredData = allTransactions?.filter(
    allValues => allValues?.expenseCategory === type,
  );
  let amount = filteredData?.map(values => values?.totalAmount);

  let totalAmount = amount?.reduce((acc, curr) => acc + curr);
  return (
    <View style={tw`bg-[#0c0c0c] flex-1 relative`}>
      {filteredData && filteredData?.length > 0 ? (
        <>
          <ScrollView style={tw`bg-[#0c0c0c] max-h-[650px]`}>
            <View style={tw`flex-1`}>
              {filteredData?.length > 0 &&
                filteredData?.map((items, index) => {
                  return (
                    <ListItems lists={items} key={items?.id} index={index} />
                  );
                })}
            </View>
          </ScrollView>
          <View style={tw`flex flex-row px-5 justify-between items-center`}>
            <Text style={tw`${mainTheme?.textPrimary} font-semibold text-xl`}>
              Total
            </Text>
            <Text style={tw`${mainTheme?.textPrimary} font-semibold text-lg`}>
              {totalAmount}
            </Text>
          </View>
        </>
      ) : (
        <View style={tw`flex-1 bg-[#0c0c0c] flex justify-center items-center`}>
          <Text style={tw`text-white text-sm tracking-wide`}>
            No Data Found !!
          </Text>
        </View>
      )}
    </View>
  );
}

export default FilterExpenses;
