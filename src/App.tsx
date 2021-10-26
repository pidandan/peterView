import React from 'react';
import Button, { ButtonSize, ButtonType } from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/MenuItem';
const App: React.FC = () => {
  return (
    <div className="App">
      <div
        style={{ margin: '40px', padding: '30px', border: '1px solid #e6e6e6' }}
      >
        <h3>Button组件</h3>
        <Button disabled>hello world</Button>
        <Button size={ButtonSize.Large} btnType={ButtonType.Danger}>
          hello world
        </Button>
        <Button size={ButtonSize.Large} btnType={ButtonType.Primary}>
          hello world
        </Button>
        <Button size={ButtonSize.Large} btnType={ButtonType.Danger}>
          hello world
        </Button>
        <Button btnType={ButtonType.Link} href="www.baidu.com">
          Link
        </Button>
      </div>
      <div
        style={{ margin: '40px', padding: '30px', border: '1px solid #e6e6e6' }}
      >
        <h3>Menu组件</h3>
        <Menu defaultIndex={0}>
          <MenuItem>1</MenuItem>
          <MenuItem>2</MenuItem>
          <MenuItem>3</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default App;
