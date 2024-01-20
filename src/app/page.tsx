"use client"
import * as React from "react";
import * as z from "zod"
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(3, {
    message: "Password must be at least 3 characters.",
  }),
})
export default function LoginPage() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center h-screen">
    </div>
  );
}
