"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { courseFormSchema } from "@/validations/frontend/course";

import FormCard from "@/components/admin/common/FormCard";
import FormSection from "@/components/admin/forms/FormSection";
import FormActions from "@/components/admin/forms/FormActions";

import TextField from "@/components/admin/fields/TextField";
import TextareaField from "@/components/admin/fields/TextareaField";
import NumberField from "@/components/admin/fields/NumberField";
import ImageField from "@/components/admin/fields/ImageField";

export default function CourseForm({ initialValues, onSubmit, title }) {
  const [loading, setLoading] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(courseFormSchema),

    defaultValues: initialValues || {
      image: {
        url: "",
        public_id: "",
      },

      title: "",

      description: "",

      price: "",
    },
  });

  async function submit(values) {
    setLoading(true);

    try {
      await onSubmit(values);
    } finally {
      setLoading(false);
    }
  }

  return (
    <FormCard title={title}>
      <form onSubmit={handleSubmit(submit)} className="space-y-8">
        <FormSection title="Course Information">
          <div className="space-y-6">
            <TextField
              label="Title"
              name="title"
              register={register}
              error={errors.title}
            />

            <TextareaField
              label="Description"
              name="description"
              register={register}
              error={errors.description}
            />

            <NumberField
              label="Price"
              name="price"
              register={register}
              error={errors.price}
            />
          </div>
        </FormSection>

        <FormSection title="Course Image">
          <Controller
            control={control}
            name="image"
            render={({ field }) => (
              <ImageField value={field.value} onChange={field.onChange} />
            )}
          />
        </FormSection>

        <FormActions loading={loading} submitText="Save Course" />
      </form>
    </FormCard>
  );
}
