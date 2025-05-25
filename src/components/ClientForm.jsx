import { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Button,
  Divider,
  IconButton,
  InputAdornment,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SaveIcon from "@mui/icons-material/Save";
import CloseIcon from "@mui/icons-material/Close";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { useFormik } from "formik";
import * as Yup from "yup";

const clientTypeOptions = ["Select", "Individual", "Company", "Partnership"];
const accountTypeOptions = ["Select", "Checking", "Savings", "Business"];
const salesTypeOptions = ["Select", "Retail", "Wholesale", "Distributor"];
const paymentOptions = ["Select", "Cash", "Credit Card", "Bank Transfer"];
const currencyOptions = ["Select", "USD", "EUR", "GBP", "JPY"];
const countryOptions = ["Select", "USA", "UK", "Canada", "Australia"];

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  companyName: Yup.string(),
  address: Yup.string(),
  homeAddress: Yup.string(),
  email: Yup.string().email("Invalid email format"),
  phone: Yup.string(),
});

const ClientForm = () => {
  const [isObligatory, setIsObligatory] = useState(false);

  const formik = useFormik({
    initialValues: {
      reference: "",
      firstName: "",
      lastName: "",
      companyName: "",
      middleName: "",
      designation: "",
      nif: "",
      idPassport: "",
      email: "",
      mobile: "",
      tel: "",
      subAddresses: "",
      clientType: "Select",
      accountType: "Select",
      salesType: "Select",
      taxStatus: "Select",
      address: "",
      homeAddress: "",
      postalCode: "",
      city: "",
      state: "",
      province: "",
      country: "Select",
      payment: "Select",
      currency: "Select",
      loyalClient: false,
      credit: false,
      closeOverdue: false,
      supplier: false,
      exeTVA: false,
      payTVA: false,
      vatCredit: false,
      asProv: false,
      defaultFreeze: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "center" },
          flexDirection: { xs: "column", md: "row" },
          mb: 2,
        }}
      >
        <Box>
          <Typography variant="h3" component="h1" gutterBottom>
            Client (ADD)
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Add Client Details
          </Typography>
        </Box>
        <Box sx={{ alignSelf: { xs: "flex-end", md: "center" } }}>
          <IconButton sx={{ mr: 1, display: "flex", alignItems: "center" }}>
            <HomeOutlinedIcon sx={{ fontSize: "20px" }} />
            <Typography variant="body1" color="text.secondary" sx={{ mx: 0.5 }}>
              Home /
            </Typography>
            <Typography variant="body1" color="#1976D2">
              Add Article
            </Typography>
          </IconButton>
        </Box>
      </Box>

      <form onSubmit={formik.handleSubmit}>
        <Paper sx={{ p: 3, mb: 3 }}>
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6">Personal Details</Typography>
          </Box>

          <Grid
            container
            spacing={2}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Grid size={{ xs: 12, lg: 3 }}>
              <TextField
                fullWidth
                id="reference"
                name="reference"
                label="Reference"
                value={formik.values.reference}
                onChange={formik.handleChange}
                error={
                  formik.touched.reference && Boolean(formik.errors.reference)
                }
                helperText={formik.touched.reference && formik.errors.reference}
                size="small"
                margin="dense"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 9, lg: 7 }}>
              <TextField
                fullWidth
                id="companyName"
                name="companyName"
                label="Company Name"
                value={formik.values.companyName}
                onChange={formik.handleChange}
                error={
                  formik.touched.companyName &&
                  Boolean(formik.errors.companyName)
                }
                helperText={
                  formik.touched.companyName && formik.errors.companyName
                }
                size="small"
                margin="dense"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 3, lg: 2 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isObligatory}
                    onChange={(e) => setIsObligatory(e.target.checked)}
                    name="isObligatory"
                  />
                }
                label="Obligatory"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 3 }}>
              <TextField
                fullWidth
                id="middleName"
                name="middleName"
                label="Middle Name"
                value={formik.values.middleName}
                onChange={formik.handleChange}
                error={
                  formik.touched.middleName && Boolean(formik.errors.middleName)
                }
                helperText={
                  formik.touched.middleName && formik.errors.middleName
                }
                size="small"
                margin="dense"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 3 }}>
              <TextField
                fullWidth
                id="firstName"
                name="firstName"
                label="First Name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
                size="small"
                margin="dense"
                required
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 3 }}>
              <TextField
                fullWidth
                id="lastName"
                name="lastName"
                label="Last Name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
                size="small"
                margin="dense"
                required
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 3 }}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                size="small"
                margin="dense"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 3 }}>
              <TextField
                fullWidth
                id="subAddresses"
                name="subAddresses"
                label="SubAddresses"
                value={formik.values.subAddresses}
                onChange={formik.handleChange}
                error={
                  formik.touched.subAddresses &&
                  Boolean(formik.errors.subAddresses)
                }
                helperText={
                  formik.touched.subAddresses && formik.errors.subAddresses
                }
                size="small"
                margin="dense"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 3 }}>
              <TextField
                fullWidth
                id="designation"
                name="designation"
                label="Designation"
                value={formik.values.designation}
                onChange={formik.handleChange}
                error={
                  formik.touched.designation &&
                  Boolean(formik.errors.designation)
                }
                helperText={
                  formik.touched.designation && formik.errors.designation
                }
                size="small"
                margin="dense"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 3 }}>
              <TextField
                fullWidth
                id="nif"
                name="nif"
                label="N.I.F"
                value={formik.values.nif}
                onChange={formik.handleChange}
                error={formik.touched.nif && Boolean(formik.errors.nif)}
                helperText={formik.touched.nif && formik.errors.nif}
                size="small"
                margin="dense"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 3 }}>
              <TextField
                fullWidth
                id="mobile"
                name="mobile"
                label="Mobile"
                value={formik.values.mobile}
                onChange={formik.handleChange}
                error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                helperText={formik.touched.mobile && formik.errors.mobile}
                size="small"
                margin="dense"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 3 }}>
              <TextField
                fullWidth
                id="tel"
                name="tel"
                label="Tel"
                value={formik.values.tel}
                onChange={formik.handleChange}
                error={formik.touched.tel && Boolean(formik.errors.tel)}
                helperText={formik.touched.tel && formik.errors.tel}
                size="small"
                margin="dense"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 3 }}>
              <TextField
                fullWidth
                id="idPassport"
                name="idPassport"
                label="ID Passport"
                value={formik.values.idPassport}
                onChange={formik.handleChange}
                error={
                  formik.touched.idPassport && Boolean(formik.errors.idPassport)
                }
                helperText={
                  formik.touched.idPassport && formik.errors.idPassport
                }
                size="small"
                margin="dense"
              />
            </Grid>
          </Grid>
        </Paper>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, lg: 8 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Client Category
              </Typography>
              <Grid
                container
                spacing={2}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                  <FormControl fullWidth size="small" margin="dense">
                    <InputLabel id="clientType-label">Client Type</InputLabel>
                    <Select
                      labelId="clientType-label"
                      id="clientType"
                      name="clientType"
                      value={formik.values.clientType}
                      onChange={formik.handleChange}
                      label="Client Type"
                    >
                      {clientTypeOptions.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                  <FormControl fullWidth size="small" margin="dense">
                    <InputLabel id="accountType-label">Account Type</InputLabel>
                    <Select
                      labelId="accountType-label"
                      id="accountType"
                      name="accountType"
                      value={formik.values.accountType}
                      onChange={formik.handleChange}
                      label="Account Type"
                    >
                      {accountTypeOptions.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                  <FormControl fullWidth size="small" margin="dense">
                    <InputLabel id="salesType-label">Fac. Type</InputLabel>
                    <Select
                      labelId="salesType-label"
                      id="salesType"
                      name="salesType"
                      value={formik.values.salesType}
                      onChange={formik.handleChange}
                      label="Sales Type"
                    >
                      {salesTypeOptions.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                  <TextField
                    fullWidth
                    id="telephone"
                    name="telephone"
                    label="Telephone"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    error={formik.touched.city && Boolean(formik.errors.city)}
                    helperText={formik.touched.city && formik.errors.city}
                    size="small"
                    margin="dense"
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email IDs"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    error={formik.touched.city && Boolean(formik.errors.city)}
                    helperText={formik.touched.city && formik.errors.city}
                    size="small"
                    margin="dense"
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    id="address"
                    name="address"
                    label="Address"
                    multiline
                    rows={3}
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.address && Boolean(formik.errors.address)
                    }
                    helperText={formik.touched.address && formik.errors.address}
                    size="small"
                    margin="dense"
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    id="homeAddress"
                    name="homeAddress"
                    label="Home Address"
                    multiline
                    rows={3}
                    value={formik.values.homeAddress}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.homeAddress &&
                      Boolean(formik.errors.homeAddress)
                    }
                    helperText={
                      formik.touched.homeAddress && formik.errors.homeAddress
                    }
                    size="small"
                    margin="dense"
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                  <TextField
                    fullWidth
                    id="postalCode"
                    name="postalCode"
                    label="Postal Code"
                    value={formik.values.postalCode}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.postalCode &&
                      Boolean(formik.errors.postalCode)
                    }
                    helperText={
                      formik.touched.postalCode && formik.errors.postalCode
                    }
                    size="small"
                    margin="dense"
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                  <TextField
                    fullWidth
                    id="city"
                    name="city"
                    label="City"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    error={formik.touched.city && Boolean(formik.errors.city)}
                    helperText={formik.touched.city && formik.errors.city}
                    size="small"
                    margin="dense"
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                  <TextField
                    fullWidth
                    id="villa"
                    name="villa"
                    label="Villa"
                    value={formik.values.state}
                    onChange={formik.handleChange}
                    error={formik.touched.state && Boolean(formik.errors.state)}
                    helperText={formik.touched.state && formik.errors.state}
                    size="small"
                    margin="dense"
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                  <TextField
                    fullWidth
                    id="province"
                    name="province"
                    label="Province"
                    value={formik.values.province}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.province && Boolean(formik.errors.province)
                    }
                    helperText={
                      formik.touched.province && formik.errors.province
                    }
                    size="small"
                    margin="dense"
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                  <FormControl fullWidth size="small" margin="dense">
                    <InputLabel id="country-label">Country</InputLabel>
                    <Select
                      labelId="country-label"
                      id="country"
                      name="country"
                      value={formik.values.country}
                      onChange={formik.handleChange}
                      label="Country"
                    >
                      {countryOptions.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                  <FormControl fullWidth size="small" margin="dense">
                    <InputLabel id="payment-label">Segment</InputLabel>
                    <Select
                      labelId="payment-label"
                      id="payment"
                      name="payment"
                      value={formik.values.payment}
                      onChange={formik.handleChange}
                      label="Payment"
                    >
                      {paymentOptions.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                  <FormControl fullWidth size="small" margin="dense">
                    <InputLabel id="currency-label">Commercial</InputLabel>
                    <Select
                      labelId="currency-label"
                      id="currency"
                      name="currency"
                      value={formik.values.currency}
                      onChange={formik.handleChange}
                      label="Currency"
                    >
                      {currencyOptions.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                  <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    sx={{
                      backgroundColor: "#1976D2",
                      "&:hover": { backgroundColor: "#1565c0" },
                    }}
                  >
                    Machine
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            <Grid size={{ xs: 12, lg: 4 }}>
              <Box
                sx={{
                  backgroundColor: "#EDF4FB",
                  padding: 3,
                }}
              >
                <Grid container spacing={1}>
                  <Grid
                    container
                    columnSpacing={2}
                    rowSpacing={0}
                    sx={{ width: "100%" }}
                  >
                    <Grid size={{ xs: 12, md: 6 }}>
                      <TextField
                        label="Rémise"
                        fullWidth
                        size="small"
                        placeholder="--"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">%</InputAdornment>
                          ),
                        }}
                        sx={{ backgroundColor: "#FFFFFF" }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Box>
                        <FormControlLabel
                          control={<Checkbox defaultChecked />}
                          label="Local Client"
                        />
                      </Box>
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    columnSpacing={2}
                    rowSpacing={0}
                    sx={{ width: "100%" }}
                  >
                    <Grid size={{ xs: 12, md: 6 }}>
                      <TextField
                        label="Credit Limit"
                        fullWidth
                        size="small"
                        placeholder="--"
                        sx={{ backgroundColor: "#FFFFFF" }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Box>
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Credit"
                        />
                      </Box>
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    columnSpacing={2}
                    rowSpacing={0}
                    sx={{ width: "100%" }}
                  >
                    <Grid size={{ xs: 12, md: 6 }}>
                      <TextField
                        label="Main d'oveuvre remise"
                        fullWidth
                        size="small"
                        placeholder="--"
                        sx={{ backgroundColor: "#FFFFFF" }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Box>
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Clients Douteux"
                        />
                      </Box>
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    columnSpacing={2}
                    rowSpacing={0}
                    sx={{ width: "100%" }}
                  >
                    <Grid size={{ xs: 12, md: 6 }}>
                      <TextField
                        label="Proforma Validity"
                        fullWidth
                        size="small"
                        placeholder="--"
                        sx={{ backgroundColor: "#FFFFFF" }}
                      />
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    columnSpacing={2}
                    rowSpacing={0}
                    sx={{ width: "100%" }}
                  >
                    <Grid size={{ xs: 12, md: 6 }}>
                      <TextField
                        label="Fournitures remise"
                        fullWidth
                        size="small"
                        placeholder="--"
                        sx={{ backgroundColor: "#FFFFFF" }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Box>
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Supprimer"
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>

                {/* Divider */}
                <Grid size={{ xs: 12 }} sx={{ margin: "20px 0" }}>
                  <Divider />
                </Grid>

                {/* Bottom checkboxes */}
                <Grid size={{ xs: 12 }}>
                  <Grid container spacing={1}>
                    {[
                      "Exo. TVA",
                      "Pas TVA Non Declare",
                      "Vente Credit",
                      "JMA",
                      "Cellule Fiscal",
                      "A4 Print",
                    ].map((label, idx) => (
                      <Grid size={{ xs: 12, sm: 6, md: 4, lg: 6 }} key={idx}>
                        <FormControlLabel
                          control={<Checkbox />}
                          label={
                            <Typography variant="body2">{label}</Typography>
                          }
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
          <Button
            variant="contained"
            startIcon={<CloseIcon />}
            sx={{ mr: 2, backgroundColor: "#979797" }}
            onClick={() => formik.resetForm()}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            type="submit"
            startIcon={<SaveIcon />}
            sx={{ backgroundColor: "#007AFF" }}
          >
            Save
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default ClientForm;