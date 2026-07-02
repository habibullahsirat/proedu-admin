"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { createAboutSchema } from "@/validations/about";

import FormCard from "@/components/admin/common/FormCard";
import FormSection from "@/components/admin/forms/FormSection";
import FormActions from "@/components/admin/forms/FormActions";

import TextField from "@/components/admin/fields/TextField";
import TextareaField from "@/components/admin/fields/TextareaField";
import ImageField from "@/components/admin/fields/ImageField";
import SwitchField from "@/components/admin/fields/SwitchField";

export default function AboutForm({ initialValues, onSubmit, title }) {
  const [loading, setLoading] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createAboutSchema),

    defaultValues: initialValues || {
      image: {
        url: "",
        public_id: "",
      },

      title: "",

      description: "",

      buttonText: "",

      isActive: false,
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
        <FormSection title="About Information">
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

            <TextField
              label="Button Text"
              name="buttonText"
              register={register}
              error={errors.buttonText}
            />
          </div>
        </FormSection>

        <FormSection title="About Image">
          <Controller
            control={control}
            name="image"
            render={({ field }) => (
              <ImageField value={field.value} onChange={field.onChange} />
            )}
          />
        </FormSection>

        <FormSection title="Status">
          <Controller
            control={control}
            name="isActive"
            render={({ field }) => (
              <SwitchField
                label="Active About"
                checked={field.value}
                onChange={field.onChange}
              />
            )}
          />
        </FormSection>

        <FormActions loading={loading} submitText="Save About" />
      </form>
    </FormCard>
  );
}
