import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import tw from 'twrnc';
import ListItems from '../../Components/ListItems';
import {useNavigation} from '@react-navigation/native';
import Categorys from '../../data/CategoryData.json';
import StoreTransaction from '../../Store/StoreTransaction';
function Transaction() {
  // todo store data
  const transactionList = StoreTransaction(state => state?.transactions);
  const navigation: any = useNavigation();
  const handleRedirect = () => {
    navigation.navigate('Settings');
  };

  return (
    <>
      <ScrollView alwaysBounceVertical style={tw`bg-[#0C0C0C]`}>
        {/* //todo top header */}
        <View style={tw`flex flex-row items-center justify-between px-3 py-5 `}>
          <Icon name="menu" size={25} style={tw`text-[#DCFFB7]`} />
          <Text style={tw`text-center  text-[#DCFFB7]`}>Friday, 12 May</Text>
          <TouchableOpacity onPress={handleRedirect}>
            <Icon name="settings" size={25} style={tw`text-[#DCFFB7]`} />
          </TouchableOpacity>
        </View>

        {/* //todo card */}
        <View style={tw` px-1 py-1  flex-1`}>
          <View
            style={tw`bg-[#F97300] flex  flex-1  rounded-xl p-3 shadow-lg h-[200px]`}>
            <View style={tw`flex flex-row justify-between items-center`}>
              <MaterialIcon
                name="integrated-circuit-chip"
                style={tw`text-[#DCFFB7]`}
                size={30}
              />
              <Text style={tw`text-white font-bold italic pr-2`}>VISA</Text>
            </View>
            <Text style={tw` font-semibold tracking-[5px] text-white py-10`}>
              63819411481148
            </Text>
            <Text
              style={tw`text-white/50 py-1 uppercase tracking-wide text-sm`}>
              Card Holder Name
            </Text>
            <Text style={tw`text-white tracking-wide text-sm`}>
              Arun Prakash
            </Text>
          </View>
        </View>

        {/* //todo total spends */}
        <View style={tw`flex-1`}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={tw`py-1 `}>
            {Categorys?.map(CategorysTypes => {
              return (
                <View
                  key={CategorysTypes?.id}
                  style={tw`w-[160px] h-[100px] rounded-lg shadow-md p-2 bg-white mx-1 bg-[#232323]`}>
                  <View style={tw`flex flex-row items-center`}>
                    <View
                      style={tw`flex justify-center items-center h-[30px] w-[30px] rounded-lg`}>
                      <MaterialIcon
                        name={CategorysTypes?.icon}
                        style={tw`text-lg ${CategorysTypes?.color} `}
                      />
                    </View>
                    <Text style={tw`flex-1 px-2 text-white`}>
                      {CategorysTypes?.name}
                    </Text>
                  </View>
                  <Text
                    style={tw`text-[30px] text-center text-white font-bold px-2 py-3`}>
                    20%
                  </Text>
                </View>
              );
            })}
          </ScrollView>
        </View>

        {/* //todo header and create button */}
        <View style={tw`flex flex-row justify-between items-center py-3 px-3 `}>
          <Text style={tw`text-lg font-medium tracking-wide  text-white`}>
            Recent Transaction
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Create Transaction')}
            style={tw`py-2 px-2 rounded bg-[#DCFFB7] flex flex-row items-center gap-2`}>
            <Text>Add</Text>
            <Icon name="add" size={20} />
          </TouchableOpacity>
        </View>
        {/* //todo lists */}
        <View style={tw`px-2`}>
          {transactionList?.map((lists, index) => {
            return <ListItems key={index} lists={lists} index={index} />;
          })}
        </View>
      </ScrollView>
    </>
  );
}

export default Transaction;
