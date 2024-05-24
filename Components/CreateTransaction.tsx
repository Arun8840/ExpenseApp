import React from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import tw from 'twrnc';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import categories from '../data/CategoryData.json';
import {Controller, useForm} from 'react-hook-form';
import StoreTransaction from '../Store/StoreTransaction';

interface FormTypes {
  title: string;
  image: string;
  expenseType: string;
  description: string;
  totalAmount: number;
  expenseCategory: string;
  icon?: string;
  date?: string;
}
function CreateTransaction() {
  const CreateTransaction = StoreTransaction(
    (state: any) => state?.create_Transaction,
  );
  const getCurrentDate = () => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  let currectDate = getCurrentDate();
  // form state
  const {
    control,
    formState: {errors},
    watch,
    setValue,
    getValues,
  } = useForm<FormTypes>();
  let selectedCategory = watch('expenseCategory');
  // todo back to page
  const navigate = useNavigation();
  const handleBack = () => {
    navigate?.goBack();
  };

  const handleSelectCategory = (items: any) => {
    setValue('expenseCategory', items?.name);
    setValue('icon', items?.icon);
  };

  // save action
  const handleCreate = () => {
    let data = getValues();
    let savedata = {
      ...data,
      image: data?.image ?? data?.icon,
      date: currectDate,
    };
    data && CreateTransaction(savedata);
    data && navigate?.goBack();
  };
  return (
    <ScrollView style={tw`flex-1 bg-[#0c0c0c] max-h-[92%]`}>
      <View style={tw`p-4 bg-[#0c0c0c] flex-1 flex gap-2`}>
        <TouchableOpacity
          style={tw`bg-stone-900 min-h-[150px] rounded-lg p-2 flex justify-center items-center`}>
          <Text style={tw`text-white`}>Add Image</Text>
        </TouchableOpacity>
        {/* //todo title */}
        <View style={tw``}>
          <Text style={tw`font-medium text-sm tracking-wide py-2 text-white`}>
            Title
          </Text>

          <Controller
            control={control}
            rules={{
              required: false,
              // pattern: /^\S+@\S+$/i,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={tw`text-sm font-medium px-2 py-3 border-b border-stone-600 text-white tracking-[1px]`}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType="default"
              />
            )}
            name="title"
            defaultValue=""
          />
        </View>
        {/* //todo expense type */}
        <View style={tw``}>
          <Text style={tw`font-medium text-sm tracking-wide py-2 text-white`}>
            Expense Type
          </Text>
          <Controller
            control={control}
            rules={{
              required: false,
              // pattern: /^\S+@\S+$/i,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={tw`text-sm font-medium px-2 py-3 border-b border-stone-600 text-white tracking-[1px]`}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType="default"
              />
            )}
            name="expenseType"
          />
        </View>

        {/* //todo description */}
        <Text style={tw`font-medium text-sm tracking-wide py-2 text-white`}>
          Description
        </Text>
        <Controller
          control={control}
          rules={{
            required: false,
            // pattern: /^\S+@\S+$/i,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={tw`text-sm font-medium px-2 py-3 border-b border-stone-600 text-white tracking-[1px]`}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="default"
            />
          )}
          name="description"
          defaultValue=""
        />
        {/* //todo amount */}
        <Text style={tw`font-medium text-sm tracking-wide py-2 text-white`}>
          Total Amount
        </Text>
        <Controller
          control={control}
          rules={{
            required: false,
            // pattern: /^\S+@\S+$/i,
          }}
          render={({field: {onChange, onBlur, value}}: any) => (
            <TextInput
              style={tw`text-sm font-medium px-2 py-3 border-b border-stone-600 text-white tracking-[1px]`}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="numeric"
            />
          )}
          name="totalAmount"
        />
        {/* //todo category */}
        <View>
          <Text style={tw`font-medium text-sm tracking-wide py-2 text-white`}>
            Expense Category:
          </Text>
          <View style={tw`flex  flex-row flex-wrap gap-2 p-2`}>
            {categories?.map(items => {
              return (
                <TouchableOpacity
                  key={items?.id}
                  onPress={() => handleSelectCategory(items)}
                  style={tw`${
                    items?.name === selectedCategory
                      ? `${items?.bgColor}`
                      : 'bg-stone-800'
                  } rounded-full w-[60px] h-[60px] flex justify-center items-center`}>
                  <MaterialIcon
                    style={
                      items?.name === selectedCategory
                        ? {
                            color: '#232323',
                            fontSize: 25,
                          }
                        : {color: 'gray', fontSize: 25}
                    }
                    name={items?.icon}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <View style={tw`flex flex-row justify-end pt-4 gap-2`}>
          <TouchableOpacity
            onPress={handleBack}
            style={tw`bg-stone-800 rounded p-3 flex-1`}>
            <Text style={tw`text-center text-white`}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleCreate}
            style={tw`bg-[#DCFFB7] rounded p-3 flex-1`}>
            <Text style={tw`text-center`}>Create</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default CreateTransaction;
