import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
  Button,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
function Welcome() {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation: any = useNavigation();
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  // todo navigate to home screen
  const handleNavigate = () => {
    navigation.navigate('Home');
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles?.sectionContainer}>
        <Image
          style={styles?.bannerImage}
          source={require('../images/banner.png')}
        />
        <Text style={styles?.header}>Always take control you finance</Text>
        <Text style={styles?.content}>
          finances must be arranged to set a better lifestyle in the feature
        </Text>
        {/* //todo button */}
        <TouchableOpacity onPress={handleNavigate} style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: 'white',
    paddingTop: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  header: {
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'center',
  },
  content: {
    textTransform: 'capitalize',
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
    color: 'gray',
    paddingHorizontal: 30,
    paddingVertical: 40,
  },
  bannerImage: {
    objectFit: 'contain',
    width: '100%',
    maxHeight: 450,
  },
  button: {
    backgroundColor: '#232323',
    padding: 15,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
});
export default Welcome;
