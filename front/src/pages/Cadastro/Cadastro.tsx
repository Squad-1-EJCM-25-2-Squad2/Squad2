import {
  Button,
  Card,
  Center,
  Field,
  HStack,
  Input,
  InputGroup,
  Link,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { LuEye, LuEyeOff, LuLock, LuMail, LuUser } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

function Cadastro() {
  return (
    <Card.Root minW="1/4" variant={"elevated"} m={10}>
      <Card.Header textAlign={"center"}>
        <Card.Title fontSize={"2xl"} fontWeight={"bold"}>
          Create Account
        </Card.Title>
        <Card.Description color={"GrayText"}>
          Join our community and discover amazing fashion
        </Card.Description>
      </Card.Header>
      <Card.Body>
        <Stack gap="4" w="full">
          <Button variant="outline" className="w-full" rounded={"lg"}>
            <FcGoogle />
            Continue with Google
          </Button>
          <Button variant="outline" className="w-full" rounded={"lg"}>
            <FaFacebook />
            Continue with Facebook
          </Button>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            textAlign={"center"}
          >
            <Text color={"GrayText"} className="grow">
              __________
            </Text>
            <Text color={"GrayText"} className="grow">
              Or Create with Email
            </Text>
            <Text color={"GrayText"} className="grow">
              __________
            </Text>
          </Stack>
          <Stack direction={"row"}>
            <Field.Root>
              <Field.Label>First Name</Field.Label>
              <InputGroup startElement={<LuUser />}>
                <Input placeholder="First Name" />
              </InputGroup>
            </Field.Root>
            <Field.Root>
              <Field.Label>Last Name</Field.Label>
              <InputGroup>
                <Input placeholder="Last Name" />
              </InputGroup>
            </Field.Root>
          </Stack>
          <Field.Root>
            <Field.Label>Email address</Field.Label>
            <InputGroup startElement={<LuMail />}>
              <Input placeholder="Enter your email" />
            </InputGroup>
          </Field.Root>
          <Field.Root>
            <Field.Label>Password</Field.Label>
            <InputGroup startElement={<LuLock />} endElement={<LuEye />}>
              <Input placeholder="Enter your password" />
            </InputGroup>
            <Field.HelperText>
              Must be at least 8 characters long
            </Field.HelperText>
          </Field.Root>
          <Field.Root>
            <Field.Label>Confirm Password</Field.Label>
            <InputGroup startElement={<LuLock />} endElement={<LuEyeOff />}>
              <Input placeholder="Enter your password" />
            </InputGroup>
          </Field.Root>
          <RadioGroup.Root>
            <Stack direction={"column"}>
              <RadioGroup.Item value="privacy">
                <RadioGroup.ItemHiddenInput />
                <RadioGroup.ItemIndicator />
                <RadioGroup.ItemText>
                  I agree to the <Link>Terms of Service</Link> and{" "}
                  <Link>Privacy Policy</Link>
                </RadioGroup.ItemText>
              </RadioGroup.Item>
              <RadioGroup.Item value="newsletter">
                <RadioGroup.ItemHiddenInput />
                <RadioGroup.ItemIndicator />
                <RadioGroup.ItemText>
                  Subscribe to our newsletter for exclusive offers and updates
                </RadioGroup.ItemText>
              </RadioGroup.Item>
            </Stack>
          </RadioGroup.Root>
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
            Create Account
          </Button>
          <Text color={"GrayText"}>
            Already have an account?
            <Link px={1} color={"black"} fontWeight={"semibold"}>
              Sign In
            </Link>
          </Text>
        </Stack>
      </Card.Footer>
    </Card.Root>
  );
}

export default Cadastro;
