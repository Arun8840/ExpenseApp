import React, {useCallback, useState} from 'react';
import useGetTheme from '../Utility/Theme';
import {Switch, Text, View} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import tw from 'twrnc';
import {CardTypes} from '../Store/Models/TransactionTypes';
import StoreTransaction from '../Store/StoreTransaction';
interface propsTypes {
  accounts: CardTypes;
  showEnableButton?: boolean;
  showBalance?: {
    show?: boolean;
    value: number;
  };
}
function Cards({
  accounts,
  showEnableButton = false,
  showBalance = {show: false, value: 0},
}: propsTypes) {
  const EnableCard = StoreTransaction(state => state?.enableCard);
  const {mainTheme, colormain} = useGetTheme();
  //   todo handle enable card
  const handleEnable = useCallback(() => {
    // setEnable(!isEnabled);
    let updatedData = {...accounts, isSelected: !accounts?.isSelected};
    EnableCard(updatedData);
  }, [accounts]);

  return (
    <View
      key={accounts?.id}
      style={tw`${mainTheme?.primary} flex  flex-1  rounded-xl p-3 mb-1 shadow shadow-white min-h-[100px]`}>
      <View style={tw`flex flex-row justify-between items-center`}>
        <MaterialIcon
          name="integrated-circuit-chip"
          style={tw`text-black`}
          size={30}
        />
        <Text style={tw` font-bold italic pr-2`}>{accounts?.accountType}</Text>
      </View>
      <Text style={tw` font-semibold tracking-[5px]  py-10`}>
        {accounts?.accountNo}****
      </Text>

      <View style={tw`flex-row justify-between`}>
        <View style={tw`${showBalance?.show ? '' : 'flex-1'}`}>
          <Text style={tw` py-1 uppercase tracking-wide text-sm font-semibold`}>
            {accounts?.holderName}
          </Text>
          <View style={tw`flex-row justify-between items-center`}>
            <Text style={tw`tracking-wide text-sm font-semibold`}>
              <MaterialIcon name="currency-rupee" /> {accounts?.amount}
            </Text>
            {showEnableButton && (
              <Switch
                trackColor={{false: '#767577', true: '#0c0c0c'}}
                thumbColor={accounts?.isSelected ? colormain : '#FFFFFF'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={handleEnable}
                value={accounts?.isSelected}
              />
            )}
          </View>
        </View>
        {showBalance?.show && (
          <View>
            <Text
              style={tw` py-1 uppercase tracking-wide text-sm font-semibold`}>
              Balance
            </Text>
            <Text style={tw`tracking-wide text-sm font-semibold`}>
              <MaterialIcon name="currency-rupee" /> {showBalance?.value}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}

export default Cards;
