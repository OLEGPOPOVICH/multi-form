import * as yup from 'yup';
import InputField from './InputField';
import './App.css';
import MultiStepForm, { FormStep } from './MultiStepForm';

const personValidationSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().required('Email is required')
})

const addressValidationSchema = yup.object({
  street: yup.string().required('Street is required'),
  country: yup.string().required('Country is required')
})


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MultiStepForm
          initialValues={{
            name: '',
            email: '',
            street: '',
            country: ''
          }}
          onSubmit={(values) => {
            console.log(JSON.stringify(values, null, 3));
          }}
        >
          <FormStep
            stepName="Person"
            onSubmit={() => console.log("STEP 1")}
            validationSchema={personValidationSchema}
          >
            <InputField name="name" label="Name" />
            <InputField name="email" label="Email" />
          </FormStep>
          <FormStep
            stepName="Address"
            onSubmit={() => console.log("STEP 2")}
            validationSchema={addressValidationSchema}
          >
            <InputField name="street" label="Street" />
            <InputField name="country" label="Coutry" />
          </FormStep>
        </MultiStepForm>
      </header>
    </div>
  );
}

export default App;
