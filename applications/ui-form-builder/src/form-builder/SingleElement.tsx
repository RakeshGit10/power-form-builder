import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Element } from "./ElementInterface";
import { Draggable } from "react-beautiful-dnd";
import { FaEdit } from "react-icons/fa";

import "./styles.css";

import {
  Button,
  Checkbox,
  RadioGroup,
  Select,
  TextFieldSelect,
  TextareaAutosize,
  TextField,
  Tabs,
  Grid,
  GridItem,
} from "@power-form-builder/ui-components";
import TextFieldData from "./components/TextFieldData";
import {
  ButtonDialog,
  CheckBoxDiaglog,
  RadioButtonDialog,
  SelectDiaglog,
  TabsDialog,
  TextAreaDiaglog,
  TextFieldDiaglog,
} from "./DialogInterface";
import TextAreaData from "./components/TextAreaData";
import CheckBoxData from "./components/CheckBoxData";
import SelectData from "./components/TextFieldSelectData";
import ButtonData from "./components/ButtonData";
import RadioButtonData from "./components/RadioButtonData";
import TabsData from "./components/TabsData";
import ColumnData from "./components/ColumData";

type Props = {
  id: string;
  selectDataLabel: string;
  selectDataValue: string;
}[];

type TabProps = {
  id: string;
  tabsDataLabel: string;
  tabsDataValue: string;
}[];

type TabComponentProps = {
  label: string;
  key: string;
  inner_components: Element[];
}[];

type ColumnProps = {
  label: string;
  columnItems: {
    id: string;
    columnDataSize: string[];
    columnDataWidth: number;
  }[];
};

type RadioProps = {
  radioButtonDataLabel: string;
  radioButtonDataValue: string;
}[];

const SingleElement: React.FC<{
  show: boolean;
  index: number;
  element: Element;
  elements: Array<Element>;
  setElements: React.Dispatch<React.SetStateAction<Array<Element>>>;
}> = ({ show, index, element, elements, setElements }) => {
  const textFieldValues: TextFieldDiaglog = {
    label: "TextField",
    required: false,
    placeholder: "Enter TextField",
    minLength: 0,
    maxLength: 0,
  };

  const passwordValues: TextFieldDiaglog = {
    label: "Password",
    required: false,
    placeholder: "Enter Password",
    minLength: 0,
    maxLength: 0,
  };

  const emailValues: TextFieldDiaglog = {
    label: "Email",
    required: false,
    placeholder: "Enter Email",
    minLength: 0,
    maxLength: 0,
  };

  const textAreaValues: TextFieldDiaglog = {
    label: "TextArea",
    required: false,
    placeholder: "Enter TextArea",
    minLength: 0,
    maxLength: 0,
    rows: 0,
  };

  const checkBoxValues: CheckBoxDiaglog = {
    label: "Checkbox",
    required: false,
    default: false,
    checked: false,
    error: "",
  };

  const buttonValues: ButtonDialog = {
    label: "Button",
    theme: "secondary",
    size: "large",
  };

  const menuItemsData: Props = [
    { id: "Select1", selectDataLabel: "Select1", selectDataValue: "Select1" },
  ];

  const tabsItemsData: TabProps = [
    { id: "Tab1", tabsDataLabel: "Tab1", tabsDataValue: "Tab1" },
  ];

  const tabComponents: TabComponentProps = [
    {
      label: "TabItem1",
      key: "tabItem1",
      inner_components: [
        {
          id: 1011,
          element: "Tabs",
          label: "Ths",
        },
      ],
    },
  ];

  const selectValues: SelectDiaglog = {
    label: "Select",
    placeholder: "Select the option",
    multipleValues: false,
    required: false,
    size: "medium",
    width: 220,
    menuItems: menuItemsData,
  };

  const tabValues: TabsDialog = {
    label: "",
    tabItems: tabsItemsData,
    tabcomponents: tabComponents,
  };

  const radioItemsData: RadioProps = [
    { radioButtonDataLabel: "Male", radioButtonDataValue: "Male" },
    { radioButtonDataLabel: "Female", radioButtonDataValue: "Female" },
  ];

  const radiobuttonValues: RadioButtonDialog = {
    label: "RadioButton",
    options: "",
    radioItems: radioItemsData,
    required: false,
  };

  const columnValues: ColumnProps = {
    label: "Column",
    columnItems: [
      {
        id: "column1",
        columnDataSize: ["md"],
        columnDataWidth: 220,
      },
    ],
  };

  const [edit, setEdit] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  });

  const handleDelete = (id: number) => {
    setElements(elements.filter((element) => element.id !== id));
  };

  //TextField
  const [open, setOpen] = React.useState(show);

  const handleClickOpen = () => {
    console.log("Opened");
    console.log(open);
    setOpen(!open);
  };

  const handleOpen = () => {
    setOpen(!open);
    if (element.element === "Button") {
      console.log(buttonValues);
      console.log("JSON", JSON.stringify(buttonValues));
      element.label = buttonValues.label;
      element.theme = buttonValues.theme.toString();
      element.size = buttonValues.size.toString();
    } else if (element.element === "TextField") {
      console.log(textFieldValues.label);
      console.log("JSON", JSON.stringify(textFieldValues));
      element.label = textFieldValues.label;
      element.placeholder = textFieldValues.placeholder;
      element.maxLength = textFieldValues.maxLength;
      element.minLength = textFieldValues.minLength;
      element.required = textFieldValues.required;
    } else if (element.element === "Password") {
      console.log(textFieldValues.label);
      console.log("JSON", JSON.stringify(textFieldValues));
      element.label = passwordValues.label;
      element.placeholder = passwordValues.placeholder;
      element.maxLength = passwordValues.maxLength;
      element.minLength = passwordValues.minLength;
      element.required = passwordValues.required;
    } else if (element.element === "Email") {
      console.log(textFieldValues.label);
      console.log("JSON", JSON.stringify(textFieldValues));
      element.label = emailValues.label;
      element.placeholder = emailValues.placeholder;
      element.maxLength = emailValues.maxLength;
      element.minLength = emailValues.minLength;
      element.required = emailValues.required;
    } else if (element.element === "TextArea") {
      console.log(textAreaValues);
      console.log("JSON", JSON.stringify(textAreaValues));
      element.label = textAreaValues.label;
      element.placeholder = textAreaValues.placeholder;
      element.rows = textAreaValues.rows;
      element.maxLength = textAreaValues.maxLength;
      element.minLength = textAreaValues.minLength;
      element.required = textAreaValues.required;
    } else if (element.element === "Select") {
      console.log(selectValues);
      console.log("JSON", JSON.stringify(selectValues));
      element.label = selectValues.label;
      element.placeholder = selectValues.placeholder;
      element.multipleValues = selectValues.multipleValues;
      element.menuItems = selectValues.menuItems;
      element.required = selectValues.required;
      element.size = selectValues.size.toString();
      element.width = selectValues.width;
    } else if (element.element === "CheckBox") {
      console.log(checkBoxValues);
      console.log("JSON", JSON.stringify(checkBoxValues));
      element.label = checkBoxValues.label;
      element.default = checkBoxValues.default;
      element.error = checkBoxValues.error;
      element.required = checkBoxValues.required;
    } else if (element.element === "RadioButton") {
      console.log(radiobuttonValues);
      console.log("JSON", JSON.stringify(radiobuttonValues));
      element.label = radiobuttonValues.label;
      element.options = radiobuttonValues.options;
      element.radioItems = radiobuttonValues.radioItems;
      element.required = radiobuttonValues.required;
    } else if (element.element === "Tabs") {
      console.log(tabValues);
      console.log("JSON", JSON.stringify(tabValues));
      element.label = tabValues.label;
      element.tabItems = tabValues.tabItems;
      element.tabcomponents = tabValues.tabcomponents;
    } else if (element.element === "Column") {
      console.log(columnValues);
      console.log("JSON", JSON.stringify(columnValues));
      element.label = columnValues.label;
      element.columnItems = columnValues.columnItems;
    }
  };

  const handleClose = () => {
    console.log(element.element);
    handleDelete(element.id);
    setOpen(!open);
    if (element.element === "Button") {
      console.log(buttonValues);
      console.log("JSON", JSON.stringify(buttonValues));
    } else if (element.element === "TextField") {
      console.log(textFieldValues.label);
      console.log("JSON", JSON.stringify(textFieldValues));
    } else if (element.element === "Password") {
      console.log(passwordValues.label);
      console.log("JSON", JSON.stringify(passwordValues));
    } else if (element.element === "Email") {
      console.log(emailValues.label);
      console.log("JSON", JSON.stringify(emailValues));
    } else if (element.element === "TextArea") {
      console.log(textAreaValues);
      console.log("JSON", JSON.stringify(textAreaValues));
    } else if (element.element === "Select") {
      console.log(selectValues);
      console.log("JSON", JSON.stringify(selectValues));
    } else if (element.element === "CheckBox") {
      console.log(checkBoxValues);
      console.log("JSON", JSON.stringify(checkBoxValues));
    } else if (element.element === "RadioButton") {
      console.log(radiobuttonValues);
      console.log("JSON", JSON.stringify(radiobuttonValues));
    } else if (element.element === "Column") {
      console.log(columnValues);
      console.log("JSON", JSON.stringify(columnValues));
    } else if (element.element === "Tabs") {
      console.log(tabValues);
      console.log("JSON", JSON.stringify(tabValues));
    }
    setEdit(!edit);
  };

  // Final TextField
  const [textFieldValue, setTextFieldValue] = useState("");

  const handleTextFieldValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextFieldValue(event.target.value);
    console.log(textFieldValue);
  };

  // Final Password
  const [passwordValue, setPasswordValue] = useState("");

  const handlePasswordValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(event.target.value);
    console.log(passwordValue);
  };

  // Final Email
  const [emailValue, setEmailValue] = useState("");

  const handleEmailValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value);
    console.log(emailValue);
  };

  //Final TextArea
  const [textAreaValue, setTextAreaValue] = useState("");

  const handleTextAreaValue = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTextAreaValue(event.target.value);
    console.log(textAreaValue);
  };

  //Final Checkbox
  const [checked, setChecked] = useState(false);
  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  //Final Select
  const [selectData, setSelectData] = useState<string[]>([]);

  const handleSelectData = (event: any) => {
    const selectvalue = event.target.value;
    setSelectData(
      typeof selectvalue === "string" ? selectvalue.split(",") : selectvalue
    );
  };

  //Final Button
  const handleButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button Clicked");
  };

  //Final
  const [radioValue, setRadioValue] = useState("");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue(event.target.value);
  };

  const [textFieldStatus, setTextFieldStatus] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <Draggable draggableId={element.id.toString()} index={index}>
      {(provided, snapshot) => (
        <form
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`elements__single ${snapshot.isDragging ? "drag" : ""}`}
          onMouseLeave={() => setShowDropdown(false)}
          onMouseOver={() => setShowDropdown(true)}
          // style={{ width: "166px" }}
        >
          <>
            {element.element === "TextField" ? (
              <>
                <TextFieldData
                  open={open}
                  handleClose={handleClose}
                  textFieldValues={textFieldValues}
                  handleOpen={handleOpen}
                  element={element.element}
                  textFieldStatus={textFieldStatus}
                />
                <TextField
                  label={textFieldValues.label}
                  required={textFieldValues.required}
                  placeholder={textFieldValues.placeholder}
                  value={textFieldValue}
                  onChange={handleTextFieldValue}
                  minLength={textFieldValues.minLength}
                  maxLength={textFieldValues.maxLength}
                  // type="password"
                ></TextField>
              </>
            ) : element.element === "TextArea" ? (
              <>
                <TextFieldData
                  open={open}
                  handleClose={handleClose}
                  textFieldValues={textAreaValues}
                  handleOpen={handleOpen}
                  element={element.element}
                  textFieldStatus={textFieldStatus}
                ></TextFieldData>

                <TextField
                  label={textAreaValues.label}
                  required={textAreaValues.required}
                  placeholder={textAreaValues.placeholder}
                  value={textAreaValue}
                  onChange={handleTextAreaValue}
                  rows={textAreaValues.rows}
                  minLength={textAreaValues.minLength}
                  maxLength={textAreaValues.maxLength}
                  multiline={true}
                ></TextField>
              </>
            ) : element.element === "Password" ? (
              <>
                <TextFieldData
                  open={open}
                  element={element.element}
                  handleClose={handleClose}
                  textFieldValues={passwordValues}
                  handleOpen={handleOpen}
                  textFieldStatus={textFieldStatus}
                />

                <TextField
                  label={passwordValues.label}
                  required={passwordValues.required}
                  placeholder={passwordValues.placeholder}
                  value={passwordValue}
                  onChange={handlePasswordValue}
                  minLength={passwordValues.minLength}
                  maxLength={passwordValues.maxLength}
                  type="password"
                ></TextField>
              </>
            ) : element.element === "Email" ? (
              <>
                <TextFieldData
                  open={open}
                  element={element.element}
                  handleClose={handleClose}
                  textFieldValues={emailValues}
                  handleOpen={handleOpen}
                  textFieldStatus={textFieldStatus}
                />

                <TextField
                  label={emailValues.label}
                  required={emailValues.required}
                  placeholder={emailValues.placeholder}
                  value={emailValue}
                  onChange={handleEmailValue}
                  minLength={emailValues.minLength}
                  maxLength={emailValues.maxLength}
                  type="email"
                ></TextField>
              </>
            ) : element.element === "Checkbox" ? (
              <>
                <CheckBoxData
                  open={open}
                  handleClose={handleClose}
                  checkBoxValues={checkBoxValues}
                  handleOpen={handleOpen}
                ></CheckBoxData>

                <Checkbox
                  label={checkBoxValues.label}
                  required={checkBoxValues.required}
                  checked={checkBoxValues.default}
                  onChange={handleCheck}
                />
              </>
            ) : element.element === "Select" ? (
              <>
                <SelectData
                  open={open}
                  handleClose={handleClose}
                  selectValues={selectValues}
                  handleOpen={handleOpen}
                ></SelectData>

                <Select
                  label={selectValues.label}
                  placeholder={selectValues.placeholder}
                  menuItems={menuItemsData}
                  multiple={selectValues.multipleValues}
                  value={selectData}
                  onChange={handleSelectData}
                  size={selectValues.size === "small" ? "small" : "medium"}
                  required={selectValues.required}
                  width={selectValues.width}
                />
              </>
            ) : element.element === "Button" ? (
              <>
                <ButtonData
                  open={open}
                  handleClose={handleClose}
                  buttonValues={buttonValues}
                  handleOpen={handleOpen}
                ></ButtonData>

                <Button
                  label={buttonValues.label}
                  color={
                    buttonValues.size === "primary"
                      ? "primary"
                      : buttonValues.size === "secondary"
                      ? "secondary"
                      : buttonValues.size === "info"
                      ? "info"
                      : buttonValues.size === "success"
                      ? "success"
                      : buttonValues.size === "warning"
                      ? "warning"
                      : buttonValues.size === "error"
                      ? "error"
                      : "inherit"
                  }
                  size={
                    buttonValues.size === "small"
                      ? "small"
                      : buttonValues.size === "medium"
                      ? "medium"
                      : "large"
                  }
                  onClick={handleButton}
                />
              </>
            ) : element.element === "RadioButton" ? (
              <>
                <RadioButtonData
                  open={open}
                  handleClose={handleClose}
                  radiobuttonValues={radiobuttonValues}
                  handleOpen={handleOpen}
                />

                <RadioGroup
                  label={radiobuttonValues.label}
                  options={
                    radiobuttonValues.options === "top"
                      ? "top"
                      : radiobuttonValues.options === "bottom"
                      ? "bottom"
                      : radiobuttonValues.options === "start"
                      ? "start"
                      : "end"
                  }
                  radioItems={radiobuttonValues.radioItems}
                  required={radiobuttonValues.required}
                  value={radioValue}
                  onChange={handleRadioChange}
                />
              </>
            ) : element.element === "Column" ? (
              <>
                <ColumnData
                  open={open}
                  handleClose={handleClose}
                  columnValues={columnValues}
                  handleOpen={handleOpen}
                />
                <Grid>
                  <GridItem md={6}>
                    <>Column1</>
                  </GridItem>
                  <GridItem md={6}>
                    <>Column2</>
                  </GridItem>
                </Grid>
              </>
            ) : element.element === "Tabs" ? (
              <>
                <TabsData
                  open={open}
                  handleClose={handleClose}
                  tabValues={tabValues}
                  handleOpen={handleOpen}
                ></TabsData>
                <Tabs tabItems={tabValues.tabItems}>
                  <>label</>
                </Tabs>
              </>
            ) : (
              <>
                <h1>Not Valid Component</h1>
              </>
            )}
            {showDropdown ? (
              <>
                <span
                  className="icon"
                  onClick={() => {
                    setEdit(!edit);
                    handleClickOpen();
                  }}
                >
                  {edit ? <AiFillEdit /> : <FaEdit />}
                </span>

                <span className="icon" onClick={() => handleDelete(element.id)}>
                  <AiFillDelete />
                </span>
              </>
            ) : (
              <></>
            )}
          </>
        </form>
      )}
    </Draggable>
  );
};

export default SingleElement;
