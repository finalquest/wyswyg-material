import React, {
  useState,
  createContext,
  useContext,
  ReactNode,
  FC,
  useCallback,
} from 'react';
import { ComponentProps } from './ComponentInterface';

export interface InternalComponentProps {
  [key: string]: ComponentProps;
}

interface IComponentTreeContext {
  updateComponentProps: (key: string, props: ComponentProps) => void;
  getProps: (key: string) => ComponentProps;
  getSelectedComponentProps: () => ComponentProps;
  setSelectedComponent: (key: string) => void;
  updateComponentPropsByPath: (key: string, path: string[], value: any) => void;
  selectedComponent: string;
  componentProps: InternalComponentProps;
}

type ComponentTreeProps = {
  componentProps: InternalComponentProps;
  children: ReactNode;
};

const CompomentTreeContext = createContext<IComponentTreeContext>({
  componentProps: {} as InternalComponentProps,
  getProps: () => ({} as ComponentProps),
  selectedComponent: '',
  updateComponentPropsByPath: () => {},
  getSelectedComponentProps: () => ({} as ComponentProps),
  setSelectedComponent: () => {},
  updateComponentProps: () => {},
});

// wrapper for the provider
export const ComponentTreeProvider: FC<ComponentTreeProps> = ({
  componentProps: compProps,
  children,
}) => {
  const [componentProps, setComponentProps] = useState<InternalComponentProps>(
    compProps as InternalComponentProps
  );

  const [selectedComponent, setSelectedComponent] = useState<string>('');

  const getSelectedComponentProps = useCallback(
    () => componentProps[selectedComponent],
    [componentProps, selectedComponent]
  );

  const updateComponentProps = useCallback(
    () => (key: string, props: ComponentProps) => {
      if (key && props) {
        setComponentProps({ ...componentProps, [key]: props });
      }
    },
    [componentProps]
  );

  const getProps = useCallback(
    (key: string) => componentProps[key],
    [componentProps]
  );

  // update specific component props based on path array
  const updateComponentPropsByPath = useCallback(
    (key: string, path: string[], value: any) => {
      const props = getProps(key);
      let current = props;
      for (let i = 0; i < path.length - 1; i += 1) {
        current = current[path[i] as keyof ComponentProps] as ComponentProps;
      }
      current[path[path.length - 1] as keyof ComponentProps] = value;
      updateComponentProps()(key, props);
    },
    [getProps, updateComponentProps]
  );

  const value = React.useMemo(
    () => ({
      componentProps,
      updateComponentProps,
      getProps,
      setSelectedComponent,
      getSelectedComponentProps,
      updateComponentPropsByPath,
      selectedComponent,
    }),
    [
      componentProps,
      updateComponentProps,
      getProps,
      getSelectedComponentProps,
      selectedComponent,
      updateComponentPropsByPath,
    ]
  );

  return (
    <CompomentTreeContext.Provider value={value}>
      {children}
    </CompomentTreeContext.Provider>
  );
};

export const useTreeContextProps = () => useContext(CompomentTreeContext);
