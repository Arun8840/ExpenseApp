import React from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import tw from 'twrnc';
import {useNavigation} from '@react-navigation/native';
import {Controller, useForm} from 'react-hook-form';
import StoreTransaction from '../Store/StoreTransaction';
import useGetTheme from '../Utility/Theme';
import Themedata from '../data/CustomThemeData.json';

interface FormTypes {
  name: string;
  description: string;
  icon?: string;
  bgColor: string;
  color: string;
}

function CreateCategory() {
  const CreateNewCategory = StoreTransaction(state => state?.create_Category);
  // todo theme
  const {mainTheme} = useGetTheme();

  // form state
  const {
    control,
    formState: {errors},
    watch,
    handleSubmit,
    setValue,
    getValues,
  } = useForm<FormTypes>();
  // todo back to page
  const navigate = useNavigation();
  const handleBack = () => {
    navigate?.goBack();
  };
  const handleSelectColors = (themes: any) => {
    setValue('bgColor', themes?.color);
    setValue('color', themes?.textColor);
  };

  // save action
  const handleCreate = () => {
    let randomId: any = Math?.random();
    let data = getValues();
    let savedata: any = {
      ...data,
      id: randomId,
      icon: 'new-box',
      useage: 0,
      totalAmount: [],
    };
    data && CreateNewCategory(savedata);
    data && navigate?.goBack();
  };

  const styles = {
    input: `text-sm font-medium p-4 rounded-lg border text-white tracking-[1px]`,
  };

  return (
    <ScrollView style={tw`flex-1 bg-[#0c0c0c]`}>
      <View style={tw`p-4 bg-[#0c0c0c] flex-1 flex gap-2`}>
        {/* //todo title */}

        <Controller
          control={control}
          rules={{
            required: 'Category Name is required',
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder={errors?.name?.message ?? 'Cateogry Name'}
              placeholderTextColor={
                errors?.name?.type === 'required' ? 'orangered' : 'gray'
              }
              style={tw`${styles?.input} ${
                errors?.name?.type === 'required'
                  ? 'border-red-500'
                  : 'border-stone-800'
              } `}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="default"
            />
          )}
          name="name"
          defaultValue=""
        />

        <Controller
          control={control}
          rules={{
            required: false,
            // pattern: /^\S+@\S+$/i,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              multiline
              numberOfLines={5}
              maxLength={100}
              placeholder="Description"
              placeholderTextColor={'gray'}
              style={tw`${styles?.input} border-stone-800 min-h-[200px]`}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="default"
            />
          )}
          name="description"
          defaultValue=""
        />

        <Text
          style={tw`text-white font-semibold text-sm py-2 text-stone-500 tracking-wide`}>
          Select Category Theme
        </Text>
        <View style={tw` flex flex-row flex-wrap gap-2`}>
          {Themedata?.map(themes => {
            return (
              <TouchableOpacity
                key={themes?.id}
                onPress={() => handleSelectColors(themes)}>
                <View
                  style={tw`${themes?.color} min-w-[40px] min-h-[40px] rounded-full`}></View>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={tw`flex flex-row justify-end pt-4 gap-2`}>
          <TouchableOpacity
            onPress={handleBack}
            style={tw`bg-stone-800 rounded p-3 flex-1`}>
            <Text style={tw`text-center text-white`}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleSubmit(handleCreate)}
            style={tw`${mainTheme?.primary} rounded p-3 flex-1`}>
            <Text style={tw`text-center`}>Create</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default CreateCategory;
