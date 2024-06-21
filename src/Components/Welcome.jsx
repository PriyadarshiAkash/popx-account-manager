import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="grid justify-center">
      <div className="w-[350px] h-[640px] border-2 bg-slate-100 overflow-hidden shadow-lg outline-none rounded-lg">
        <div className="flex">
          <div className="grid mx-4 space-y-3">
            <div className="w-[250px] text-start grid p-2 mt-[400px] space-y-3">
              <h1 className="text-xl font-semibold">Welcome to PopX</h1>
              <p>Lorem Ipsum dolor sit amet, consectetur adipicing elit,</p>
            </div>
            <div className="space-y-2 text-s font-semibold">
              <Link to="create-account">
                <button className="border-2 bg-indigo-600 rounded-lg p-2 w-[300px] text-white hover:bg-indigo-900">
                  Create Account
                </button>
              </Link>

              <Link to="/signin">
                <button className="border-2 bg-indigo-200 rounded-lg p-2 w-[300px] hover:bg-indigo-100 mt-2">
                  Already Registered? Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
