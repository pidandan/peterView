import React from 'react';
import classNames from 'classnames';
export interface MenuItemProps {
  // 和Menu相对应用来确认当前item是否高亮
  index?: number;
  // menuItem是否禁用
  disable?: boolean;
  // 样式名
  className?: string;
  // menuItem的行内样式
  style?: React.CSSProperties;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  // 将props参数信息罗列出来
  const { index, disable, className, style, children } = props;
  // 创建item的样式
  const classes = classNames('menu-item', className, {
    'is-disable': disable,
  });
  return (
    <li className={classes} style={style}>
      {children}
    </li>
  );
};
export default MenuItem;
