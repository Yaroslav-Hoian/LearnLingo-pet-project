import { Field, Form, Formik, FormikHelpers } from "formik";
import css from "./CamperIdBooking.module.css";
import * as Yup from "yup";
import toast from "react-hot-toast";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { clsx } from "clsx";

interface CamperFormValuesProps {
  name: string;
  email: string;
  bookingDate: [Date | null, Date | null];
  comment: string;
}

const initialFormValues: CamperFormValuesProps = {
  name: "",
  email: "",
  bookingDate: [null, null],
  comment: "",
};

const CampersFormShema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(25, "Name is too long")
    .required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  bookingDate: Yup.array()
    .of(Yup.date().nullable())
    .test(
      "date-range",
      "Please select booking period",
      (value) => !!value && !!value[0] && !!value[1],
    ),
  comment: Yup.string().max(400, "Comment is too long"),
});

const CamperIdBooking = () => {
  const handleSubmit = (
    values: CamperFormValuesProps,
    action: FormikHelpers<CamperFormValuesProps>,
  ) => {
    toast.success("Booking request sent successfully!");
    action.resetForm();
  };

  return (
    <div className={css.booking}>
      <div className={css.bookingContainer}>
        <h3 className={css.bookingTitle}>Book your campervan now</h3>
        <p className={css.bookingText}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <Formik
        enableReinitialize
        initialValues={initialFormValues}
        validationSchema={CampersFormShema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue, errors, touched }) => (
          <Form className={css.bookingForm}>
            <Field
              type="text"
              name="name"
              placeholder="Name*"
              className={css.input}
            />
            <div
              className={clsx(
                css.errorBox,
                touched.name && errors.name && css.error,
              )}
            >
              {touched.name && errors.name}
            </div>
            <Field
              type="text"
              name="email"
              placeholder="Email*"
              className={css.input}
            />
            <div
              className={clsx(
                css.errorBox,
                touched.email && errors.email && css.error,
              )}
            >
              {touched.email && errors.email}
            </div>
            <DatePicker
              selectsRange
              startDate={values.bookingDate[0]}
              endDate={values.bookingDate[1]}
              onChange={(dates) => {
                setFieldValue("bookingDate", dates);
              }}
              placeholderText="Booking Date*"
              dateFormat="dd.MM.yyyy"
              className={css.input}
              minDate={new Date()}
            />

            <div
              className={clsx(
                css.errorBox,
                touched.bookingDate && errors.bookingDate && css.error,
              )}
            >
              {touched.bookingDate && errors.bookingDate}
            </div>
            <Field
              as="textarea"
              name="comment"
              placeholder="Comment"
              className={`${css.input} ${css.textarea}`}
            />
            <div className={css.btnBox}>
              <button type="submit" className={css.sendBtn}>
                Send
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CamperIdBooking;
