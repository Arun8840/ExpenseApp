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
    <ScrollView style={tw`flex-1 bg-white max-h-[92%]`}>
      <View style={tw`p-4 bg-white flex-1 flex gap-2`}>
        <TouchableOpacity
          style={tw`bg-stone-100 min-h-[150px] rounded-lg p-2 flex justify-center items-center`}>
          <Text>Add Image</Text>
        </TouchableOpacity>
        {/* //todo title */}
        <View style={tw``}>
          <Text style={tw`font-medium text-sm tracking-wide py-2`}>Title</Text>

          <Controller
            control={control}
            rules={{
              required: false,
              // pattern: /^\S+@\S+$/i,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={tw`text-sm rounded-lg font-medium px-2 py-3 bg-[#f9f9f9] tracking-[1px]`}
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
          <Text style={tw`font-medium text-sm tracking-wide py-2`}>
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
                style={tw`text-sm rounded-lg font-medium px-2 py-3 bg-[#f9f9f9] tracking-[1px]`}
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
        <Text style={tw`font-medium text-sm tracking-wide py-2`}>
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
              style={tw`text-sm rounded-lg font-medium px-2 py-3 bg-[#f9f9f9] tracking-[1px]`}
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
        <Text style={tw`font-medium text-sm tracking-wide py-2`}>
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
              style={tw`text-sm rounded-lg font-medium px-2 py-3 bg-[#f9f9f9] tracking-[1px]`}
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
          <Text style={tw`font-medium text-sm tracking-wide py-2`}>
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
                      ? `${items?.color}`
                      : 'bg-stone-100'
                  } rounded-full w-[80px] h-[80px] flex justify-center items-center`}>
                  <MaterialIcon
                    style={
                      items?.name === selectedCategory
                        ? {
                            color: 'white',
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
            style={tw`bg-stone-200 rounded p-3 flex-1`}>
            <Text style={tw`text-center`}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleCreate}
            style={tw`bg-[#232323] rounded p-3 flex-1`}>
            <Text style={tw`text-center text-white`}>Create</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default CreateTransaction;
