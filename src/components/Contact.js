import '../styles/Contact.css';

const ContactInfo = (props) => {
  const { contactText, updateInput } = props;

  return (
    <form>
      <h1>Contact Info</h1>
      <label htmlFor='name'>Name</label>
      <input
        id='name'
        type='text'
        placeholder='Name'
        value={contactText.name}
        onChange={(e) => updateInput(e, 'name')}
        required
      />

      <label htmlFor='address'>Address</label>
      <input
        id='address'
        type='text'
        placeholder='Address'
        value={contactText.address}
        onChange={(e) => updateInput(e, 'address')}
      />

      <label htmlFor='city'>City</label>
      <input
        id='city'
        type='text'
        placeholder='City'
        value={contactText.city}
        onChange={(e) => updateInput(e, 'city')}
      />

      <label htmlFor='number'>Phone Number</label>
      <input
        id='number'
        type='tel'
        placeholder='Phone Number'
        value={contactText.phone}
        onChange={(e) => updateInput(e, 'phone')}
      />

      <label htmlFor='email'>Email</label>
      <input
        id='email'
        type='email'
        placeholder='Email'
        value={contactText.email}
        onChange={(e) => updateInput(e, 'email')}
        required
      />
    </form>
  );
};

export default ContactInfo;
