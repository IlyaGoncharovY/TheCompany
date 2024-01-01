import React, {FC, useEffect, useRef, useState} from 'react';

import s from './CommonContainer.module.scss';

interface CommonContainerProps {
  headerComponent: React.ReactNode;
  renderItem: (item: any) => React.ReactNode;
  items: any[];
}

/**
 * container component for infinity scroll
 * @param headerComponent
 * @param renderItem
 * @param items
 * @constructor
 */
export const CommonContainer: FC<CommonContainerProps> = ({ headerComponent, renderItem, items }) => {
  const anchorRef = useRef<HTMLDivElement>(null);
  const [autoScrollActive, setAutoScrollActive] = useState<boolean>(true);

  const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const element = e.currentTarget;
    if (Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 300) {
      !autoScrollActive && setAutoScrollActive(true);
    } else {
      autoScrollActive && setAutoScrollActive(false);
    }
  };

  useEffect(() => {
    if (!autoScrollActive) {
      anchorRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    return () => {
      setAutoScrollActive(false);
    };
  }, [autoScrollActive, items]);

  return (
    <div className={s.tableContainer}>
      <table>
        {headerComponent}
        <tbody onScroll={scrollHandler}>
          {items.map((item) => (
            <React.Fragment key={item.id}>{renderItem(item)}</React.Fragment>
          ))}
        </tbody>
      </table>
      <div ref={anchorRef} />
    </div>
  );
};
