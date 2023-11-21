import React from 'react';
import { Text } from 'react-native';

interface TextProps {
  title: String;
}

export const RNText = ({ title }: TextProps) => {
  return <Text>{title}</Text>;
};
