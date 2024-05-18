import {useRoute} from '@react-navigation/native';
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
  const {paramValue}: any = route.params;
  return (
    <View style={tw`p-2 flex-1 bg-white`}>
      <View
        style={tw`rounded-lg min-h-[300px] bg-stone-100 flex justify-center items-center`}>
        <Icons name={paramValue?.icon} size={50} style={tw`text-stone-400`} />
      </View>
      <ScrollView horizontal style={tw`py-2 max-h-[70px]`}>
        {Array.from({length: 5}, (_, index) => {
          return (
            <View
              style={tw`bg-stone-100 rounded-lg p-1 w-[50px] h-[50px] mx-1`}></View>
          );
        })}
      </ScrollView>
      <View style={tw`px-2`}>
        <View style={tw`flex flex-row items-center gap-2`}>
          <Text style={tw`text-lg text-stone-600 tracking-wide`}>
            Expense :
          </Text>
          <Text style={tw`text-lg text-stone-800 tracking-wide font-semibold`}>
            {paramValue?.title}
          </Text>
        </View>
        <View style={tw`flex flex-row items-center gap-2 py-2`}>
          <Text style={tw`text-stone-600`}>Payment type :</Text>
          <View style={tw`flex flex-row items-center gap-2`}>
            <Text style={tw` text-stone-800 capitalize`}>
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
          <Text style={tw`text-stone-600`}>Date :</Text>
          <Text style={tw` text-stone-800`}>{paramValue?.date}</Text>
        </View>
        <View style={tw`flex flex-row items-center gap-2 py-2`}>
          <Text style={tw`text-stone-600`}>Amount :</Text>
          <Text style={tw` text-stone-800 font-medium`}>
            ${paramValue?.totalAmount}
          </Text>
        </View>
        <View style={tw`py-2`}>
          <Text style={tw`text-stone-600`}>Description :</Text>
          <Text
            style={tw` text-stone-800 text-sm tracking-wide leading-6 py-3 px-1`}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum ea
            quos voluptatibus dolorum eligendi iste, nihil enim iure illo a
            inventore consectetur saepe eius sed eum neque porro earum ipsam!
          </Text>
        </View>
        <TouchableOpacity style={tw`bg-red-500 rounded-lg p-4`}>
          <Text
            style={tw`text-center text-white font-medium text-sm tracking-wide`}>
            Delete Expense
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default TransactionDetails;
