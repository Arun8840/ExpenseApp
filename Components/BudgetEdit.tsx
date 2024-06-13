import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import tw from 'twrnc';
import useGetTheme from '../Utility/Theme';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import StoreTransaction from '../Store/StoreTransaction';
import {Controller, useForm} from 'react-hook-form';

interface FormTypes {
  amount: number;
}
function BudgetEdit() {
  const route = useRoute();
  const {items, pageString}: any = route?.params;
  const handleAddBudget = StoreTransaction(state => state?.set_Budget);
  const handleUpdateBudget = StoreTransaction(state => state?.update_Budget);
  const {mainTheme} = useGetTheme();
  const navigation = useNavigation();

  // form state
  const {
    control,
    formState: {errors},
    handleSubmit,
  } = useForm<FormTypes>({
    defaultValues: {
      amount: items?.budget?.amount,
    },
  });

  const hadleSaveData = (data: FormTypes) => {
    if (data) {
      let budgetData = {
        ...items,
        budget: {
          isBudgeted: true,
          amount: data?.amount,
        },
      };
      handleAddBudget(budgetData);
      navigation?.goBack();
    }
  };
  return (
    <View style={tw`flex-1 p-2 bg-[#0c0c0c] flex flex-col gap-2`}>
      <Text
        style={tw`text-center font-medium text-sm tracking-wide p-3 ${mainTheme?.textPrimary}`}>
        Friday,15 jul
      </Text>
      <View style={tw`p-1 flex flex-row gap-2`}>
        <View
          style={tw`rounded w-[80px] h-[80px] flex items-center justify-center ${items?.bgColor}`}>
          <MaterialIcon name={items?.icon} size={30} style={tw`text-white`} />
        </View>
        <Text style={tw`text-white text-lg`}>{items?.name}</Text>
      </View>

      <Controller
        control={control}
        rules={{
          required: 'Budget limit amount is required !!',
          validate: value => value !== 0 || 'Amount cannot be 0',
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder={errors?.amount?.message ?? 'Enter Limit Amount'}
            placeholderTextColor={
              errors?.amount?.type || errors?.amount?.message === 'required'
                ? 'orangered'
                : 'gray'
            }
            style={tw`border border-stone-600 p-3 text-white rounded ${
              errors?.amount?.type === 'required' || errors?.amount?.message
                ? 'border-red-500'
                : 'border-stone-800'
            } `}
            onBlur={onBlur}
            onChangeText={onChange}
            keyboardType="numeric"
            defaultValue={`${items?.budget?.amount}`}
          />
        )}
        name="amount"
      />
      <View style={tw`p-2 flex flex-row justify-end gap-2`}>
        <Pressable
          onPress={() => navigation?.goBack()}
          style={tw`bg-gray-500/20 px-10 py-2 rounded`}>
          <Text style={tw`text-white`}>Cancel</Text>
        </Pressable>
        <Pressable
          onPress={handleSubmit(hadleSaveData)}
          style={tw`px-10 py-2 rounded ${mainTheme?.primary}`}>
          <Text>
            {pageString === 'Not_Budgeted' ? 'Set Budget' : 'Update Budget'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

export default BudgetEdit;
