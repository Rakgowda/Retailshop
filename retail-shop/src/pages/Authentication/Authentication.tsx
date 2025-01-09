import { useActionState, useState } from "react";
import { mainColor, secondaryColor } from "../../utils/color";
import { useCustomNavigate } from "../../components/wrapper/customNavigation/useCustomNavigate";

// Add interface for the form state
interface FormState {
  Username: string;
  Password: string;
  ConfirmPassword: string;
}

const Authentication = () => {
  const navigate = useCustomNavigate();
  
  const [result,formAction] = useActionState<FormState>(formActionMethod,{"Username":"","Password":"","ConfirmPassword":""});

  const [isLogin, setIsLogin] = useState(true);

  function formActionMethod(prevState: FormState, formData: FormData): FormState {
    console.log("🚀 ~ formActionMethod ~ prevState:", prevState)
    const formDataArray = Array.from(formData.keys());
    console.log("🚀 ~ formActionMethod ~ formData:", formData)
    const formDataObject = formDataArray.map((key) => ({
      [key]: formData.get(key)
    }));
    console.log("🚀 ~ formDataObject ~ formDataObject:", formDataObject)
    navigate("/dashboard")
    return { 
      Username: "",
      Password: "",
      ConfirmPassword: "" 
    };
  }

  return (
    <>
      {/* create login form with username and password and submit button  using tailwind css grid and flex */}
      <div className="flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-80">
          {/* toggle button for login and signup */}
          <div className="flex justify-center mb-4">
            <button
              onClick={() => setIsLogin(true)}
              className={`px-4 py-2 rounded-l-lg text-white ${
                isLogin ? `bg-${mainColor}-500` : `bg-${secondaryColor}-300`
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`px-4 py-2 rounded-r-lg text-white ${
                isLogin ? `bg-${secondaryColor}-300` : `bg-${mainColor}-500`
              }`}
            >
              Signup
            </button>
          </div>
          <h1 className="text-2xl font-bold mb-4">
            {isLogin ? "Login" : "Signup"}
          </h1>
          <form className="space-y-4" action={formAction}>
            <input
              type="text"
              name="Username"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Username"
              defaultValue={result.Username}
              // onChange={handleChange}
            />
            <input
              type="password"
              name="Password"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Password"
              defaultValue={result.Password}
              // onChange={handleChange}
            />
            {!isLogin && (
              <input
                type="password"
                name="ConfirmPassword"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Confirm Password"
                defaultValue={result.ConfirmPassword}
                // onChange={handleChange}
              />
            )}
            <button
              type="submit"
              className={`w-full bg-${mainColor}-500 text-white p-2 rounded-md`}
            >
              {isLogin ? "Login" : "Signup"}
            </button>
          </form>
          {result && <p>{result.Username}</p>}
        </div>
      </div>
    </>
  );
};

export default Authentication;
