import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  TextBase,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {Picker, PickerIOS} from '@react-native-picker/picker';
import categories from '../data/CategoryData.json';
function CreateTransaction() {
  const [selectedValue, setSelectedValue] = useState('');

  // todo back to page
  const navigate = useNavigation();
  const handleBack = () => {
    navigate?.goBack();
  };
  const [items, setItems] = useState([
    {label: 'Option 1', value: 'option1'},
    {label: 'Option 2', value: 'option2'},
    {label: 'Option 3', value: 'option3'},
  ]);
  return (
    <ScrollView style={tw`flex-1 bg-white max-h-[92%]`}>
      <View style={tw`p-4 bg-white flex-1 flex gap-2`}>
        <TouchableOpacity
          style={tw`bg-stone-100 min-h-[150px] rounded-lg p-2 flex justify-center items-center`}>
          <Text>Add Image</Text>
        </TouchableOpacity>
        <View style={tw``}>
          <Text style={tw`font-medium text-sm tracking-wide py-2`}>
            Expense Type
          </Text>
          <TextInput
            style={tw`text-sm rounded-lg font-medium px-2 py-3 bg-[#f9f9f9] tracking-[1px]`}
          />
        </View>

        <Text style={tw`font-medium text-sm tracking-wide py-2`}>
          Description
        </Text>
        <TextInput
          style={tw`text-sm rounded-lg font-medium  px-2 py-3 bg-[#f9f9f9] tracking-[1px]`}
        />
        <Text style={tw`font-medium text-sm tracking-wide py-2`}>
          Total Amount
        </Text>
        <TextInput
          inputMode="numeric"
          keyboardType="numeric"
          style={tw`text-sm rounded-lg font-medium  px-2 py-3 bg-[#f9f9f9] tracking-[1px]`}
        />
        <View style={tw``}>
          <Text style={tw`font-medium text-sm tracking-wide py-2`}>
            Expense Type:
          </Text>
          <View style={[tw`rounded-lg bg-[#f9f9f9]`]}>
            <Picker
              selectedValue={selectedValue}
              style={tw``}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }>
              {categories &&
                categories?.map((items, index) => {
                  return (
                    <Picker.Item
                      key={index}
                      label={items?.name}
                      value={items?.name}
                    />
                  );
                })}
            </Picker>
          </View>
        </View>
        <View style={tw`flex flex-row justify-end pt-4 gap-2`}>
          <TouchableOpacity
            onPress={handleBack}
            style={tw`bg-stone-200 rounded p-3 flex-1`}>
            <Text style={tw`text-center`}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`bg-[#232323] rounded p-3 flex-1`}>
            <Text style={tw`text-center text-white`}>Create</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default CreateTransaction;
