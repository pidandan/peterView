import React from 'react';
import classNames from 'classnames';
type MenuMode = 'horizontal' | 'vertical';
export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  // 属于给定的常量 用于确定meu是横向还是纵向
  mode?: MenuMode;
  // 可以使用自带的style style的属性使用React自带的CSSProperties来进行属性约束
  style?: React.CSSProperties;
  // 点击事件
  onSelect?: (selectedIndex: number) => void;
}
const Menu: React.FC<MenuProps> = (props) => {
  const { defaultIndex, className, mode, style, children } = props;
  const classes = classNames('peter-menu', className, {
    'menu-vertical': mode === 'vertical',
  });
  return (
    <ul className={classes} style={style}>
      {/* 自定义的menuItem */}
      {children}
    </ul>
  );
};
Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal',
};
export default Menu;
