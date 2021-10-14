import React from 'react';
import { render } from '@testing-library/react';
import Button from './index';
// 测试用例的demo 在控制台中执行npm run test就会执行当前用例
// test('our first react test case', () => {
//   const wrapper = render(<Button>nice</Button>);
//   const element = wrapper.queryAllByText('nice');
//   expect(element).toBeTruthy();
//   expect(element).toBeInTheDocument();
// });

// 测试用例的描述 describe第一个参数字符串，用来解释说明当前用例的具体描述，第二个参数是回调方法，用来说明回调方法中要执行的动作
describe('test Button component', () => {
  // it和test是一样的作用，第一个参数用来说明单条测试用例的说明 第二个参数回调函数，用来说明要执行的动作
  it('shoud render the correct default button', () => {
    const wrapper = render(<Button>Nice</Button>);
    // getByText返回的是一个Element
    const element = wrapper.getByText('Nice');
    // 获取到button按钮的dom节点
    expect(element).toBeInTheDocument();
    // 判断我们拿到的dom节点是个BUTTON
    expect(element.tagName).toEqual('BUTTON');
    // 判断当前dom节点是否包含下面的class内容
    expect(element).toHaveClass('btn btn-default');
  });
  it('测试不同参数下button的响应', () => {});
  it('测试link', () => {});
  it('测试button的禁用状态', () => {});
});
