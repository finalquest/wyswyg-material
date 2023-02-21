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
  componentProps: InternalComponentProps;
}

type ComponentTreeProps = {
  componentProps: InternalComponentProps;
  children: ReactNode;
};

const CompomentTreeContext = createContext<IComponentTreeContext>({
  componentProps: {} as InternalComponentProps,
  getProps: () => ({} as ComponentProps),
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

  const value = React.useMemo(
    () => ({
      componentProps,
      updateComponentProps,
      getProps,
    }),
    [componentProps, updateComponentProps, getProps]
  );

  return (
    <CompomentTreeContext.Provider value={value}>
      {children}
    </CompomentTreeContext.Provider>
  );
};

export const useTreeContextProps = () => useContext(CompomentTreeContext);
