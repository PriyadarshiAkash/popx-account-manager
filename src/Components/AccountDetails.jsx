import { useLocation } from "react-router-dom";

const AccountDetails = () => {
  const location = useLocation();
  const formData = location.state;

  return (
    <div className="grid justify-center">
      <div className="w-[350px] h-[640px] border-2 bg-slate-100 overflow-hidden shadow-lg outline-none rounded-lg">
        <div className="flex">
          <div className="grid mx-4 space-y-3">
            <div className="w-[250px] text-start grid p-2 space-y-3">
              <span className="w-[140px]">
                <h1 className="text-xl font-semibold ">Account Details</h1>
              </span>
            </div>

            <div className="flex pt-3">
              <div className="border-2 border-black h-14 w-14 rounded-md">
                <input type="image" />
              </div>

              <div className="text-indigo-600">
                <p>
                  <strong>Full Name:</strong> {formData.fullName}
                </p>
                <p>
                  <strong>Phone Number:</strong> {formData.phoneNumber}
                </p>
                <p>
                  <strong>Email Address:</strong> {formData.emailAddress}
                </p>
                <p>
                  <strong>Password:</strong> {formData.password}
                </p>
                <p>
                  <strong>Company Name:</strong> {formData.companyName}
                </p>
                <p>
                  <strong>Is Agency:</strong>{" "}
                  {formData.isAgency === "Yes" ? "Yes" : "No"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
