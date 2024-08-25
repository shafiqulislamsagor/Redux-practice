import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { EyeIcon } from "lucide-react";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export default function Login() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data.username);
  }

  return (
    <div className="bg-gray-200 font-[sans-serif]">
        <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
          <div className="max-w-md w-full">
            <a href="javascript:void(0)">
              <h1  className="text-center text-3xl mb-8 text-gray-500 font-bold">Log In Page</h1>
            </a>

            <div className="p-8 rounded-2xl bg-primary bg-opacity-50 shadow">
              <h2 className="text-gray-800 text-center text-2xl font-bold">
                Sign in
              </h2>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="mt-8 space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-800 text-sm mb-2 block">
                          Username
                        </FormLabel>
                        <FormControl>
                          <div className="relative flex items-center">
                            
                          <Input
                            className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                            placeholder="shadcn"
                            {...field}
                          />
                          
                          <EyeIcon className="w-4 h-4 absolute right-4 cursor-pointer"/>
                          </div>
                          
                        </FormControl>
                        <FormMessage className="text-warning" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-800 text-sm mb-2 block">
                          Password
                        </FormLabel>
                        <FormControl>
                          <div className="relative flex items-center">
                            
                          <Input
                          type="password"
                            className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                            placeholder="shadcn"
                            {...field}
                          />
                          
                          <EyeIcon className="w-4 h-4 absolute right-4 cursor-pointer"/>
                          </div>
                          
                        </FormControl>
                        <FormMessage className="text-warning" />
                      </FormItem>
                    )}
                  />
                   <div className="text-sm flex justify-end">
                    <a
                      href="jajvascript:void(0);"
                      className="text-blue-600 hover:underline font-semibold"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Button className="w-full text-gray-100 font-bold text-lg hover:text-secondary bg-success" type="submit">Submit</Button>
                  <p className="text-gray-800 text-sm !mt-8 text-center">
                  Don't have an account?{" "}
                  <a
                    href="javascript:void(0);"
                    className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold"
                  >
                    Register here
                  </a>
                </p>
                </form>
              </Form>
              
            </div>
          </div>
        </div>
      </div>
  );
}
