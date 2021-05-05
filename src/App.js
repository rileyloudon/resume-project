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
      (!workText.currentJob && workText.dateEnd === '')
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

  editWork = (i) => {
    const edittedJob = this.state.workItems[i];
    const removeJob = this.state.workItems.splice(i, 1);
    const filteredWorkItems = this.state.workItems.filter(
      (work) => work !== removeJob
    );

    this.setState({
      workText: edittedJob,
      workItems: filteredWorkItems,
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
      (!educationText.currentlyEnrolled && educationText.dateEnd === '') ||
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

  editEducation = (i) => {
    const edittedSchool = this.state.educationItems[i];
    const removeSchool = this.state.educationItems.splice(i, 1);
    const filteredSchoolItems = this.state.educationItems.filter(
      (school) => school !== removeSchool
    );

    this.setState({
      educationText: edittedSchool,
      educationItems: filteredSchoolItems,
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
          editWork={this.editWork}
        />
        <Education
          educationItems={this.state.educationItems}
          educationText={this.state.educationText}
          addEducation={this.addEducation}
          updateEducationText={this.updateEducationText}
          submitResume={this.state.submitResume}
          editEducation={this.editEducation}
        />
      </div>
    );
  }
}

export default App;
