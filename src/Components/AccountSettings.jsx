import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const AccountSettings = () => {
  return (
    <div className="grid justify-center">
      <div className="w-[350px] h-[640px] border-2">
        <div className="flex">
          <div className="grid mx-4 space-y-3">
            <div className="w-[250px] text-start grid p-2 space-y-3">
              <h1 className="text-lg">Account Settings</h1>
            </div>
            <div>
              <Stack direction="row" spacing={2}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
