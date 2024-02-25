import React from 'react';
import {TextProps as RNTextProps} from 'react-native';
import * as S from './styles';

export interface TextProps extends RNTextProps {
  preset?: S.TextVariants;
  bold?: boolean;
  semibold?: boolean;
  italic?: boolean;
}

export default function Text({
  preset = 'paragraphMedium',
  bold,
  semibold,
  italic,
  ...props
}: TextProps) {
  console.log(preset);

  return (
    <S.Text
      preset={preset}
      bold={bold}
      semibold={semibold}
      italic={italic}
      {...props}>
      teste
    </S.Text>
  );
}
