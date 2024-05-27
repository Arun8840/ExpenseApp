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
import {Controller, useForm} from 'react-hook-form';
import StoreTransaction from '../Store/StoreTransaction';
import useGetTheme from '../Utility/Theme';

interface FormTypes {
  title: string;
  image: string;
  paymentType: string;
  description: string;
  totalAmount: any;
  expenseCategory: string;
  icon?: string;
  date?: string;
}
function CreateTransaction() {
  const CreateTransaction = StoreTransaction(
    state => state?.create_Transaction,
  );
  const CategoryData = StoreTransaction(state => state?.CategoryData);
  // todo theme
  const {mainTheme} = useGetTheme();
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
    let randomId = Math?.random();
    let data = getValues();
    let savedata = {
      ...data,
      id: randomId,
      image: data?.image ?? data?.icon,
      date: currectDate,
      totalAmount: parseInt(data?.totalAmount),
      expenseCategory: selectedCategory,
    };
    data && CreateTransaction(savedata);
    data && navigate?.goBack();
  };

  const styles = {
    input: `text-sm font-medium p-4 rounded-lg border border-stone-800 text-white tracking-[1px]`,
  };
  return (
    <ScrollView style={tw`flex-1 bg-[#0c0c0c]`}>
      <View style={tw`p-4 bg-[#0c0c0c] flex-1 flex gap-2`}>
        <TouchableOpacity
          style={tw`bg-stone-900 min-h-[200px] rounded-lg p-2 flex justify-center items-center`}>
          <Text style={tw`text-white`}>Upload Image</Text>
        </TouchableOpacity>
        {/* //todo title */}

        <Controller
          control={control}
          rules={{
            required: false,
            // pattern: /^\S+@\S+$/i,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder="Title"
              placeholderTextColor={'gray'}
              style={tw`${styles?.input}`}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="default"
            />
          )}
          name="title"
          defaultValue=""
        />

        <View style={tw`flex flex-row gap-2`}>
          {/* //todo expense type */}
          <View style={tw`flex-1`}>
            <Controller
              control={control}
              rules={{
                required: false,
                // pattern: /^\S+@\S+$/i,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  placeholder="Payment Type"
                  placeholderTextColor={'gray'}
                  style={tw`${styles?.input}`}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  keyboardType="default"
                />
              )}
              name="paymentType"
            />
          </View>
          <View style={tw`flex-1`}>
            {/* //todo amount */}

            <Controller
              control={control}
              rules={{
                required: false,
                // pattern: /^\S+@\S+$/i,
              }}
              render={({field: {onChange, onBlur, value}}: any) => (
                <TextInput
                  placeholder="$ 0"
                  placeholderTextColor={'gray'}
                  style={tw`${styles?.input}`}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  keyboardType="numeric"
                />
              )}
              name="totalAmount"
            />
          </View>
        </View>

        {/* //todo description */}

        <Controller
          control={control}
          rules={{
            required: false,
            // pattern: /^\S+@\S+$/i,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder="Description"
              placeholderTextColor={'gray'}
              style={tw`${styles?.input}`}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="default"
            />
          )}
          name="description"
          defaultValue=""
        />

        {/* //todo category */}
        <View>
          <Text
            style={tw`font-medium text-sm tracking-wide p-2 text-stone-500`}>
            Category:
          </Text>
          <View style={tw`flex  flex-row flex-wrap gap-2 p-2`}>
            {CategoryData?.map(items => {
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
            style={tw`${mainTheme?.primary} rounded p-3 flex-1`}>
            <Text style={tw`text-center`}>Create</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default CreateTransaction;
