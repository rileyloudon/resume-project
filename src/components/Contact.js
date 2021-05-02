import '../styles/Contact.css';

const ContactInfo = (props) => {
  const { contactText, updateInput } = props;

  return (
    <form id='contact-form'>
      <h2>Contact Info</h2>
      <label>
        Name *
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

export default ContactInfo;
