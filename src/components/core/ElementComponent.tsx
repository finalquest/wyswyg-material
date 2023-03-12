import React, { useLayoutEffect, useRef, useState } from 'react';

import {
  ComponentInterface,
  CompomentAttributes,
} from '@/model/ComponentInterface';
import { useTreeContextProps } from '@/model/ComponentTreeContext';
import InfoAttBox from './InfoAttBox';
import getElementByType from './ElementResolver';

const ElementComponent: React.FC<ComponentInterface> = ({ id }) => {
  const ref = useRef<HTMLInputElement>(null);
  const { getProps, setSelectedComponent, selectedComponent } =
    useTreeContextProps();
  console.log(id);
  const { props, type, childs } = getProps(id);
  console.log(props, type, childs);
  const RenderComponent = getElementByType(type);

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

  const handleOnclick = (ev: any) => {
    setSelectedComponent(id);

    ev.stopPropagation();
  };

  const childComponents = childs?.map((child) => (
    <ElementComponent key={child} id={child} />
  ));

  const showInfoBox = selectedComponent === id || !childs || childs.length === 0;
  console.log(props);
  return (
    <RenderComponent ref={ref} {...props} onClick={handleOnclick}>
      {childComponents}
      {showInfoBox && (
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
