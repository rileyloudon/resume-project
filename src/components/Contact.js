import '../styles/Contact.css';

const ContactInfo = (props) => {
  const { contactText, updateInput } = props;

  return (
    <form>
      <h1>Contact Info</h1>
      <input
        type='text'
        placeholder='Name'
        value={contactText.name}
        onChange={(e) => updateInput(e, 'Name')}
      />
      <input
        type='text'
        placeholder='Address'
        value={contactText.address}
        onChange={(e) => updateInput(e, 'Address')}
      />
      <input
        type='text'
        placeholder='City'
        value={contactText.city}
        onChange={(e) => updateInput(e, 'City')}
      />
      <input
        type='tel'
        placeholder='Phone Number'
        value={contactText.phone}
        onChange={(e) => updateInput(e, 'Phone')}
      />
      <input
        type='email'
        placeholder='Email'
        value={contactText.email}
        onChange={(e) => updateInput(e, 'Email')}
      />
    </form>
  );
};

export default ContactInfo;
