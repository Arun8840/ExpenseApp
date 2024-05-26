import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {
  Alert,
  Button,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import tw from 'twrnc';
import StoreTransaction from '../Store/StoreTransaction';
import useGetTheme from '../Utility/Theme';
function TransactionDetails() {
  const route = useRoute();
  const navigate = useNavigation();
  const {paramValue}: any = route.params;
  const {colormain} = useGetTheme();
  const deleteItem = StoreTransaction(state => state?.delete_Transaction);
  // ! delete expense
  const handleDelete = () => {
    Alert.alert(
      'Confirm Action',
      `Are you sure you want to delete ${paramValue?.title} ?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            deleteItem(paramValue);
            navigate.goBack();
          },
        },
      ],
      {cancelable: false},
    );
  };
  return (
    <View style={tw`p-2 flex-1 bg-[#0c0c0c]`}>
      <View
        style={tw`rounded-lg min-h-[300px] bg-stone-800 flex justify-center items-center`}>
        <Icons name={paramValue?.icon} size={50} style={tw`text-stone-400`} />
      </View>

      <View style={tw`px-2`}>
        <View style={tw`flex flex-row justify-between`}>
          <View style={tw`flex flex-row items-center gap-2`}>
            <Text style={tw`text-lg text-white tracking-wide`}>Expense :</Text>
            <Text style={tw`text-lg text-white tracking-wide font-semibold`}>
              {paramValue?.title}
            </Text>
          </View>
          <Button title="Edit" color={colormain} />
        </View>
        <View style={tw`flex flex-row items-center gap-2 py-2`}>
          <Text style={tw`text-white`}>Payment type :</Text>
          <View style={tw`flex flex-row items-center gap-2`}>
            <Text style={tw` text-white capitalize`}>
              {paramValue?.paymentType}
            </Text>
          </View>
        </View>
        <View style={tw`flex flex-row items-center gap-2 py-2`}>
          <Text style={tw`text-white`}>Date :</Text>
          <Text style={tw` text-white`}>{paramValue?.date}</Text>
        </View>

        <View style={tw`flex flex-row items-center gap-2 py-2`}>
          <Text style={tw`text-white`}>Expense category :</Text>
          <Text style={tw` text-white`}>{paramValue?.expenseCategory}</Text>
        </View>
        <View style={tw`flex flex-row items-center gap-2 py-2`}>
          <Text style={tw`text-white`}>Amount :</Text>
          <Text style={tw` text-white font-medium`}>
            ${paramValue?.totalAmount}
          </Text>
        </View>
        <View style={tw`py-2`}>
          <Text style={tw`text-white`}>Description :</Text>
          <Text
            style={tw` text-white text-sm tracking-wide leading-6 py-3 px-1`}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum ea
            quos voluptatibus dolorum eligendi iste, nihil enim iure illo a
            inventore consectetur saepe eius sed eum neque porro earum ipsam!
          </Text>
        </View>
        <View style={tw`flex flex-row justify-center gap-2`}>
          <TouchableOpacity
            onPress={() => navigate.goBack()}
            style={tw`bg-gray-500/50 flex-1 rounded-lg p-3`}>
            <Text
              style={tw`text-center text-white font-medium text-sm tracking-wide`}>
              Cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleDelete}
            style={tw`bg-red-500 flex-1 rounded-lg p-3`}>
            <Text
              style={tw`text-center text-white font-medium text-sm tracking-wide`}>
              Delete Expense
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default TransactionDetails;
