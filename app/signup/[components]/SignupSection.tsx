"use client";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { UserAuth } from "@/app/context/auth-context";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const SignupSection = () => {
  const { user, googleSignIn, logOut, emailPasswordSignup } = UserAuth();
  const emailInputRef = useRef<HTMLInputElement | null>(null)
  const passwordInputRef = useRef<HTMLInputElement | null>(null)
  const router = useRouter();
  console.log(user?.displayName);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const emailPasswordSignUpHandler = async () => {
   if (!emailInputRef.current?.value || !passwordInputRef.current?.value) return

    try {
      const response = await emailPasswordSignup(emailInputRef.current?.value, passwordInputRef.current?.value)
      console.log(response)
      emailInputRef.current.value = ""
      passwordInputRef.current.value = ""
    } catch(error: any) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    if (user) {
      router.push("/")
    }
  }, [user, router])

  return (
    <FieldSet
      className="
        w-full
        max-w-sm sm:max-w-md
        mx-auto
        px-4 sm:px-6
        py-8 sm:py-10
        rounded-lg
        shadow-2xl
        bg-background
      "
    >
      <FieldGroup className="space-y-1 gap-3 sm:max-2xl:gap-4">
        <Field>
          <FieldLabel htmlFor="name">नाम</FieldLabel>
          <Input id="name" type="name" placeholder="e.g John Doe" />
          <FieldDescription>
            अपने अकाउंट के लिए एक अनोखा नाम चुनें।
          </FieldDescription>
        </Field>

        <Field>
          <FieldLabel htmlFor="email">ईमेल</FieldLabel>
          <Input id="email" type="email" placeholder="example@gmail.com" ref={emailInputRef}/>
          <FieldDescription>
            अपने अकाउंट के लिए एक अनोखा ईमेल चुनें।
          </FieldDescription>
        </Field>

        <Field>
          <FieldLabel htmlFor="password">पासवर्ड</FieldLabel>
          <Input id="password" type="password" placeholder="••••••••" ref={passwordInputRef}/>
          <FieldDescription>
            कम से कम 8 अक्षरों का होना चाहिए।
          </FieldDescription>
        </Field>

        <Field>
          <Button className="w-full" onClick={emailPasswordSignUpHandler}>सबमिट करें</Button>
        </Field>

        <Field>
          <Button
            className="w-full flex items-center gap-2"
            onClick={handleSignIn}
          >
            <Image src="/search.png" width={16} height={16} alt="Google Logo" />
            <span>Google से जारी रखें</span>
          </Button>
        </Field>
      </FieldGroup>
    </FieldSet>
  );
};

export default SignupSection;
