import React from 'react';
import './App.css';
import ContactInfo from './components/Contact';
import Education from './components/Eduction';
import WorkExperience from './components/WorkExperience';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      contactText: { name: '', address: '', city: '', phone: '', email: '' },
      workItems: [],
      workText: {
        company: '',
        dateStart: '',
        dateEnd: '',
        currentJob: false,
        description: '',
      },
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

  addWork = (e) => {
    const { workText } = this.state;

    e.preventDefault();
    if (
      workText.company === '' ||
      workText.dateStart === '' ||
      (!workText.currentJob && workText.lastDay === '')
    )
      return;

    this.setState({
      workItems: this.state.workItems.concat(this.state.workText),
      workText: {
        company: '',
        currentJob: false,
        dateStart: '',
        dateEnd: '',
        description: '',
      },
    });
  };

  updateWorkText = (e, textField) => {
    this.setState({
      workText: {
        company:
          textField === 'Company' ? e.target.value : this.state.workText.company,

        currentJob:
          textField === 'Current Job'
            ? e.target.checked
            : this.state.workText.currentJob,

        dateStart:
          textField === 'Date Start'
            ? e.target.value
            : this.state.workText.dateStart,

        dateEnd:
          textField === 'Date End' ? e.target.value : this.state.workText.dateEnd,

        description:
          textField === 'Description'
            ? e.target.value
            : this.state.contactText.email,
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
        <WorkExperience
          workItems={this.state.workItems}
          workText={this.state.workText}
          addWork={this.addWork}
          updateWorkText={this.updateWorkText}
        />
        <Education />
      </div>
    );
  }
}

export default App;
