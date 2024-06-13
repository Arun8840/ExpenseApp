import React from 'react';
import {ScrollView, View} from 'react-native';
import tw from 'twrnc';
import BudgetedList from '../../Components/BudgetedList';
import NotBudgetedList from '../../Components/NotBudgetedList';
function Limiter() {
  return (
    <ScrollView style={tw` bg-[#0c0c0c] relative p-1`}>
      <View style={tw`flex-1`}>
        {/* //todo budgeted list items */}
        <BudgetedList />

        {/* //todo not budgeted list items */}
        <NotBudgetedList />
      </View>
    </ScrollView>
  );
}

export default Limiter;
