import React, { useLayoutEffect, useRef, useState } from 'react';

import {
  ComponentInterface,
  CompomentAttributes,
} from '@/model/ComponentInterface';
import { useTreeContextProps } from '@/model/ComponentTreeContext';
import InfoAttBox from './InfoAttBox';

const ElementComponent: React.FC<ComponentInterface> = ({ id }) => {
  const ref = useRef<HTMLInputElement>(null);
  const { getProps } = useTreeContextProps();
  const { props, type, childs } = getProps(id);
  const RenderComponent = type;

  const [componentAttributes, setComponentAttributes] =
    useState<CompomentAttributes>({
      height: 0,
      width: 0,
      x: 0,
      y: 0,
    });

  useLayoutEffect(() => {
    const updateSize = () => {
      if (ref.current) {
        const {
          height = 0,
          width = 0,
          x = 0,
          y = 0,
        } = ref.current.getBoundingClientRect();
        setComponentAttributes({ height, width, x, y });
      }
    };
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const handleOnclick = () => {
    console.log('ElementComponent.tsx: handleOnclick()');
  };

  return (
    <RenderComponent ref={ref} {...props} onClick={handleOnclick}>
      {childs}
      {!childs && (
        <InfoAttBox
          x={componentAttributes.x}
          y={componentAttributes.y}
          width={componentAttributes.width}
          height={componentAttributes.height}
        />
      )}
    </RenderComponent>
  );
};

export default ElementComponent;
