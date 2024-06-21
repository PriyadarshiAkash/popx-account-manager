import TextField from "@mui/material/TextField";

const SignIn = () => {
  return (
    <div className="grid justify-center">
      <div className="w-[350px] h-[640px] border-2 bg-slate-100 overflow-hidden shadow-lg outline-none rounded-lg">
        <div className="flex">
          <div className="grid mx-4 space-y-3">
            <div className="w-[250px] text-start grid p-2 space-y-3">
              <span className="w-[180px]">
                <h1 className="text-xl font-semibold">
                  Signin to your PopX account
                </h1>
              </span>
              <p>Lorem Ipsum dolor sit amet, consectetur adipicing elit,</p>
            </div>

            <TextField
              Email
              Address
              id="outlined-disabled"
              label="Email Address"
              defaultValue=""
            />
            <TextField
              Password
              id="outlined-disabled"
              label=" Password"
              defaultValue=""
            />
            <button className="hover:bg-slate-600 border-2 bg-slate-300 rounded-lg p-2 w-[300px] text-sm text-white font-semibold">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
