import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './index';
import { ButtonProps, ButtonSize, ButtonType } from './button';
// 测试用例的demo 在控制台中执行npm run test就会执行当前用例
// test('our first react test case', () => {
//   const wrapper = render(<Button>nice</Button>);
//   const element = wrapper.queryAllByText('nice');
//   expect(element).toBeTruthy();
//   expect(element).toBeInTheDocument();
// });

const testProps = {
  btnType: ButtonType.Primary,
  size: ButtonSize.Large,
  className: 'klass',
};

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn(),
};
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
  it('测试不同参数下button的响应', () => {
    const wrapper = render(<Button {...testProps}>Nice</Button>);
    const element = wrapper.getByText('Nice');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('btn-primary btn-lg klass');
  });
  it('测试link', () => {
    const wrapper = render(
      <Button btnType={ButtonType.Link} href="http://dummyurl">
        Link
      </Button>
    );
    const element = wrapper.getByText('Link');
    expect(element).toBeInTheDocument();
    // 判断button是否为a标签
    expect(element.tagName).toEqual('A');
    expect(element).toHaveClass('btn btn-link');
  });
  it('测试button的禁用状态', () => {
    const wrapper = render(<Button {...disabledProps}>Nice</Button>);
    // 将其设为HTMLButtonElement 这样可以获取Button上面的属性
    const element = wrapper.getByText('Nice') as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.disabled).toBeTruthy();
    fireEvent.click(element);
    // 没有被调用
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
  
});
