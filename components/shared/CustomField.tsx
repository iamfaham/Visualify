import React from "react";
import { Control, useController } from "react-hook-form";
import { z } from "zod";

import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormLabel,
} from "../ui/form";

import { formSchema } from "./TransformationForm";

type CustomFieldProps = {
  control: Control<z.infer<typeof formSchema>>;
  render: (props: { field: any }) => React.ReactNode;
  name: keyof z.infer<typeof formSchema>;
  formLabel?: string;
  className?: string;
};

export const CustomField = ({
  control,
  render,
  name,
  formLabel,
  className,
}: CustomFieldProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem className={className}>
          {formLabel && <FormLabel className="block text-sm font-medium text-gray-700">{formLabel}</FormLabel>}
          <FormControl>{render({ field })}</FormControl>
          {fieldState.error && <p className="text-red-500 text-sm mt-1">{fieldState.error.message}</p>}
        </FormItem>
      )}
    />
  );
};
