import * as React from "react";
import { FunctionComponent, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { FormStyles as s } from "./Form.styles";
import { useForm, FormData as _FormData } from "@hooks/useForm";

export type FormData = _FormData;

export interface FormProps {
  initialForm: FormData;
  callBack: (form: FormData) => void;
  formId?: string;
}

export const Form: FunctionComponent<FormProps> = ({
  initialForm,
  callBack,
  formId,
}) => {
  const { handleSubmit, handleInputChange, form } = useForm(
    initialForm,
    callBack
  );

  const location = useLocation();

  useEffect(() => {
    if (location.hash === `#${formId}`) {
      const nextInput = form.findIndex((field) => !field.value);
      form[nextInput > -1 ? nextInput : form.length - 1].ref.current?.focus();
    }
  }, [location]);

  return (
    <s.Form onSubmit={handleSubmit}>
      {form.map((field, i) => { 
        const { retainOnSubmit, ...inputProps } = field;
        return (
          <input { ...inputProps} key={i} onChange={(e) => handleInputChange(e, i)} />
        )
      })}
      <input type="submit" hidden />
    </s.Form>
  );
};
