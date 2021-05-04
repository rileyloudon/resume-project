import React from 'react';
import './App.css';
import { v1 as uuid } from 'uuid';
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
        id: uuid(),
      },

      educationItems: [],
      educationText: {
        school: '',
        dateStart: '',
        dateEnd: '',
        currentlyEnrolled: false,
        description: '',
        id: uuid(),
      },

      submitResume: false,
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
        id: uuid(),
      },
    });
  };

  updateWorkText = (e, textField) => {
    const tempWorkText = {
      ...this.state.workText,
      [textField]: textField === 'currentJob' ? e.target.checked : e.target.value,
    };

    this.setState({
      workText: tempWorkText,
    });
  };

  addEducation = (e) => {
    const { educationText } = this.state;

    e.preventDefault();

    if (
      educationText.school === '' ||
      (!educationText.currentlyEnrolled && educationText.lastDay === '') ||
      (educationText.currentlyEnrolled && educationText.dateStart === '')
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
        id: uuid(),
      },
    });
  };

  updateEducationText = (e, textField) => {
    const tempEducationText = {
      ...this.state.educationText,
      [textField]:
        textField === 'currentlyEnrolled' ? e.target.checked : e.target.value,
    };

    this.setState({
      educationText: tempEducationText,
    });
  };

  handleSubmitResume = () => {
    this.setState({ submitResume: this.state.submitResume ? false : true });
  };

  render() {
    return (
      <div id='resume-generator'>
        <header>
          <h2>Resume Generator</h2>
          <button className='submit-resume' onClick={this.handleSubmitResume}>
            {this.state.submitResume ? 'Back' : 'Submit'}
          </button>
        </header>
        <ContactInfo
          contactText={this.state.contactText}
          updateInput={this.updateContactText}
          submitResume={this.state.submitResume}
        />
        <WorkExperience
          workItems={this.state.workItems}
          workText={this.state.workText}
          addWork={this.addWork}
          updateWorkText={this.updateWorkText}
          submitResume={this.state.submitResume}
        />
        <Education
          educationItems={this.state.educationItems}
          educationText={this.state.educationText}
          addEducation={this.addEducation}
          updateEducationText={this.updateEducationText}
          submitResume={this.state.submitResume}
        />
      </div>
    );
  }
}

export default App;
