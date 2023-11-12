import { Formik, Form, Field } from 'formik';

const INITIAL_VALUES = {
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: '',
};

const ContactForm = () => {
  return (
    <div className="tw-bg-[#5494B8] tw-rounded-2xl tw-max-w-2xl tw-px-8 tw-py-6">
      <Formik initialValues={INITIAL_VALUES} onSubmit={() => {}}>
        {() => (
          <Form>
            <div className="tw-pb-2 tw-flex tw-gap-12 tw-justify-center">
              <div className="tw-flex tw-flex-col tw-w-full">
                <label className="tw-text-left tw-pb-1" htmlFor="firstName">
                  First Name
                </label>
                <Field
                  className="tw-rounded-3xl tw-border-none tw-px-2 tw-py-1"
                  tupe="text"
                  name="firstName"
                />
              </div>
              <div className="tw-flex tw-flex-col tw-w-full">
                <label className="tw-text-left tw-pb-1" htmlFor="lastName">
                  Last Name
                </label>
                <Field
                  className="tw-rounded-3xl tw-border-none tw-px-2 tw-py-1"
                  type="text"
                  name="lastName"
                />
              </div>
            </div>
            <div className="tw-py-2 tw-flex tw-flex-col tw-w-full">
              <label className="tw-text-left tw-pb-1" htmlFor="email">
                Email
              </label>
              <Field
                className="tw-rounded-3xl tw-border-none tw-px-2 tw-py-1"
                type="email"
                name="email"
              />
            </div>
            <div className="tw-py-2 tw-flex tw-flex-col tw-w-full">
              <label className="tw-text-left tw-pb-1" htmlFor="subject">
                Subject
              </label>
              <Field
                className="tw-rounded-3xl tw-border-none tw-px-2 tw-py-1"
                type="text"
                name="subject"
              />
            </div>
            <div className="tw-pt-2 tw-flex tw-flex-col tw-w-full">
              <label className="tw-text-left tw-pb-1" htmlFor="message">
                Message
              </label>
              <Field
                className="tw-rounded-3xl tw-border-none tw-px-2 tw-py-1"
                as="textarea"
                name="message"
                rows={5}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
