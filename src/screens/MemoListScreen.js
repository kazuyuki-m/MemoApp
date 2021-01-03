import React from 'react';
import Appbar from '../components/Appbar';
import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

const MemoListScreen = ({
  navigation,
}) => {
  return (
    <>
      <MemoList navigation={navigation} />
      <CircleButton name="plus" onPress={() => navigation.navigate('MemoEditScreen')} />
    </>
  );
};

export default MemoListScreen;
