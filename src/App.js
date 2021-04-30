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

      educationItems: [],
      educationText: {
        school: '',
        dateStart: '',
        dateEnd: '',
        currentlyEnrolled: false,
        description: '',
      },
    };
  }

  updateContactText = (e, textField) => {
    const tempContactText = {
      ...this.state.contactText,
      [textField]: e.target.value,
    };

    this.setState({
      contactText: tempContactText,
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
    const tempWorkText = {
      ...this.state.workText,
      [textField]: e.target.value,
    };

    this.setState({
      workText: tempWorkText,
    });
  };

  addEducation = (e) => {
    const { educationText } = this.state;

    e.preventDefault();

    if (
      educationText.company === '' ||
      educationText.dateStart === '' ||
      (!educationText.currentJob && educationText.lastDay === '')
    )
      return;

    this.setState({
      educationItems: this.state.educationItems.concat(this.state.educationText),
      educationText: {
        school: '',
        currentlyEnrolled: false,
        dateStart: '',
        dateEnd: '',
        description: '',
      },
    });
  };

  updateEducationText = (e, textField) => {
    const tempEducationText = {
      ...this.state.educationText,
      [textField]: e.target.value,
    };

    this.setState({
      educationText: tempEducationText,
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
        <Education
          educationItems={this.state.educationItems}
          educationText={this.state.educationText}
          addEducation={this.addEducation}
          updateEducationText={this.updateEducationText}
        />
      </div>
    );
  }
}

export default App;
