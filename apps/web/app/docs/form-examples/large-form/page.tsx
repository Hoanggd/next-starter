"use client";

import { Button } from "@workspace/ui/components/button";
import { Checkbox } from "@workspace/ui/components/checkbox";
import { DateRangePicker } from "@workspace/ui/components/date-range-picker";
import { DatePicker } from "@workspace/ui/components/datepicker";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@workspace/ui/components/form";
import { Input } from "@workspace/ui/components/input";
import { RadioGroup } from "@workspace/ui/components/radio-group";
import { Option, Select } from "@workspace/ui/components/select";
import { Switch } from "@workspace/ui/components/switch";
import { Textarea } from "@workspace/ui/components/textarea";
import { useFieldArray, useForm, useFormContext } from "react-hook-form";

type FormInputs = {
  isPublic: boolean;
  name: string;
  bio: string;
  birthday: string;
  gender: Option;
  languages: Language[];
  phoneNumber: string;
  works: {
    company: string;
    position: string;
    duration: {
      start: string;
      end: string;
    };
  }[];
  enableNotify?: boolean;
  notifyType: string;
};

type Language = {
  label: string;
  value: string;
  flag: string;
};

const languages: Language[] = [
  { label: "English - United Kingdom", value: "GB", flag: "🇬🇧" },
  { label: "English - United States", value: "US", flag: "🇺🇸" },
  { label: "French", value: "FR", flag: "🇫🇷" },
  { label: "German", value: "DE", flag: "🇩🇪" },
  { label: "Hindi", value: "IN", flag: "🇮🇳" },
  { label: "Italian", value: "IT", flag: "🇮🇹" },
  { label: "Japanese", value: "JP", flag: "🇯🇵" },
  { label: "Portuguese", value: "BR", flag: "🇧🇷" },
  { label: "Spanish", value: "MX", flag: "🇲🇽" },
];

export default function LargeForm() {
  const form = useForm<FormInputs>({
    defaultValues: {
      languages: [languages[0]],
    },
  });

  const onSubmit = (data: FormInputs) => {
    window.alert(JSON.stringify(data, null, 4));
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="container divide-y my-10"
      >
        <h1 className="text-2xl font-semibold pb-4">Large Form</h1>
        <Profile />
        <WorkHistory />
        <NotifyType />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

function Profile() {
  const form = useFormContext<FormInputs>();

  return (
    <div className="space-y-4 py-6">
      <Header />
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input {...field} placeholder="Email" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="gender"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Gender</FormLabel>
            <FormControl>
              <Select
                {...field}
                options={[
                  { label: "Male", value: "male" },
                  { label: "Female", value: "female" },
                  { label: "Other", value: "other" },
                ]}
                placeholder="Select gender"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="languages"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Languages</FormLabel>
            <FormControl>
              <Select
                {...field}
                isMulti
                options={languages}
                placeholder="Select languages"
                renderOption={(option) => (
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">{option.flag}</span>
                    <div>
                      <div>{option.label}</div>
                      <div className="text-xs text-muted-foreground">
                        {option.value}
                      </div>
                    </div>
                  </div>
                )}
                renderMultiValueLabel={(option) => (
                  <div className="flex items-center gap-2">
                    {option.flag} {option.label}
                  </div>
                )}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="bio"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Bio</FormLabel>
            <FormControl>
              <Textarea {...field} />
            </FormControl>
            <FormMessage />
            <FormDescription>
              Brief description for your profile
            </FormDescription>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="birthday"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Birthday</FormLabel>
            <FormControl>
              <DatePicker {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}

function Header() {
  const form = useFormContext<FormInputs>();
  return (
    <div className="flex justify-between items-center">
      <h2 className="uppercase text-gray-500 text-sm font-semibold">Profile</h2>
      <FormField
        control={form.control}
        name="isPublic"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Public</FormLabel>
            <FormControl>
              <Switch checked={field.value} onCheckedChange={field.onChange} />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
}

function WorkHistory() {
  const form = useFormContext<FormInputs>();
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "works",
  });

  return (
    <div className="space-y-2 py-6">
      <h2 className="uppercase text-gray-500 text-sm font-semibold">
        Work History
      </h2>
      {fields.length > 0 && (
        <div className="space-y-3">
          {fields.map((field, index) => (
            <div key={field.id} className="border rounded-md p-4">
              <div className="grid grid-cols-2 gap-2.5 flex-1">
                <FormField
                  control={form.control}
                  name={`works.${index}.position`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Position</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Position" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`works.${index}.company`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Company" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`works.${index}.duration`}
                  render={({ field }) => (
                    <FormItem className="col-span-2">
                      <FormLabel>Duration</FormLabel>
                      <FormControl>
                        <DateRangePicker {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex justify-end">
                <Button
                  variant="link"
                  className="px-0 h-7 text-red-500 mt-2"
                  onClick={() => remove(index)}
                >
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
      <Button
        variant="outline"
        onClick={() =>
          append({
            company: "",
            position: "",
            duration: { start: "", end: "" },
          })
        }
      >
        + Add Work
      </Button>
    </div>
  );
}

function NotifyType() {
  const form = useFormContext<FormInputs>();

  return (
    <div className="space-y-4 py-6">
      <h2 className="uppercase text-gray-500 text-sm font-semibold">
        Notification
      </h2>
      <FormField
        control={form.control}
        name="enableNotify"
        render={({ field }) => (
          <FormItem flow="row">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <FormLabel>Enable notification</FormLabel>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="notifyType"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Notify me about {field.value}</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                options={[
                  { label: "All new messages", value: "all" },
                  { label: "Direct messages and mentions", value: "mentions" },
                ]}
              ></RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
