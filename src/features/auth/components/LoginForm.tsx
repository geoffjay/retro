import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import * as z from "zod";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";

import { auth, signInWithEmail, signInWithGoogle } from "@/lib/auth";
import { useNotificationStore } from "@/stores/notifications";

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
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const { addNotification } = useNotificationStore();

  useEffect(() => {
    if (loading) {
      return;
    }
    if (error) {
      addNotification({
        type: "error",
        title: error.message,
      });
    }
    if (user) {
      navigate("/");
    }
  }, [user, loading, error]);

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
          <Button width="full" mt={4} onClick={() => signInWithEmail(email, password)}>
            Sign In
          </Button>
          <Button
            colorScheme="blue"
            variant="solid"
            width="full"
            mt={4}
            onClick={signInWithGoogle}
            leftIcon={<FaGoogle />}
          >
            Login with Google
          </Button>
        </>
      )}
    </Form>
  );
};
