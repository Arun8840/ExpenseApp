import React from 'react';
import {
  Button,
  Image,
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
import StoreTransaction from '../../Store/StoreTransaction';
import useGetTheme from '../../Utility/Theme';
function Transaction() {
  // todo store data
  const transactionList = StoreTransaction(state => state?.transactions);
  const navigation: any = useNavigation();
  const handleRedirect = () => {
    navigation.navigate('Settings');
  };
  const {mainTheme} = useGetTheme();

  let isValid_showCreateButton = transactionList?.length === 0;
  return (
    <>
      <ScrollView alwaysBounceVertical style={tw`bg-[#0C0C0C]`}>
        {/* //todo top header */}
        <View style={tw`flex flex-row items-center justify-between px-3 py-5 `}>
          <Icon name="menu" size={25} style={tw`${mainTheme?.textPrimary}`} />
          <Text style={tw`text-center  ${mainTheme?.textPrimary}`}>
            Friday, 12 May
          </Text>
          <TouchableOpacity onPress={handleRedirect}>
            <Icon
              name="settings"
              size={25}
              style={tw`${mainTheme?.textPrimary}`}
            />
          </TouchableOpacity>
        </View>

        {/* //todo card */}
        <View style={tw` px-1 py-1  flex-1`}>
          <View
            style={tw`bg-stone-800/50 flex  flex-1  rounded-xl p-3 shadow-lg h-[200px]`}>
            <View style={tw`flex flex-row justify-between items-center`}>
              <MaterialIcon
                name="integrated-circuit-chip"
                style={tw`${mainTheme?.textPrimary}`}
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

        {/* //todo header and create button */}
        <View style={tw`flex flex-row justify-between items-center py-3 px-3 `}>
          <Text style={tw`text-lg font-medium tracking-wide  text-white`}>
            Recent Transaction
          </Text>
          {!isValid_showCreateButton && (
            <TouchableOpacity
              onPress={() => navigation.navigate('Create Transaction')}
              style={tw`py-2 px-2 rounded ${mainTheme?.primary} flex flex-row items-center gap-2`}>
              <Text>Add</Text>
              <Icon name="add" size={20} />
            </TouchableOpacity>
          )}
        </View>
        {/* //todo lists */}
        <View style={tw`px-2`}>
          {transactionList?.length > 0 ? (
            transactionList?.map((lists, index) => {
              return <ListItems key={index} lists={lists} index={index} />;
            })
          ) : (
            <View
              style={tw`flex-1 min-h-[250px] flex justify-center items-center`}>
              <Text style={tw`text-gray-500 p-2 text-xs tracking-wide`}>
                No Transaction Found
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Create Transaction')}
                style={tw`py-2 px-10 rounded ${mainTheme?.primary} flex flex-row items-center gap-2`}>
                <Text>Create</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
    </>
  );
}

export default Transaction;
