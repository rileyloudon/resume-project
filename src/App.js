import React from 'react';
import './App.css';
import ContactInfo from './components/Contact';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      contactText: { name: '', address: '', city: '', phone: '', email: '' },
      contactItems: [],
      education: [],
      workExperience: [],
    };
  }

  updateContactText = (e, textField) => {
    this.setState({
      contactText: {
        name: textField === 'Name' ? e.target.value : this.state.contactText.name,
        address:
          textField === 'Address' ? e.target.value : this.state.contactText.address,
        city: textField === 'City' ? e.target.value : this.state.contactText.city,
        phone: textField === 'Phone' ? e.target.value : this.state.contactText.phone,
        email: textField === 'Email' ? e.target.value : this.state.contactText.email,
      },
    });
  };

  render() {
    return (
      <div>
        <header>Resume</header>
        <ContactInfo
          contactText={this.state.contactText}
          updateInput={this.updateContactText}
        />
      </div>
    );
  }
}

export default App;
