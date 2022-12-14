import React, { FormEvent, useState } from "react";
import {
  TextField,
  TextareaAutosize,
  Select,
  RadioGroup,
  Checkbox,
  Button,
  Tabs,
} from "@power-form-builder/ui-components";
import { Grid, GridItem } from "@power-form-builder/ui-components";
import { FormJson } from "../form-builder/ElementInterface";
import { useLocation } from "react-router-dom";

function MaterialForm() {
  const location = useLocation();
  const { formData } = location.state || {};
  const [formJsonData, setFormJsonData] = useState<FormJson>(formData);

  const [val, setVal] = React.useState({
    firstname: "",
    email: "",
    password: "",
    address: "",
    gender: "",
  });

  //Final Select
  const [selectData, setSelectData] = useState<string[]>([]);

  const handleSelectData = (event: any) => {
    const selectvalue = event.target.value;
    setSelectData(
      typeof selectvalue === "string" ? selectvalue.split(",") : selectvalue
    );
    console.log("Select Value", selectvalue);
  };

  const [checkbox, setCheckbox] = React.useState("");
  const [checked, setChecked] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [emailHelperText, setEmailHelperText] = React.useState("");

  const onHandleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | any
  ) => {
    setVal({
      ...val,
      [e.target.name]: e.target.value,
    });
    console.log("e.target.value", e.target.value);

    if (
      val.firstname !== "" &&
      val.email !== "" &&
      val.password !== "" &&
      val.address !== "" &&
      val.gender !== ""
    ) {
      console.log("No Error");
      setError(false);
      setHelperText("");
    } else if (e.target.name === "email") {
      var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (regex.test(e.target.value)) {
        setEmailHelperText("");
      } else {
        setEmailHelperText("Not Valid Email");
        setError(true);
      }
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Checkbox");
    setChecked(event.target.checked);
    setCheckbox(event.target.value);
    console.log("Checkbox ValuesL", checkbox, checked);
  };

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("select", val, "checkbox", checkbox);
    var regex1 = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (
      val.firstname !== "" ||
      (val.email !== "" && regex1.test(val.email)) ||
      val.password !== "" ||
      val.address !== "" ||
      val.gender !== "" ||
      checkbox !== "" ||
      selectData.length !== 0
    ) {
      console.log("Submit Data");
      setError(false);
      setHelperText("");
      setShow(true);
    } else {
      console.log("Submit Data");
      setError(true);
      setHelperText("required");
    }
  };
  const resetBtn = () => {
    setVal({
      firstname: "",
      email: "",
      password: "",
      address: "",
      gender: "",
    });
    setSelectData([""]);
    setCheckbox("");
    setChecked(false);
  };
  return (
    <>
      {formJsonData.title !== "" ? (
        <form onSubmit={submitForm}>
          <>
            {console.log(
              "values.....",
              val,
              "Error",
              error,
              "Multiple ",
              selectData,
              "Checkbox",
              checkbox,
              "checked",
              checked
            )}
            {show && !error ? (
              <ul style={{ listStyle: "none" }}>
                <li>Name:{val.firstname}</li>
                <li>Email:{val.email}</li>
                <li>Password:{val.password}</li>
                <li>Address:{val.address}</li>
                <li>Gender:{val.gender}</li>
                <li>CheckBox:{checkbox}</li>
                <li>Select: {selectData.toString()}</li>
              </ul>
            ) : (
              ""
            )}
          </>
          {
            <GridItem xs={12} sm={12}>
              <h2>{formJsonData.title}</h2>
            </GridItem>
          }
          {formJsonData.components.map((data) => {
            console.log(formData);
            console.log(formJsonData);
            console.log("data", data);
            return (
              <Grid spacing={2} alignItems="center" justifyContent="center">
                <GridItem xs={12} sm={6}>
                  {data.element === "TextField" ? (
                    <TextField
                      label={data.label!}
                      name={data.label?.toLocaleLowerCase()}
                      value={val.firstname}
                      onChange={onHandleChange}
                      placeholder={data.placeholder}
                      required={data.required!}
                      minLength={data.minLength!}
                      maxLength={data.maxLength!}
                    />
                  ) : data.element === "Email" ? (
                    <TextField
                      label={data.label!}
                      name={data.label?.toLocaleLowerCase()}
                      value={val.email}
                      type="email"
                      onChange={onHandleChange}
                      placeholder={data.placeholder}
                      required={data.required!}
                      minLength={data.minLength!}
                      maxLength={data.maxLength!}
                      helperText={emailHelperText}
                      error={error}
                    />
                  ) : data.element === "Password" ? (
                    <TextField
                      label={data.label!}
                      name={data.label?.toLocaleLowerCase()}
                      type="password"
                      value={val.password}
                      onChange={onHandleChange}
                      placeholder={data.placeholder}
                      required={data.required!}
                      minLength={data.minLength!}
                      maxLength={data.maxLength!}
                    />
                  ) : data.element === "TextArea" ? (
                    <TextField
                      label={data.label!}
                      required={data.required!}
                      placeholder={data.placeholder!}
                      name={data.label?.toLocaleLowerCase()}
                      value={val.address}
                      onChange={onHandleChange}
                      minLength={data.minLength!}
                      maxLength={data.maxLength!}
                      rows={data.rows}
                      multiline={true}
                    ></TextField>
                  ) : data.element === "Select" && !data.multipleValues ? (
                    <Select
                      label={data.label!}
                      placeholder={data.placeholder!}
                      menuItems={data.menuItems!}
                      multiple={data.multipleValues!}
                      name={data.label?.toLocaleLowerCase()}
                      value={selectData}
                      onChange={handleSelectData}
                      size={
                        data.size !== undefined
                          ? data.size === "small"
                            ? "small"
                            : "medium"
                          : "medium"
                      }
                      required={data.required!}
                      width={data.width}
                    />
                  ) : data.element === "Select" && data.multipleValues ? (
                    <Select
                      label={data.label!}
                      placeholder={data.placeholder!}
                      menuItems={data.menuItems!}
                      multiple={data.multipleValues!}
                      name={data.label?.toLocaleLowerCase()}
                      value={selectData}
                      onChange={handleSelectData}
                      size={
                        data.size !== undefined
                          ? data.size === "small"
                            ? "small"
                            : "medium"
                          : "medium"
                      }
                      required={data.required!}
                      width={data.width}
                    />
                  ) : data.element === "RadioButton" ? (
                    <RadioGroup
                      label={data.label!}
                      options={
                        data.options !== undefined
                          ? data.options === "top"
                            ? "top"
                            : data.options === "bottom"
                            ? "bottom"
                            : data.options === "start"
                            ? "start"
                            : "end"
                          : "end"
                      }
                      value={val.gender}
                      name={data.label?.toLocaleLowerCase()}
                      radioItems={data.radioItems!}
                      required={data.required!}
                      onChange={onHandleChange}
                    />
                  ) : data.element === "CheckBox" ? (
                    <Checkbox
                      label={data.label!}
                      name={data.label!}
                      required={data.required!}
                      value={data.label}
                      checked={checked}
                      onChange={handleChange}
                    />
                  ) : data.element === "Button" ? (
                    <Button
                      label={data.label!}
                      color={
                        data.theme !== undefined
                          ? data.theme === "primary"
                            ? "primary"
                            : data.theme === "secondary"
                            ? "secondary"
                            : data.theme === "info"
                            ? "info"
                            : data.theme === "success"
                            ? "success"
                            : data.theme === "warning"
                            ? "warning"
                            : data.theme === "error"
                            ? "error"
                            : "inherit"
                          : "warning"
                      }
                      size={
                        data.size !== undefined
                          ? data.size === "small"
                            ? "small"
                            : data.size === "medium"
                            ? "medium"
                            : "large"
                          : "medium"
                      }
                    />
                  ) : data.element === "Tabs" ? (
                    <>
                      <Tabs tabItems={data.tabItems!}>
                        <h1>Hello</h1>
                      </Tabs>
                    </>
                  ) : data.element === "Column" ? (
                    <>
                      <Grid columns={2} spacing={2}>
                        <GridItem md={6}>
                          <>Column1</>
                        </GridItem>
                        <GridItem md={6}>
                          <>Column2</>
                        </GridItem>
                      </Grid>
                    </>
                  ) : (
                    ""
                  )}
                </GridItem>
              </Grid>
            );
          })}
        </form>
      ) : (
        <></>
      )}
    </>
  );
}

export default MaterialForm;
