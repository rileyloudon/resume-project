import '../styles/Contact.css';

const ShowError = (props) => {
  const { contactErrorMessage } = props;
  if (contactErrorMessage === '') return null;

  return <div className='contact-error'>{contactErrorMessage}</div>;
};

const ContactForm = (props) => {
  const { contactText, updateInput, contactErrorMessage } = props;

  return (
    <form id='contact-form'>
      <h2>Contact Info</h2>
      <ShowError contactErrorMessage={contactErrorMessage} />

      <label>
        First and Last Name *
        <input
          id='name'
          type='text'
          placeholder='Name'
          value={contactText.name}
          onChange={(e) => updateInput(e, 'name')}
          required
        />
      </label>

      <label>
        Address *
        <input
          id='address'
          type='text'
          placeholder='Address'
          value={contactText.address}
          onChange={(e) => updateInput(e, 'address')}
        />
      </label>

      <label>
        City *
        <input
          id='city'
          type='text'
          placeholder='City'
          value={contactText.city}
          onChange={(e) => updateInput(e, 'city')}
        />
      </label>

      <label>
        Phone Number *
        <input
          id='number'
          type='tel'
          placeholder='Phone Number'
          value={contactText.phone}
          onChange={(e) => updateInput(e, 'phone')}
        />
      </label>

      <label>
        Email *
        <input
          id='email'
          type='email'
          placeholder='Email'
          value={contactText.email}
          onChange={(e) => updateInput(e, 'email')}
          required
        />
      </label>
    </form>
  );
};

const ContactData = (props) => {
  const { contactText } = props;

  return (
    <div className='saved-conact-info'>
      <h1>{contactText.name}</h1>
      <div className='contact-left'>
        <h4>{contactText.address}</h4>
        <h4>{contactText.city}</h4>
      </div>
      <div className='contact-right'>
        <h4>{contactText.phone}</h4>
        <h4>{contactText.email}</h4>
      </div>
    </div>
  );
};

const ContactInfo = (props) => {
  const { contactText, updateInput, submitResume, contactErrorMessage } = props;

  return (
    <div id='contact-info'>
      {submitResume ? (
        <ContactData contactText={contactText} />
      ) : (
        <ContactForm
          contactText={contactText}
          updateInput={updateInput}
          contactErrorMessage={contactErrorMessage}
        />
      )}
    </div>
  );
};

export default ContactInfo;
