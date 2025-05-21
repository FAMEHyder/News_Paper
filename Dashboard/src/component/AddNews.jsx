import { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Paper,
  TextField,
  Typography,
  Skeleton,
  InputAdornment,
  CircularProgress,
  Button,
} from "@mui/material";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";

const MAX_IMAGES = 4;

const AddNews = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(t);
  }, []);

  const validationSchema = Yup.object({
    Date: Yup.string().required("Date is required"),
    images: Yup.mixed()
      .required("At least 1 image is required")
      .test(
        "fileCount",
        `You can upload up to ${MAX_IMAGES} images`,
        (value) => Array.isArray(value) && value.length > 0 && value.length <= MAX_IMAGES
      )
      .test(
        "fileType",
        "Only JPG, PNG, or GIF images allowed",
        (value) =>
          Array.isArray(value) &&
          value.every((file) =>
            ["image/jpeg", "image/png", "image/gif"].includes(file.type)
          )
      ),
  });

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      const formData = new FormData();
      formData.append("Date", values.Date);
      values.images.forEach((file) => formData.append("images", file));

      await axios.post("http://localhost:8000/product/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Product Created Successfully");
      resetForm();
    } catch (err) {
      console.error(err);
      alert("Error creating product");
    } finally {
      setSubmitting(false);
    }
  };

  const fields = [
    { name: "Date", label: "Date", type: "date" },
  ];

  return (
    <Box sx={{ p: 3, mt: 20, ml: { xs: 0, sm: 0, md: "20px" } }}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }} elevation={3}>
            <Typography variant="h5" gutterBottom>
              Create Product
            </Typography>

            <Formik
              initialValues={{
                Date: "",
                images: [],
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ setFieldValue, isSubmitting, errors, touched, values }) => (
                <Form>
                  {fields.map(({ name, label, type }) => (
                    <Field name={name} key={name}>
                      {({ field }) => (
                        <TextField
                          label={label}
                          fullWidth
                          variant="outlined"
                          type={type}
                          {...field}
                          disabled={loading}
                          InputProps={{
                            endAdornment: loading ? (
                              <Skeleton variant="circular" width={24} height={24} />
                            ) : null,
                          }}
                          sx={{ mb: 2 }}
                          error={touched[name] && !!errors[name]}
                          helperText={touched[name] && errors[name]}
                        />
                      )}
                    </Field>
                  ))}

                  {/* Image preview */}
                  {values.images.length > 0 && (
                    <Box sx={{ display: "flex", flexWrap: "wrap", mb: 1, gap: 1 }}>
                      {values.images.map((file, idx) => (
                        <Typography key={idx} variant="caption">
                          {file.name}
                        </Typography>
                      ))}
                    </Box>
                  )}

                  {/* Choose File */}
                  <Button
                    variant="contained"
                    component="span"
                    onClick={() => document.getElementById("product-images").click()}
                    sx={{
                      float: "right",
                      backgroundColor: "lightgray",
                      color: "black",
                      mb: 2,
                    }}
                    disabled={loading || values.images.length >= MAX_IMAGES}
                  >
                    Choose File
                  </Button>

                  {/* Hidden file input */}
                  <input
                    type="file"
                    id="product-images"
                    accept="image/jpeg,image/png,image/gif"
                    multiple
                    style={{ display: "none" }}
                    disabled={loading}
                    onChange={(e) => {
                      const files = Array.from(e.target.files);
                      const capped = files.slice(0, MAX_IMAGES);
                      setFieldValue("images", capped);
                    }}
                  />

                  {/* Submit button */}
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting || loading}
                    sx={{ mt: 3 }}
                  >
                    {isSubmitting ? <CircularProgress size={24} /> : "Create Product"}
                  </Button>
                </Form>
              )}
            </Formik>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddNews;
