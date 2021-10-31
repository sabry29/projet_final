
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Grid } from '@material-ui/core';

const FormInput = ({ name, label })=> {
  const { control } = useForm();

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => <TextField fullWidth label={label} required />}
      />
    </Grid>
  );
}

export default FormInput;
