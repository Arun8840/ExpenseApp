import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import tw from 'twrnc';
function TransactionDetails() {
  const route = useRoute();
  const navigate = useNavigation();
  const {paramValue}: any = route.params;
  return (
    <View style={tw`p-2 flex-1 bg-[#0c0c0c]`}>
      <View
        style={tw`rounded-lg min-h-[300px] bg-black flex justify-center items-center`}>
        <Icons name={paramValue?.icon} size={50} style={tw`text-stone-400`} />
      </View>
      <ScrollView horizontal style={tw`py-2 max-h-[70px]`}>
        {Array.from({length: 5}, (_, index) => {
          return (
            <View
              key={index}
              style={tw`bg-stone-800 rounded-lg p-1 w-[50px] h-[50px] mx-1`}></View>
          );
        })}
      </ScrollView>
      <View style={tw`px-2`}>
        <View style={tw`flex flex-row items-center gap-2`}>
          <Text style={tw`text-lg text-white tracking-wide`}>Expense :</Text>
          <Text style={tw`text-lg text-white tracking-wide font-semibold`}>
            {paramValue?.title}
          </Text>
        </View>
        <View style={tw`flex flex-row items-center gap-2 py-2`}>
          <Text style={tw`text-white`}>Payment type :</Text>
          <View style={tw`flex flex-row items-center gap-2`}>
            <Text style={tw` text-white capitalize`}>
              {paramValue?.paymentType}
            </Text>
            <Icons
              name={paramValue?.paymentType}
              size={20}
              style={tw`text-stone-500`}
            />
          </View>
        </View>
        <View style={tw`flex flex-row items-center gap-2 py-2`}>
          <Text style={tw`text-white`}>Date :</Text>
          <Text style={tw` text-white`}>{paramValue?.date}</Text>
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
          <TouchableOpacity style={tw`bg-red-500 flex-1 rounded-lg p-3`}>
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
