export interface CompomentAttributes {
  width: number;
  height: number;
  x: number;
  y: number;
}

export interface ComponentInterface {
  // parent?: ComponentInterface | null;
  // childs?: ComponentInterface[];
  // props:;
  // attributes?: CompomentAttributes;
  // type: any;
  stringRepresentation?: string;
  id: string;
}

export interface ComponentProps {
  parent?: ComponentInterface | null;
  childs?: string[];
  props: { [key: string]: any };
  attributes?: CompomentAttributes;
  type: string;
}
