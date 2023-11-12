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
    <div className="tw-bg-[#B6D3B7] tw-rounded-2xl tw-max-w-2xl tw-px-8 tw-py-6">
      <Formik initialValues={INITIAL_VALUES} onSubmit={() => {}}>
        {() => (
          <Form>
            <div className="tw-pb-2 tw-flex tw-gap-12 tw-justify-center">
              <div className="tw-flex tw-flex-col tw-w-full">
                <label className="tw-text-left" htmlFor="firstName">
                  First Name
                </label>
                <Field
                  className="tw-rounded-3xl tw-border-none tw-px-2 tw-py-1 tw-bg-[#8B5B93]"
                  tupe="text"
                  name="firstName"
                />
              </div>
              <div className="tw-flex tw-flex-col tw-w-full">
                <label className="tw-text-left" htmlFor="lastName">
                  Last Name
                </label>
                <Field
                  className="tw-rounded-3xl tw-border-none tw-px-2 tw-py-1 tw-bg-[#8B5B93]"
                  type="text"
                  name="lastName"
                />
              </div>
            </div>
            <div className="tw-py-2 tw-flex tw-flex-col tw-w-full">
              <label className="tw-text-left" htmlFor="email">
                Email
              </label>
              <Field
                className="tw-rounded-3xl tw-border-none tw-px-2 tw-py-1 tw-bg-[#8B5B93]"
                type="email"
                name="email"
              />
            </div>
            <div className="tw-py-2 tw-flex tw-flex-col tw-w-full">
              <label className="tw-text-left" htmlFor="subject">
                Subject
              </label>
              <Field
                className="tw-rounded-3xl tw-border-none tw-px-2 tw-py-1 tw-bg-[#8B5B93]"
                type="text"
                name="subject"
              />
            </div>
            <div className="tw-pt-2 tw-flex tw-flex-col tw-w-full">
              <label className="tw-text-left" htmlFor="message">
                Message
              </label>
              <Field
                className="tw-rounded-3xl tw-border-none tw-px-2 tw-py-1 tw-bg-[#8B5B93]"
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
