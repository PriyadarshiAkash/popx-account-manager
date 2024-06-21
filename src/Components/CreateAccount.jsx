import { useState } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    password: "",
    companyName: "",
    isAgency: "No",
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    navigate("/AccountDetails", { state: formData });
  };

  return (
    <div className="grid justify-center">
      <div className="w-[350px] h-[640px] border-2 bg-slate-100 overflow-hidden shadow-lg outline-none rounded-lg">
        <div className="flex">
          <div className="grid mx-4 space-y-3">
            <div className="w-[250px] text-start grid p-2 space-y-3">
              <span className="w-[140px]">
                <h1 className="text-xl font-semibold">
                  Create your PopX account
                </h1>
              </span>
            </div>

            <TextField
              name="fullName"
              id="outlined-disabled"
              label="Full Name"
              value={formData.fullName}
              onChange={handleChange}
            />
            <TextField
              name="phoneNumber"
              id="outlined-disabled"
              label="Phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            <TextField
              name="emailAddress"
              id="outlined-disabled"
              label="Email address"
              value={formData.emailAddress}
              onChange={handleChange}
            />
            <TextField
              name="password"
              id="outlined-disabled"
              label=" Password"
              value={formData.password}
              onChange={handleChange}
            />
            <TextField
              name="companyName"
              id="outlined-disabled"
              label="Company name"
              value={formData.companyName}
              onChange={handleChange}
            />
            <div className="text-start">
              <h1>Are you an Agency?</h1>
              <div className="space-x-5">
                <label>
                  <input
                    type="radio"
                    name="isAgency"
                    value="Yes"
                    checked={formData.isAgency === "Yes"}
                    onChange={handleChange}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="isAgency"
                    value="No"
                    checked={formData.isAgency === "No"}
                    onChange={handleChange}
                  />
                  No
                </label>
              </div>
            </div>

            <div className="pt-[90px]">
              <button
                onClick={handleSubmit}
                className="border-2 bg-indigo-600 rounded-lg p-2 w-[300px] text-white text-sm font-semibold hover:bg-slate-600"
              >
                Create Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
