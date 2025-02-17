"use client"; // Client-side React hooks
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { auth } from "../../lib/firebaseConfig";

const Login = () => {
  const { control, handleSubmit } = useForm<LoginFormData>();
  const [error, setErrorMessage] = useState("");
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  interface LoginFormData {
    email: string;
    password: string;
  }

  useEffect(() => {
    setIsClient(true);
  }, []);

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    const { email, password } = data;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("An unknown error occurred.");
      }
    }
  };

  if (!isClient) {
    return null;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        {/* Error message */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <Controller
              control={control}
              name="email"
              defaultValue=""
              render={({ field }) => (
                <Input
                  {...field}
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                />
              )}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <Controller
              control={control}
              name="password"
              defaultValue=""
              render={({ field }) => (
                <Input
                  {...field}
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full p-2 mt-1 border border-gray-300 rounded-md"
                />
              )}
            />
          </div>

          <div className="flex items-center justify-between">
            <Button type="submit" className="w-full py-2 text-white rounded-md">
              Log in
            </Button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default Login;
