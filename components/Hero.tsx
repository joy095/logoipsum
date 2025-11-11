"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Buttons from "./Buttons";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  country: z.string().min(2, {
    message: "Please enter your country.",
  }),
  projectBrief: z.string().min(10, {
    message: "Project brief must be at least 10 characters.",
  }),
});

const Hero = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      country: "",
      projectBrief: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <section className="relative bg-[url(/images/hero-bg.png)] bg-no-repeat bg-cover bg-top min-h-[calc(100vh-72px)] w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
          {/* Hero Content */}
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-4 md:gap-6">
              <h1 className="uppercase">
                <div className="text-green flex items-center gap-3 md:gap-5">
                  <span className="font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl whitespace-nowrap">
                    Hire Dedicated
                  </span>
                  <span className="bg-green h-0.5 md:h-1 flex-1"></span>
                </div>

                <span className="text-primary font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl block mt-2">
                  Developers
                </span>
              </h1>

              <h2 className="font-normal text-base md:text-lg lg:text-xl text-primary">
                Top 1% Pre-Vetted, In-house & Dedicated Software Programmers
              </h2>

              <p className="text-secondary max-w-xl font-light text-sm md:text-[0.938rem] leading-6 md:leading-7">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-2">
                <Buttons variant="secondary" className="w-full sm:w-auto">
                  View More
                </Buttons>
                <Buttons variant="primary" className="w-full sm:w-auto">
                  Get in touch
                </Buttons>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <div className="bg-green/10 py-4 px-4 sm:px-6 text-center">
              <h3 className="font-semibold text-lg md:text-xl text-primary">
                Create Your Team
              </h3>
              <p className="text-primary text-xs md:text-sm mt-1">
                Lorem Ipsum is simply dummy text of the printing
              </p>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="bg-white py-4 sm:py-6 px-4 sm:px-6 space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary text-sm">
                          Full Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="rounded-none border-black/10 mt-1"
                            placeholder="Enter your name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary text-sm">
                          Email Address
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            className="rounded-none border-black/10 mt-1"
                            placeholder="Enter your email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary text-sm">
                          Phone No
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            className="rounded-none border-black/10 mt-1"
                            placeholder="Enter your number"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary text-sm">
                          Country
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="rounded-none border-black/10 mt-1"
                            placeholder="Enter your country"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="projectBrief"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary text-sm">
                        Project Brief
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter your project brief"
                          className="rounded-none border-black/10 min-h-[100px] resize-none mt-1"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Buttons
                  variant="secondary"
                  type="submit"
                  className="w-full flex justify-center mt-6"
                >
                  Hire Software Developer
                </Buttons>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
