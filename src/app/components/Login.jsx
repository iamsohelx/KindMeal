"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { LoginUser } from "@/Actions/loginuser";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginFormSchema = z.object({
  acctype: z.enum(["Restaurant", "NGO"]),
  email: z.string().email("Enter a Valid email"),
  password: z.string().min(4, { message: "Enter minimum 4 Characters" }),
});

function Login() {
  const form = useForm({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      acctype: "",
      email: "",
      password: "",
    },
  });
  const router = useRouter();
  

  // Set Loader
  const [loader, setLoader] = useState(false);

  // Error Message
  const [ErrorMsg, setErrorMsg] = useState(null);

  const handleSubmit = async (data) => {
    setLoader(true);
    const UserData = {
      AccountType: data.acctype,
      Email: data.email,
      Password: data.password,
    };
    let result = await LoginUser(UserData);
    if (result?.success == false) {
      setErrorMsg(result?.acc);
    }
    if (result?.success && result?.acc == "NGO") {
      router.push("/ngo-dashboard");
    } else if (result?.success && result?.acc == "Restaurant") {
      router.push("/restro-dashboard");
    } else {
      console.log("Error Occure");
    }
    setLoader(false);
  };
  return (
    <Form
      {...form}
      className="flex h-full items-center bg-green-50  w-full  overflow-x-clip font-poppins"
    >
      <div className="mx-10 rounded-2xl shadow-sm w-full p-8  md:w-4/5 lg:3/5 bg-white/90 ">
        {/* Heading */}
        <h2 className="text-2xl text-gray-700 font-bold mb-6 text-center ">
          Login
        </h2>

        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex flex-col gap-2"
        >
          <div className="flex sm:gap-5 sm:flex-row flex-col gap-2">
            {/* ngo or restorent */}
            <div className="grid lg:w-[100%] gap-1.5 sm:w-1/2">
              <FormField
                control={form.control}
                name="acctype"
                render={({ field }) => (
                  <FormItem>
                    <Label className={"text-gray-700 font-bold"}>Who you are?</Label>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full border-black/20">
                        <SelectValue placeholder="Sign up As a" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Restaurant">Restaurant</SelectItem>
                        <SelectItem value="NGO">NGO</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* row2 */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <Label className={'text-gray-700 font-bold mt-2'}>Email</Label>
                <div className="grid lg:w-[100%] gap-1.5 sm:w-1/2 w-full">
                  <div>
                    <Input
                      {...field}
                      placeholder="abc@gmail.com"
                      className="border-black/20"
                    />
                    <FormMessage />
                  </div>
                </div>
              </FormItem>
            )}
            className="flex sm:gap-5 sm:flex-row flex-col gap-2"
          ></FormField>
          {/* Password  */}
          <FormField
            className="grid lg:w-[100%] gap-1.5 sm:w-1/2 w-full"
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <Label className={'text-gray-700 font-bold mt-2'}>Password</Label>
                <div>
                  <Input
                    {...field}
                    placeholder="password"
                    className="border-black/20 outline-black/70"
                  />
                  <FormMessage />
                </div>
              </FormItem>
            )}
          ></FormField>

          <Button type="submit" size="lg" className="font-bold cursor-pointer mt-3">
            {loader ? (
              <Loader strokeWidth={3} size={100} className="animate-spin" />
            ) : (
              "Login"
            )}
          </Button>
          <p className={`text-red-500 ${ErrorMsg ? "" : "invisible"}`}>
            {ErrorMsg} Does Not Exist
          </p>
        </form>

        <div className="w-full flex justify-center ">
          <p className="text-black/70 text-center">
            Dont have an Account?
            <Link href={"/Signup"} className="text-blue-900 font-semibold">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </Form>
  );
}

export default Login;
