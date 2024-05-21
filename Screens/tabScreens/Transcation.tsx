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
import useStore from '../../Store/StoreTransaction';
function Transaction() {
  // todo store data
  const transactionList = useStore(state => state?.transactions);
  const navigation: any = useNavigation();
  const handleRedirect = () => {
    navigation.navigate('Settings');
  };

  return (
    <>
      <ScrollView style={tw`bg-[#FFFBF5]`}>
        <SafeAreaView>
          {/* //todo top header */}
          <View
            style={tw`flex flex-row items-center justify-between px-3 py-5`}>
            <Icon name="menu" size={25} style={tw`text-stone-500`} />
            <Text style={tw`text-center  text-stone-600`}>Friday, 12 May</Text>
            <TouchableOpacity onPress={handleRedirect}>
              <Icon name="settings" size={25} style={tw`text-stone-500`} />
            </TouchableOpacity>
          </View>

          {/* //todo card */}
          <View style={tw` px-1 py-1`}>
            <View
              style={tw`bg-[#232323] flex  flex-1  rounded-2xl p-3 shadow-lg min-h-[190px]`}>
              <View style={tw`flex flex-row justify-between items-center`}>
                <MaterialIcon
                  name="integrated-circuit-chip"
                  style={tw`text-yellow-500`}
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
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={tw`py-1`}>
            {Categorys?.map(CategorysTypes => {
              return (
                <View
                  key={CategorysTypes?.id}
                  style={tw`min-w-[160px] rounded-2xl shadow-md p-2 bg-white mx-1 ${CategorysTypes?.color}`}>
                  <View style={tw`flex flex-row items-center`}>
                    <View
                      style={tw`bg-white flex justify-center items-center h-[30px] w-[30px] rounded-lg`}>
                      <MaterialIcon
                        name={CategorysTypes?.icon}
                        style={tw`text-lg text-stone-600`}
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

          {/* //todo header and create button */}
          <View
            style={tw`flex flex-row justify-between items-center py-3 px-3`}>
            <Text style={tw`text-lg font-medium tracking-wide  text-[#232323]`}>
              Recent Transaction
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Create Transaction')}
              style={tw`py-2 px-5 rounded bg-[#232323]`}>
              <Text style={tw`text-white`}>Create</Text>
            </TouchableOpacity>
          </View>
          {/* //todo lists */}
          {transactionList?.map((lists, index) => {
            return <ListItems key={index} lists={lists} index={index} />;
          })}
        </SafeAreaView>
      </ScrollView>
    </>
  );
}

export default Transaction;
