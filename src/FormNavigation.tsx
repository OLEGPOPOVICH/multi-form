import { Button } from "@material-ui/core";
import { FormikValues } from "formik";

interface Props {
  hasPrevious?: boolean;
  isLastStep: boolean;
  onBackClick: (values: FormikValues) => void;
}

const FormNavigation = (props: Props) => (
  <div style={{
    display: 'flex',
    marginTop: 50,
    justifyContent: 'space-between'
  }}>
    {props.hasPrevious && (
      <Button
        variant="contained"
        type="button"
        onClick={props.onBackClick}
      >Back</Button>
    )}

    <Button
      type="submit"
      color="primary"
      variant="contained"
    >{props.isLastStep ? 'Submit' : 'Next'}</Button>
  </div>
);

export default FormNavigation;