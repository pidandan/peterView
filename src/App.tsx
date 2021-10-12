import React from 'react';
import Button, { ButtonSize, ButtonType } from './components/Button/button';
const App: React.FC = () => {
  return (
    <div className="App">
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
  );
};

export default App;
