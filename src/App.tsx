import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  Button,
  Grid2,
  InputAdornment,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";

function App() {
  const [username, setUserName] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [users, setUsers] = useState([]);
  const jenisJabatan = [
    { value: "Administrator", label: "Administrator" },
    { value: "Manager", label: "Manager" },
    { value: "SPV", label: "SPV" },
    { value: "Agent", label: "Agent" },
  ];

  const onHandleClick = () => {
    const user = [...users, { user: username, jabatan: jabatan }];
    setUsers(user);
  };
  return (
    <div>
      <Stack spacing={3}>
        <TextField
          label="Nama User"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            },
          }}
          variant="standard"
        />
        <TextField
          select
          label="Pilih Jabatan"
          value={jabatan}
          onChange={(e) => setJabatan(e.target.value)}
          helperText="pilih jabatan"
        >
          {jenisJabatan.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Button variant="contained" onClick={onHandleClick}>
          Submit
        </Button>
        {users.map((a) => (
          <div>
            <p>userName: {a.user}</p>
            <p>userName: {a.jabatan}</p>
          </div>
        ))}
      </Stack>
    </div>
  );
}

export default App;
