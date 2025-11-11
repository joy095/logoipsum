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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import Buttons from "./Buttons";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const Hero = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <section className="bg-[url(/images/hero-bg.png)] bg-no-repeat bg-cover bg-top h-svh w-full">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-3 gap-16">
          <div className="col-span-2">
            <div className="flex flex-col gap-4">
              <h1 className="uppercase">
                <div className="text-green flex items-center gap-5">
                  <span className="font-medium text-5xl min-w-fit">
                    Hire Dedicated
                  </span>
                  <span className="bg-green h-1 flex-1"></span>
                </div>

                <span className="text-primary font-bold text-8xl">
                  Developers
                </span>
              </h1>

              <h3 className="font-normal text-lg text-primary">
                Top 1% Pre-Vetted, In-house & Dedicated Software Programmers
              </h3>
              <p className="text-secondary max-w-xl font-light text-[0.938rem] leading-7">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&#39;s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled
              </p>

              <div className="flex items-center gap-3">
                <Buttons variant="secondary">View More</Buttons>
                <Buttons variant="primary">Get in touch</Buttons>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-xl overflow-hidden">
            <div className="bg-green/10 py-4 px-6 text-center">
              <span className="font-semibold text-xl text-primary">
                Create Your Team
              </span>
              <p className="text-primary text-sm">
                Lorem Ipsum is simply dummy text of the printing
              </p>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 bg-white py-4 px-6"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <div className="grid grid-cols-2 gap-x-5 gap-y-4">
                        <div>
                          <FormLabel className="text-primary">
                            Full Name
                          </FormLabel>
                          <FormControl className="mt-2">
                            <Input
                              className="rounded-none border-black/10"
                              placeholder="Enter you name"
                              {...field}
                            />
                          </FormControl>
                        </div>

                        <div>
                          <FormLabel className="text-primary">
                            Email Address
                          </FormLabel>
                          <FormControl className="mt-2">
                            <Input
                              className="rounded-none border-black/10"
                              placeholder="Enter you Email"
                              {...field}
                            />
                          </FormControl>
                        </div>

                        <div>
                          <FormLabel className="text-primary">
                            Phone No
                          </FormLabel>
                          <FormControl className="mt-2">
                            <Input
                              className="rounded-none border-black/10"
                              placeholder="Enter you Number"
                              {...field}
                            />
                          </FormControl>
                        </div>

                        <div>
                          <FormLabel className="text-primary">
                            Country
                          </FormLabel>
                          <FormControl className="mt-2">
                            <Input
                              className="rounded-none border-black/10"
                              placeholder="Enter you Country"
                              {...field}
                            />
                          </FormControl>
                        </div>
                      </div>

                      <div className="mt-3">
                        <FormLabel className="text-primary">
                          Project Brief
                        </FormLabel>
                        <div className="border border-black/10 w-full h-full mt-2">
                          <textarea
                            name=""
                            id=""
                            placeholder="Enter you Project Brief"
                            className="w-full h-full px-5 py-2"
                          ></textarea>
                        </div>
                      </div>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Buttons
                  variant="secondary"
                  type="submit"
                  className="w-full flex justify-center mt-10"
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
