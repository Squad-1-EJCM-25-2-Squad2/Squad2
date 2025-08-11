import { FcGoogle } from "react-icons/fc";
import Botao from "../components/Botao";
import Card from "../components/Card";
import { FaFacebook } from "react-icons/fa";
import { Label } from "../components/Label";

function Formulario() {
  return (
    <div className="h-screen flex flex-col align-middle justify-center items-center">
      <Card className="w-1/4">
        <div className="flex flex-col items-center gap-2">
          <Label size="h4" weight="bold" className="leading-none text-center">
            Sign In
          </Label>
          <p className="text-center text-sm text-gray-400">
            Enter your credentials to access your account
          </p>
        </div>

        <Botao className="w-full text-sm" variant="secondary">
          <FcGoogle size={"1.75em"} />
          <p>Continue with Google</p>
        </Botao>
        <Botao className="w-full text-sm" variant="secondary">
          <FaFacebook size={"1.75em"} />
          <p>Continue with Facebook</p>
        </Botao>
        <div className="flex items-center text-gray-400 text-sm">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="p-2 whitespace-nowrap">Or continue with Email</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <Botao className="w-full text-sm h-12">Sign In</Botao>
      </Card>
    </div>
  );
}

export default Formulario;
