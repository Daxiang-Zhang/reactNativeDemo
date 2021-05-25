/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import Video from 'react-native-video';
import {StyleSheet, View, Dimensions} from 'react-native';

const PW = Dimensions.get('window').width;
const PH = Dimensions.get('window').height;
const Home = () => {
  const [VW, setVW] = useState(PW);
  const [VH, setVH] = useState(PH);
  const getViewSize = ({w}) => {
    setVW(w.width);
    setVH(w.height);
  };
  useEffect(() => {
    Dimensions.addEventListener('change', getViewSize);
    return () => {
      Dimensions.removeEventListener('change', getViewSize);
    };
  });
  return (
    <>
      <Video
        source={{
          uri: 'https://cloud.video.taobao.com/play/u/3245834217/p/1/e/6/t/1/50253840389.mp4',
        }}
        style={{width: VW, height: VW / (16 / 9)}}
      />
    </>
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'relative',
    width: '100%',
    height: '56.25%',
  },
});

export default Home;
