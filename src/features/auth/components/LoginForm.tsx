import { useState } from "react";
import * as z from "zod";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";

import { signInWithEmail, signInWithGoogle } from "@/lib/auth";

import { Form } from "@/components/Form";

const schema = z.object({
  email: z.string().min(1, "Required"),
  password: z.string().min(1, "Required"),
});

type LoginValues = {
  email: string;
  password: string;
};

type LoginFormProps = {
  onSuccess: () => void;
};

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignInWithEmail = (email: string, password: string, onSuccess: () => void) => {
    signInWithEmail(email, password);
    onSuccess();
  };

  const handleSignInWithGoogle = (onSuccess: () => void) => {
    signInWithGoogle();
    onSuccess();
  };

  return (
    <Form<LoginValues, typeof schema>
      onSubmit={async (values) => {
        onSuccess();
      }}
    >
      {({ register, formState }) => (
        <>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="test@test.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl mt={6} isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="*******"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button width="full" mt={4} onClick={() => handleSignInWithEmail(email, password, onSuccess)}>
            Sign In
          </Button>
          <Button
            colorScheme="blue"
            variant="solid"
            width="full"
            mt={4}
            onClick={() => handleSignInWithGoogle(onSuccess)}
            leftIcon={<FaGoogle />}
          >
            Login with Google
          </Button>
        </>
      )}
    </Form>
  );
};
