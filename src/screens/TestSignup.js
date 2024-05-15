import {
  View,
  TouchableOpacity,
  Text,
  StatusBar,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  Button,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import LinearGradient from 'react-native-linear-gradient';

const TestSignup = ({navigation}) => {
  const [gender, setGender] = useState('');

  const handleGenderChange = (itemValue, itemIndex) => {
    setGender(itemValue);
  };
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  const [email, setEmail] = useState('');
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const handleCheckEmail = text => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    setEmail(text);
    // setEmail(text.toLowerCase())
    if (re.test(text) || regex.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };

  const [password, setPassword] = useState('');
  const [seePassword, setSeePassword] = useState(true);

  const checkPasswordValidity = value => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
      return 'Password must not contain WhiteSpace.';
    }
    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    if (!isContainsUppercase.test(value)) {
      return 'Password must have atleast one Uppercase.';
    }
    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase.test(value)) {
      return 'Password must have atleast one Lowercase.';
    }

    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (!isContainsNumber.test(value)) {
      return 'Password must have atleast one Digit.';
    }
    const isValidLength = /^.{8,16}$/;
    if (!isValidLength.test(value)) {
      return 'Password must be 8-16 Characters Long.';
    }
    return null;
  };

  const handleLogin = () => {
    const checkPassword = checkPasswordValidity(password);
    const checkEmail = handleCheckEmail(email);
    if (!checkPassword && !checkEmail) {
      navigation.navigate('Home');
    } else {
      Alert.alert('checkEmail or checkpassword ');
    }
  };

  return (
    <ScrollView style={{flexGrow: 1}}>
      <View style={{backgroundColor: '#FFFFFF', padding: 20, gap: 20}}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Let’s Get Started!</Text>
          <Text style={styles.subHeaderTitle}>
            Create an account to get all features
          </Text>
        </View>

        <View style={{gap: 20}}>
          <View>
            <Text style={styles.nameField}>Name*</Text>
            <View style={styles.inputbox}>
              <Image
                source={require('../assets/person.jpg')}
                style={styles.image}
              />
              <TextInput
                style={styles.Input}
                placeholder="Name"
                keyboardType="name"
                autoCapitalize="none"
              />
            </View>
          </View>

          <View>
            <Text style={styles.nameField}>Username*</Text>
            <View style={styles.inputbox}>
              <Image
                source={require('../assets/person.jpg')}
                style={styles.image}
              />
              <TextInput
                style={styles.Input}
                placeholder="Username"
                keyboardType="username"
                autoCapitalize="none"
              />
            </View>
          </View>

          <View>
            <Text style={styles.nameField}>Phone Number*</Text>
            <View style={styles.inputbox}>
              <Image
                source={require('../assets/mobile.jpg')}
                style={styles.image}
              />
              <TextInput
                style={styles.Input}
                placeholder="Enter Phone Number"
                keyboardType="phone-pad"
                autoCapitalize="none"
              />
            </View>
          </View>

          <View>
            <Text style={styles.nameField}>Email Address*</Text>
            <View style={styles.inputbox}>
              <Image
                source={require('../assets/mail.jpg')}
                style={styles.image}
              />
              <TextInput
                style={styles.Input}
                onChangeText={text => handleCheckEmail(text)}
                placeholder="Enter Email Address"
                autoCapitalize="none"
                value={email}
              />
            </View>
            <View>
              {!checkValidEmail ? '' : <Text>Wrong Format email</Text>}
            </View>
          </View>

          <View>
            <Text style={styles.nameField}>Birthday Date*</Text>
            <View style={styles.inputbox}>
              <Image
                source={require('../assets/candle.jpg')}
                style={styles.image}
              />
              <TextInput
                style={styles.Input}
                placeholder="DD/MM/YYYY"
                keyboardType="numeric"
                autoCapitalize="none"
                maxLength={10}
              />
            </View>
          </View>

          <View>
            <Text style={styles.nameField}>Gender*</Text>
            <View style={styles.inputbox}>
              <Image
                source={require('../assets/gender.jpg')}
                style={styles.image}
              />
              <Picker
                style={styles.Input}
                selectedValue={gender}
                onValueChange={handleGenderChange}>
                <Picker.Item label="Select Gender" value="" />
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
                <Picker.Item label="Other" value="other" />
              </Picker>
            </View>
          </View>

          <View>
            <Text style={styles.nameField}>Country*</Text>
            <View style={styles.inputbox}>
              <Image
                source={require('../assets/location.jpg')}
                style={styles.image}
              />
              <Picker
                style={styles.Input}
                selectedValue={gender}
                onValueChange={handleGenderChange}>
                <Picker.Item label="Select Country" value="" />
                <Picker.Item label="India" value="india" />
                <Picker.Item label="USA" value="usa" />
                <Picker.Item label="Other" value="other" />
              </Picker>
            </View>
          </View>

          <View>
            <Text style={styles.nameField}>Create Password*</Text>
            <View style={styles.inputbox}>
              <Image
                source={require('../assets/lock.jpg')}
                style={styles.image}
              />
              <TextInput
                style={styles.Input}
                placeholder="Enter password"
                onChangeText={text => setPassword(text)}
                value={password}
                secureTextEntry={seePassword}
              />
              <TouchableOpacity
                style={{right: 25}}
                onPress={() => setSeePassword(!seePassword)}>
                <Image
                  style={{height: 17, width: 24}}
                  source={
                    seePassword
                      ? require('../assets/hide.png')
                      : require('../assets/view.png')
                  }
                />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Text
              style={{
                fontFamily: 'Urbanist-Bold',
                fontWeight: '600',
                fontSize: 14,
                color: '#000000',
              }}>
              Password must contain
            </Text>
            <Text
              style={{
                fontFamily: 'Urbanist-Medium',
                fontWeight: '300',
                fontSize: 14,
                color: '#000000',
              }}>
              8 characters or longer. Combine upper and{'\n'}lowercase letters
              and number.
            </Text>
          </View>

          <View>
            <View style={{flexDirection: 'row', left: -5, marginBottom: 20}}>
              <CheckBox value={isChecked} onValueChange={toggleCheckBox} />
              {/* <Text >{isChecked ? 'Checked' : 'Unchecked'}</Text> */}
              <Text style={styles.checkBoxText}>
                By sign up, you agree to
                <Text style={[styles.underLine, styles.customStyle]}>
                  {' '}
                  Terms of Use
                </Text>
                {'\n'}and{' '}
                <Text
                  style={{
                    color: '#4E67FF',
                    textDecorationLine: 'underline',
                    textDecorationStyle: 'solid',
                    textDecorationColor: '#4E67FF',
                  }}>
                  Privacy Policy.
                </Text>
              </Text>
            </View>

            <View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Home')}>
                <LinearGradient
                  colors={['#4E67FF', '#BE75E8']}
                  start={{x: 0, y: 0.5}}
                  end={{x: 1, y: 1}}
                  style={styles.buttonGradient}>
                  <Text style={styles.buttonText}>Sign Up</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>

            <View style={styles.lineContainer}>
              <View style={styles.line} />
              <Text
                style={{
                  textAlign: 'center',
                  color: '#99A1C6',
                  fontFamily: 'Urbanist-Bold',
                }}>
                or continue with
              </Text>
              <View style={styles.line} />
            </View>
            <View>
              <TouchableOpacity style={styles.containerIcn}>
                <Image
                  source={require('../assets/google.png')}
                  style={styles.ImageIcon}
                />
                <Image
                  source={require('../assets/facebook.png')}
                  style={styles.ImageIcon}
                />
                <Image
                  source={require('../assets/twitter.png')}
                  style={styles.ImageIcon}
                />
                <Image
                  source={require('../assets/linkedin.png')}
                  style={styles.ImageIcon}
                />
                <Image
                  source={require('../assets/instagram.png')}
                  style={styles.ImageIcon}
                />
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 60, padding: 20, gap: 30}}>
              <Text
                style={{
                  textAlign: 'center',
                  fontFamily: 'Urbanist-Bold',
                  color: '#000000',
                  fontSize: 15,
                }}>
                Don’t have an account?
              </Text>
              <TouchableOpacity
                style={styles.buttonFooter}
                onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.buttonTextFooter}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  underLine: {
    textDecorationLine: 'underline',
    textDecorationColor: '#4E67FF',
    textDecorationStyle: 'solid',
    textDecorationThickness: 2,
  },
  customStyle: {
    color: '#4E67FF',
  },
  checkBoxText: {
    fontFamily: 'Urbanist-Bold',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 24,
    color: '#000000',
  },
  header: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 4,
    paddingTop: 40,
  },
  headerTitle: {
    fontFamily: 'Urbanist-Bold',
    fontSize: 26,
    fontWeight: '500',
    lineHeight: 31.21,
    textAlign: 'center',
    color: '#000000',
  },
  subHeaderTitle: {
    fontFamily: 'Urbanist-Medium',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
    textAlign: 'center',
    color: '#000000',
  },
  image: {
    marginRight: 10,
    marginLeft: 10,
  },
  Input: {
    fontFamily: 'Urbanist-Bold',
    color: '#0F1632',
    fontSize: 15,
    width: '85%',
  },
  inputbox: {
    width: '100%',
    height: 48,
    borderColor: '#99A1C6',
    borderWidth: 1,
    borderRadius: 4,
    alignItems: 'center',
    // justifyContent:'center',
    flexDirection: 'row',
  },
  nameField: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Urbanist-Bold',
    lineHeight: 16.8,
    color: '#000000',
  },

  buttonText: {
    fontFamily: 'Urbanist-Bold',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 21.6,
    textAlign: 'center',
    color: '#FFFFFF',
    padding: 15,
    position: 'absolute',
  },
  buttonGradient: {
    padding: 25,
    alignItems: 'center',
    borderRadius: 5,
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    gap: 7,
  },
  line: {
    fontFamily: 'Urbanist-Bold',
    marginTop: 5,
    flex: 0.35,
    height: 2,
    backgroundColor: '#99A1C6',
  },
  ImageIcon: {
    width: 36.27,
    height: 37,
  },
  containerIcn: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  buttonFooter: {
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 6,
    borderColor: '#4E67FF',
  },
  buttonTextFooter: {
    textAlign: 'center',
    color: '#4E67FF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TestSignup;
