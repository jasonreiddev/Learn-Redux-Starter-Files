import {
  ChangeEvent,
  DetailedHTMLProps,
  FormEvent,
  InputHTMLAttributes,
  RefObject,
  useState,
} from "react";

interface Field
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  ref?: RefObject<HTMLInputElement>;
  value?: string;
  retainOnSubmit?: boolean;
}

export type FormData = Field[];

export const useForm = (
  initialForm: FormData,
  callBack: (form: FormData) => void
) => {
  const [form, setForm] = useState<FormData>(initialForm);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    callBack(form);
    setForm((prevForm) =>
      prevForm.map((field) =>
        field.retainOnSubmit ? field : { ...field, value: "" }
      )
    );
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    setForm((prevForm) =>
      prevForm.map((field, i) => (i === index ? { ...field, value } : field))
    );
  };

  return {
    handleSubmit,
    handleInputChange,
    form,
  };
};
