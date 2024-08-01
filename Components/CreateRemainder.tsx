import React from 'react';
import {
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import tw from 'twrnc';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import DateIcon from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';
import {Controller, useForm} from 'react-hook-form';
import StoreTransaction from '../Store/StoreTransaction';
import useGetTheme from '../Utility/Theme';
import {RemainderTypes} from '../Store/Models/TransactionTypes';
import DatePicker from 'react-native-date-picker';

function CreateRemainder() {
  const CreateRemainder = StoreTransaction(state => state?.setRemainder);

  const CategoryData = StoreTransaction(state => state?.CategoryData);
  // todo theme
  const {mainTheme} = useGetTheme();

  const formatDate = (selectedDateString: any) => {
    const date = new Date(selectedDateString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  };
  // form state
  const {
    control,
    formState: {errors},
    watch,
    setValue,
    getValues,
  } = useForm<RemainderTypes>({
    defaultValues: {
      amount: '',
      date: '',
      notes: '',
      category: '',
      description: '',
      isDateOpen: false,
    },
  });

  const {date, isDateOpen} = watch();
  // todo back to page
  const navigate = useNavigation();
  const handleBack = () => {
    navigate?.goBack();
  };

  const handleOpenDate_Model = () => {
    setValue('isDateOpen', true);
  };

  const handleChangeDate = (e: any) => {
    let dateValue = formatDate(e);
    setValue('date', dateValue);
    setValue('isDateOpen', false);
  };
  const styles = {
    input: `text-sm font-medium p-4 rounded-lg border border-stone-800 text-white tracking-[1px] `,
  };

  const handleSelectCategory = (value: any) => {
    setValue('category', value);
  };

  // todo submit all data
  const handleCreate = () => {
    let randomId = Math?.random();
    let data = getValues();
    let {isDateOpen, ...remainingValues} = data;
    let savedata = {
      ...remainingValues,
      id: randomId,
    };
    CreateRemainder(savedata);
    data && navigate?.goBack();
  };

  return (
    <ScrollView style={tw`flex-1 bg-[#0c0c0c]`}>
      <View style={tw`p-4 bg-[#0c0c0c] flex-1 flex gap-2`}>
        {/* //todo title */}

        <Controller
          control={control}
          rules={{
            required: false,
            // pattern: /^\S+@\S+$/i,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder="Notes"
              placeholderTextColor={'gray'}
              style={tw`${styles?.input}`}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="default"
            />
          )}
          name="notes"
          defaultValue=""
        />

        <View style={tw`flex flex-row gap-2`}>
          {/* //todo date  */}
          <View style={tw`flex-1`}>
            <Controller
              control={control}
              rules={{
                required: false,
                // pattern: /^\S+@\S+$/i,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <>
                  <View style={tw`flex flex-row items-center gap-2`}>
                    <View style={tw`flex-1`}>
                      <TextInput
                        placeholder="YYYY-MM-DD"
                        placeholderTextColor={'gray'}
                        style={tw`${styles?.input}`}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        keyboardType="default"
                      />
                    </View>
                    {/* //todo date button */}
                    <Pressable
                      onPress={handleOpenDate_Model}
                      style={tw`bg-stone-800 py-2 px-3 border rounded-lg `}>
                      <DateIcon
                        name="date"
                        style={tw`text-white text-2xl text-stone-500`}
                      />
                    </Pressable>
                  </View>
                  <DatePicker
                    modal
                    open={isDateOpen}
                    date={new Date()}
                    onConfirm={handleChangeDate}
                    onCancel={() => setValue('isDateOpen', false)}
                  />
                </>
              )}
              name="date"
            />
          </View>
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
            name="amount"
          />
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
              style={tw`${styles?.input} min-h-[100px]`}
              multiline
              numberOfLines={5}
              maxLength={100}
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
          <View style={tw`flex flex-row items-center p-2 gap-x-1`}>
            <Text style={tw`font-medium text-sm tracking-wide text-stone-500`}>
              Category:
            </Text>
          </View>
          <View style={tw`flex  flex-row flex-wrap gap-2 p-2`}>
            {CategoryData?.map(items => {
              return (
                <TouchableOpacity
                  key={items?.id}
                  onPress={() => handleSelectCategory(items?.name)}
                  style={tw`rounded-full w-[60px] h-[60px] flex justify-center items-center relative`}>
                  <MaterialIcon
                    style={
                      false
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

export default CreateRemainder;
