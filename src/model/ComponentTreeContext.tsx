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
  addChild: (child: ComponentProps, key: string) => void;
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
  addChild: () => {},
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

  const addChild = useCallback(
    (childProps: ComponentProps, name: string) => {
      const newComponent = { ...componentProps };
      newComponent[name] = childProps;
      newComponent[selectedComponent].childs ? newComponent[selectedComponent].childs.push(name) : newComponent[selectedComponent].childs = [name];
      setComponentProps(newComponent); 
    }, [componentProps, selectedComponent]
  );


  const getProps = useCallback(
    (key: string) => { return {...componentProps[key]} },
    [componentProps]
  );

  // update specific component props based on path array
  // const updateComponentPropsByPath = useCallback(
  //   (key: string, path: string[], value: any) => {
  //     const props = getProps(key);
  //     let current = props;
  //     for (let i = 0; i < path.length - 1; i += 1) {
  //       current = current[path[i] as keyof ComponentProps] as ComponentProps;
  //     }
  //     current[path[path.length - 1] as keyof ComponentProps] = value;
  //     updateComponentProps()(key, props);
  //   },
  //   [getProps, updateComponentProps]
  // );
  //
  const updateComponentPropsByPath = useCallback(
  (key: string, path: string[], value: any) => {
    setComponentProps((prevState) => {
      const updatedProps = { ...prevState };
      const target = updatedProps[key];

      if (!target) return prevState;

      const updateNestedProps = (
        obj: ComponentProps,
        nestedPath: string[],
        nestedValue: any
      ): ComponentProps => {
        if (nestedPath.length === 1) {
          return { ...obj, [nestedPath[0]]: nestedValue };
        } else {
          const nextKey = nestedPath.shift() as keyof ComponentProps;
          return {
            ...obj,
            [nextKey]: updateNestedProps(obj[nextKey] as ComponentProps, nestedPath, nestedValue),
          };
        }
      };

      updatedProps[key] = updateNestedProps(target, [...path], value);
      return updatedProps;
    });
  },
  []
);


  const value = React.useMemo(
    () => ({
      componentProps,
      updateComponentProps,
      getProps,
      setSelectedComponent,
      addChild,
      getSelectedComponentProps,
      updateComponentPropsByPath,
      selectedComponent,
    }),
    [
      componentProps,
      updateComponentProps,
      getProps,
      addChild,
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
