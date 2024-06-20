import React from 'react';
import {Pressable, ScrollView, TouchableOpacity, View} from 'react-native';
import tw from 'twrnc';
import StoreTransaction from '../Store/StoreTransaction';
import Cards from '../Components/Cards';
import {useNavigation} from '@react-navigation/native';
import useGetTheme from '../Utility/Theme';
import Icon from 'react-native-vector-icons/Ionicons';

function ExpenseAccount() {
  // todo card datas
  const CardsItems = StoreTransaction(state => state?.CardData);
  const navigation: any = useNavigation();
  const {mainTheme} = useGetTheme();
  // todo navigate add new category page
  const handleDirect = () => {
    navigation?.navigate('Create Category');
  };
  return (
    <View style={tw`flex-1 bg-[#0C0C0C] p-1 relative`}>
      <ScrollView>
        {CardsItems?.length > 0 &&
          CardsItems?.map(accounts => {
            return (
              <Cards showEnableButton accounts={accounts} key={accounts?.id} />
            );
          })}
      </ScrollView>

      <TouchableOpacity
        onPress={handleDirect}
        style={tw`${mainTheme?.primary} absolute bottom-10 right-8 rounded-full p-3`}>
        <Icon name="add" size={30} />
      </TouchableOpacity>
    </View>
  );
}

export default ExpenseAccount;
