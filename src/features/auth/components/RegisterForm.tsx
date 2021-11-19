import { z } from "zod";

import { Form } from "@/components/Form";

const schema = z
  .object({
    email: z.string().min(1, "Required"),
    firstName: z.string().min(1, "Required"),
    lastName: z.string().min(1, "Required"),
    password: z.string().min(1, "Required"),
  })
  .and(
    z
      .object({
        teamId: z.string().min(1, "Required"),
      })
      .or(z.object({ teamName: z.string().min(1, "Required") })),
  );

type RegisterValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

type RegisterFormProps = {
  onSuccess: () => void;
};

// export const RegisterForm = ({ onSuccess }: RegisterFormProps) => {
//   return (
//     <Form<RegisterValues, typeof schema>
//       onSubmit={async (values) => {
//         onSuccess();
//       }}
//       schema={schema}
//       options={{
//         shouldUnregister: true,
//       }}
//     >
//     </Form>
//   );
// };

export const RegisterForm = ({ onSuccess }: RegisterFormProps) => {
  return <>todo</>;
};
