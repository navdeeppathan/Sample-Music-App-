import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import {ScrollView} from 'react-native-gesture-handler';
import BottomTab from './BottomTab';

const Home = () => {
  const images = [
    require('../assets/first.jpg'),
    require('../assets/second.jpg'),
    require('../assets/third.jpg'),
  ];
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      {/* header */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <Image source={require('../assets/header.png')} />
        <View style={{flexDirection: 'row', gap: 10}}>
          <Image
            style={{width: 30, height: 30}}
            source={require('../assets/search.png')}
          />
          <Image
            style={{width: 30, height: 30}}
            source={require('../assets/play.png')}
          />
          <Image
            style={{width: 30, height: 30}}
            source={require('../assets/notification.png')}
          />
        </View>
      </View>

      {/* //search */}
      <View style={{marginTop: 20, padding: 10}}>
        <View style={styles.inputbox}>
          <Image source={require('../assets/photo.png')} style={styles.image} />
          <TextInput
            style={styles.Input}
            onChangeText={text => handleCheckEmail(text)}
            placeholder="Write something here ..."
            autoCapitalize="none"
          />
          <Image style={{right: 35}} source={require('../assets/edit.png')} />
        </View>
      </View>

      {/* stories */}
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity>
          <View
            style={{
              width: 80,
              borderRadius: 40,
              padding: 2,
              marginLeft: 20,
              marginBottom: 5,
              marginTop: 15,
            }}>
            <Image
              style={{
                height: 70,
                width: 70,
                borderRadius: 35,
                resizeMode: 'contain',
              }}
              source={require('../assets/story.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.storyImage}>
            <Image
              style={styles.imageStory}
              source={require('../assets/story4.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.storyImage}>
            <Image
              style={styles.imageStory}
              source={require('../assets/story3.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              width: 70,
              borderWidth: 3,
              borderRadius: 40,
              padding: 2,
              marginLeft: 20,
              marginBottom: 5,
              marginTop: 15,
              borderColor: '#CECECE',
            }}>
            <Image
              style={styles.imageStory}
              source={require('../assets/story2.png')}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              width: 70,
              borderWidth: 3,
              borderRadius: 40,
              padding: 2,
              marginLeft: 20,
              marginBottom: 5,
              marginTop: 15,
              borderColor: '#CECECE',
            }}>
            <Image
              style={styles.imageStory}
              source={require('../assets/story2.png')}
            />
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView style={{flexGrow: 1, marginTop: 10}}>
        <View
          style={{
            marginBottom: 20,
            borderColor: '#FFFFFF',
            elevation: 0.2,
          }}>
          <View
            style={{
              marginLeft: 10,
              padding: 2,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', margin: 15}}>
              <Image
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 35,
                  marginTop: 4,
                }}
                source={require('../assets/images1.png')}
              />
              <View style={{marginLeft: 10, marginBottom: 5, gap: 1}}>
                <Text style={styles.nameText}>Ron Lach</Text>
                <Text style={styles.timeText}>3 Days ago</Text>
              </View>
            </View>
            <View>
              <TouchableOpacity>
                <Image
                  style={{width: 32, height: 32, borderRadius: 35}}
                  source={require('../assets/dots.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Image
              style={{width: '100%', height: 219}}
              source={require('../assets/images2.png')}
            />
            <Text style={styles.postText}>
              Lorem ipsum dolor amet, dolor consectetur adipiscing magna aliqua
              ...{' '}
            </Text>
            <View style={{flexDirection: 'row', marginLeft: 30}}>
              <Image
                style={{width: 14, height: 13}}
                source={require('../assets/circle.png')}
              />
              <Image
                style={{width: 14, height: 13}}
                source={require('../assets/redHeart.png')}
              />
              <Image
                style={{width: 14, height: 13}}
                source={require('../assets/like.png')}
              />

              <Image
                style={{width: 14, height: 13}}
                source={require('../assets/emoji.png')}
              />
              <Text style={styles.emojiText}>50K</Text>

              <View style={{flexDirection: 'row', marginLeft: 60}}>
                <Image
                  style={{width: 20, height: 20}}
                  source={require('../assets/message.png')}
                />
                <Text style={styles.commentText}>30</Text>
              </View>
              <View style={{flexDirection: 'row', marginLeft: 120, gap: 7}}>
                <Image
                  style={{width: 20, height: 20}}
                  source={require('../assets/bookmark.png')}
                />
                <Image
                  style={{width: 25, height: 25}}
                  source={require('../assets/send.png')}
                />
              </View>
            </View>
          </View>
        </View>

        {/* 2image */}
        <View
          style={{
            marginBottom: 20,
            borderColor: '#FFFFFF',
            elevation: 0.2,
          }}>
          <View
            style={{
              marginLeft: 10,
              padding: 2,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', margin: 15}}>
              <Image
                style={{width: 32, height: 32, borderRadius: 35, marginTop: 4}}
                source={require('../assets/images3.png')}
              />
              <View style={{marginLeft: 10, marginBottom: 5, gap: 1}}>
                <Text style={styles.nameText}>Ron Lach</Text>
                <Text style={styles.timeText}>3 Days ago</Text>
              </View>
            </View>
            <View>
              <TouchableOpacity>
                <Image
                  style={{width: 32, height: 32, borderRadius: 35}}
                  source={require('../assets/dots.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Image
              style={{width: '100%', height: 219}}
              source={require('../assets/images3.png')}
            />
            <Text style={styles.postText}>
              Lorem ipsum dolor amet, dolor consectetur adipiscing magna aliqua
              ...{' '}
            </Text>
            <View style={{flexDirection: 'row', marginLeft: 30}}>
              <Image
                style={{width: 14, height: 13}}
                source={require('../assets/circle.png')}
              />
              <Image
                style={{width: 14, height: 13}}
                source={require('../assets/redHeart.png')}
              />
              <Image
                style={{width: 14, height: 13}}
                source={require('../assets/like.png')}
              />

              <Image
                style={{width: 14, height: 13}}
                source={require('../assets/emoji.png')}
              />
              <Text style={styles.emojiText}>50K</Text>

              <View style={{flexDirection: 'row', marginLeft: 60}}>
                <Image
                  style={{width: 20, height: 20}}
                  source={require('../assets/message.png')}
                />
                <Text style={styles.commentText}>30</Text>
              </View>
              <View style={{flexDirection: 'row', marginLeft: 120, gap: 7}}>
                <Image
                  style={{width: 20, height: 20}}
                  source={require('../assets/bookmark.png')}
                />
                <Image
                  style={{width: 25, height: 25}}
                  source={require('../assets/send.png')}
                />
              </View>
            </View>
          </View>
        </View>

        {/* 3image */}
        <View
          style={{
            marginBottom: 20,
            borderColor: '#FFFFFF',
            elevation: 0.2,
          }}>
          <View
            style={{
              marginLeft: 10,
              padding: 2,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', margin: 15}}>
              <Image
                style={{width: 32, height: 32, borderRadius: 35, marginTop: 4}}
                source={require('../assets/images4.png')}
              />
              <View style={{marginLeft: 10, marginBottom: 5, gap: 1}}>
                <Text style={styles.nameText}>Ron Lach</Text>
                <Text style={styles.timeText}>3 Days ago</Text>
              </View>
            </View>
            <View>
              <TouchableOpacity>
                <Image
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 35,
                  }}
                  source={require('../assets/dots.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Image
              style={{width: '100%', height: 219}}
              source={require('../assets/images4.png')}
            />
            <Text style={styles.postText}>
              Lorem ipsum dolor amet, dolor consectetur adipiscing magna aliqua
              ...{' '}
            </Text>
            <View style={{flexDirection: 'row', marginLeft: 30}}>
              <Image
                style={{width: 14, height: 13}}
                source={require('../assets/circle.png')}
              />
              <Image
                style={{width: 14, height: 13}}
                source={require('../assets/redHeart.png')}
              />
              <Image
                style={{width: 14, height: 13}}
                source={require('../assets/like.png')}
              />

              <Image
                style={{width: 14, height: 13}}
                source={require('../assets/emoji.png')}
              />
              <Text style={styles.emojiText}>50K</Text>

              <View style={{flexDirection: 'row', marginLeft: 60}}>
                <Image
                  style={{width: 20, height: 20}}
                  source={require('../assets/message.png')}
                />
                <Text style={styles.commentText}>30</Text>
              </View>
              <View style={{flexDirection: 'row', marginLeft: 120, gap: 7}}>
                <Image
                  style={{width: 20, height: 20}}
                  source={require('../assets/bookmark.png')}
                />
                <Image
                  style={{width: 25, height: 25}}
                  source={require('../assets/send.png')}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* bottomTab */}
      <View>
        <BottomTab />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStory: {
    height: 60,
    width: 60,
    borderRadius: 35,
    resizeMode: 'contain',
  },
  storyImage: {
    width: 70,
    borderWidth: 3,
    borderRadius: 40,
    padding: 2,
    marginLeft: 20,
    marginBottom: 5,
    marginTop: 15,
    borderColor: '#6A8AF7',
  },
  nameText: {
    fontFamily: 'Urbanist-Bold',
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
  },
  timeText: {
    fontFamily: 'Urbanist-Bold',
    fontSize: 12,
  },
  emojiText: {
    fontSize: 14,
    bottom: 2,
    fontFamily: 'Urbanist-Bold',
    fontWeight: '500',
    color: '#000000',
  },
  commentText: {
    fontSize: 14,
    bottom: 2,
    fontFamily: 'Urbanist-Bold',
    fontWeight: '500',
    color: '#000000',
    marginLeft: 5,
  },
  postText: {
    margin: 20,
    fontWeight: '500',
    fontFamily: 'Urbanist-Bold',
    color: '#000000',
  },
  inputFields: {
    marginBottom: 12,
    top: 20,
    left: 33,
    height: 17,
    width: '85%',
    gap: 20,
  },
  nameField: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Urbanist-Bold',
    lineHeight: 16.8,
    color: '#000000',
  },
  inputbox: {
    width: '100%',
    height: 60,
    borderRadius: 0.2,
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 0.3,
    borderColor: '#FFFFFF',
    elevation: 0.7,
  },
  image: {
    marginRight: 10,
    marginLeft: 10,
    width: 32,
    height: 32,
  },
  Input: {
    fontFamily: 'Urbanist-Bold',
    color: '#0F1632',
    fontSize: 15,
    width: '85%',
    padding: 10,
  },
});

export default Home;
