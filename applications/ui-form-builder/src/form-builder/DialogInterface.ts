import { Element } from "./ElementInterface";
export interface TextFieldDiaglog {
    label : string;
    placeholder: string;
    required: boolean;
    minLength: number;
    maxLength: number;
    rows?: number;
  }

  export interface TextAreaDiaglog {
    label : string;
    placeholder: string;
    required: boolean;
    minRows: number;
    width: number;
  }

  
  export interface CheckBoxDiaglog {
    label : string;
    checked: boolean;
    default: boolean;
    required: boolean;
    error: string;
  }

  export interface SelectDiaglog {
    label : string;
    placeholder: string;
    multipleValues: boolean
    required: boolean;
    size: string,
    width: number,
    menuItems: {
      id: string
      selectDataLabel: string
      selectDataValue: string
    }[]; 
  }

  export interface ButtonDialog {
    label: string,
    theme: string,
    size: string,
  };

  export interface RadioButtonDialog  {
    label: string,
    options: string,
    radioItems: {
      radioButtonDataLabel: string
      radioButtonDataValue: string
    }[]; 
    required: boolean,
  };

  export interface ColumnDialog {
    label: string,
    columnItems: {
      id: string
      columnDataSize: string[],
      columnDataWidth: number
    }[],
  }

export interface TabsDialog {
  label: string,
  tabItems: {
    id: string
    tabsDataLabel: string
    tabsDataValue: string
  }[],
  tabcomponents: {
    label: string,
    key: string,
    inner_components: Element[]
  }[]
}