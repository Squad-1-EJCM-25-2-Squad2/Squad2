import {
  Button,
  Card,
  Center,
  Field,
  Input,
  InputGroup,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { LuEye, LuLock, LuMail } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

function Login() {
  return (
    <Card.Root minW="1/4" variant={"elevated"} m={10}>
      <Card.Header textAlign={"center"}>
        <Card.Title fontSize={"2xl"} fontWeight={"bold"}>
          Sign In
        </Card.Title>
        <Card.Description color={"GrayText"}>
          Enter your credentials to access your account
        </Card.Description>
      </Card.Header>
      <Card.Body>
        <Stack gap="2" w="full">
          <Button variant="outline" className="w-full" rounded={"lg"}>
            <FcGoogle />
            Continue with Google
          </Button>
          <Button variant="outline" className="w-full" rounded={"lg"}>
            <FaFacebook />
            Continue with Facebook
          </Button>
          <Stack direction={"row"} alignItems={"center"}>
            <Text color={"GrayText"} className="grow">
              __________
            </Text>
            <Text color={"GrayText"} className="flex grow">
              Or Continue with Email
            </Text>
            <Text color={"GrayText"} className="flex grow">
              __________
            </Text>
          </Stack>
          <Field.Root>
            <Field.Label>Email</Field.Label>
            <InputGroup startElement={<LuMail />}>
              <Input placeholder="Enter your email" />
            </InputGroup>
          </Field.Root>
          <Field.Root>
            <Field.Label>Password</Field.Label>
            <InputGroup startElement={<LuLock />} endElement={<LuEye />}>
              <Input placeholder="Enter your password" />
            </InputGroup>
          </Field.Root>
        </Stack>
      </Card.Body>
      <Card.Footer className="justify-center">
        <Stack
          direction={"column"}
          w={"full"}
          justifyContent={"center"}
          textAlign={"center"}
        >
          <Button variant="solid" className="w-full" rounded={"lg"}>
            Sign in
          </Button>
          <Text color={"GrayText"}>
            Don't have an account?
            <Link px={1} color={"black"} fontWeight={"semibold"}>
              Sign Up
            </Link>
          </Text>
        </Stack>
      </Card.Footer>
    </Card.Root>
  );
}

export default Login;
