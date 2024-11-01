import React, {useRef, useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {MultiSelect, IMultiSelectRef} from 'react-native-element-dropdown';
import {TestSuite, TestCase, Tester} from '@rnoh/testerino';

const imageSource = require('../assets/react-native-logo.png');
const data = [
  {label: 'Item 1', value: '1', image: imageSource},
  {label: 'Item 2', value: '2', image: imageSource},
  {label: 'Item 3', value: '3', image: imageSource},
  {label: 'Item 4', value: '4', image: imageSource},
  {label: 'Item 5', value: '5', image: imageSource},
];

const Demo = () => {
  const [value, setValue] = useState<string[]>([]);
  const ref = useRef<IMultiSelectRef>(null);
  return (
    <>
      <View style={styles.actionBtn}>
        <Button
          onPress={() => {
            ref.current?.open();
          }}
          title="Open MultiSelect list"
        />
        <Button
          onPress={() => {
            ref.current?.close();
          }}
          title="Close MultiSelect list"
        />
      </View>
      <MultiSelect
        ref={ref}
        style={styles.MultiSelect}
        mode="default"
        labelField="label"
        valueField="value"
        data={data}
        search
        maxHeight={300}
        placeholder="请选择....."
        value={value}
        onChange={(item: any) => {
          setValue(item);
        }}
        searchField="label"
        activeColor="#FF8A2D2D"
      />
    </>
  );
};

export const MethodsTest = () => {
  return (
    <Tester>
      <TestSuite name="method">
        <TestCase itShould="静态方法">
          <Demo />
        </TestCase>
      </TestSuite>
    </Tester>
  );
};

const styles = StyleSheet.create({
  MultiSelect: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  actionBtn: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: '#000',
    padding: 10,
    gap: 10,
  },
});
