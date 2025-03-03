import React from 'react';
import {Input, InputField} from '@gluestack-ui/themed';

export type HaInputFieldProps = {
  placeholder: string;
  value: string;
  onChange: (text: string) => void;
};

const HaInputField: React.FC<HaInputFieldProps> = ({placeholder, value, onChange}) => {
  return (
    <Input borderWidth={1} borderRadius={30} borderColor="$gray100" backgroundColor="$white100">
      <InputField
        placeholder={placeholder}
        textAlign="center"
        fontFamily="Poppins-Regular"
        fontWeight={400}
        lineHeight={21}
        fontSize={14}
        color={'$gray200'}
        value={value}
        onChangeText={onChange}
      />
    </Input>
  );
};

export default HaInputField;
