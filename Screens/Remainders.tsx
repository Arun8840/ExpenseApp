import React, {useCallback} from 'react';
import {Alert, ScrollView, Text, View} from 'react-native';
import StoreTransaction from '../Store/StoreTransaction';
import ReusableList from '../Utility/ReusableList';
import tw from 'twrnc';
import {RemainderTypes} from '../Store/Models/TransactionTypes';
import {TouchableOpacity} from 'react-native-gesture-handler';
import useGetTheme from '../Utility/Theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
function Remainders() {
  const navigation: any = useNavigation();
  const remainderItems = StoreTransaction(state => state?.remainders);
  const DeleteRemainder = StoreTransaction(state => state?.RemoveRemainder);
  const {mainTheme} = useGetTheme();

  const handleDeleteRemainder = (val: RemainderTypes) => {
    Alert.alert(
      'Confirm Action',
      `Are you sure you want to delete ${val?.category} ?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            DeleteRemainder(val?.id);
          },
        },
      ],
      {cancelable: false},
    );
  };
  const renderItems = useCallback(
    (items: RemainderTypes) => {
      return (
        <View style={tw`bg-stone-900 p-2 rounded-lg`}>
          <View style={tw`flex flex-row justify-between items-center`}>
            <Text
              style={tw`text-white p-1 text-xl font-semibold tracking-wide`}>
              {items?.category}
            </Text>
            <Text
              style={tw`text-white p-1 text-sm tracking-wide text-stone-400`}>
              {items?.date}
            </Text>
          </View>
          <Text style={tw`text-white p-1 text-sm tracking-wide text-stone-400`}>
            {items?.notes}
          </Text>
          <Text style={tw`text-white p-1 text-sm tracking-wide text-stone-400`}>
            Rupees:{items?.amount}
          </Text>
          <Text style={tw`text-white p-1 text-sm tracking-wide text-stone-400`}>
            Description : {items?.description}
          </Text>
          <View style={tw`flex flex-row justify-end`}>
            <TouchableOpacity
              onPress={() => handleDeleteRemainder(items)}
              style={tw`bg-red-500 p-2 rounded-lg`}>
              <Icon name="delete" size={20} style={tw`text-white`} />
            </TouchableOpacity>
          </View>
        </View>
      );
    },
    [remainderItems],
  );

  const handleDirect = () => {
    navigation.navigate('Set Remainder');
  };
  return (
    <View style={tw`bg-[#0C0C0C] flex-1 p-1`}>
      <ScrollView showsVerticalScrollIndicator>
        <View style={tw` flex flex-col gap-2`}>
          <ReusableList data={remainderItems} renderItem={renderItems} />
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={handleDirect}
        style={tw`${mainTheme?.primary} rounded-xl w-[90%] mx-auto p-3`}>
        <Text style={tw`text-center text-lg font-semibold tracking-wide`}>
          Set Remainder
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Remainders;
