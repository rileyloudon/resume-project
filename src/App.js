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
      contactErrorMessage: '',

      workItems: [],
      workText: {
        company: '',
        dateStart: '',
        dateEnd: '',
        currentJob: false,
        description: '',
        id: uuid(),
      },
      workErrorMessage: '',

      educationItems: [],
      educationText: {
        school: '',
        dateStart: '',
        dateEnd: '',
        currentlyEnrolled: false,
        description: '',
        id: uuid(),
      },
      educationErrorMessage: '',

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

    if (workText.company === '') {
      return this.setState({
        workErrorMessage: 'Please enter a company name',
      });
    }

    if (workText.dateStart === '') {
      return this.setState({
        workErrorMessage: 'Please enter a start date',
      });
    }

    if (!workText.currentJob && workText.dateEnd === '') {
      return this.setState({
        workErrorMessage: 'Please enter your last working day',
      });
    }

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
      workErrorMessage: '',
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

    if (educationText.school === '') {
      return this.setState({
        educationErrorMessage: "Please enter your school's name",
      });
    }

    if (!educationText.currentlyEnrolled && educationText.dateEnd === '') {
      return this.setState({
        educationErrorMessage: 'Please enter your last school day',
      });
    }

    if (educationText.currentlyEnrolled && educationText.dateStart === '') {
      return this.setState({
        educationErrorMessage: 'Please enter your first school day',
      });
    }

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
      educationErrorMessage: '',
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

  setSubmitResume = () => {
    this.setState({ submitResume: this.state.submitResume ? false : true });
  };

  validateContactText = () => {
    const { name, address, city, phone, email } = this.state.contactText;

    if (name === '') {
      return this.setState({
        contactErrorMessage: 'Please enter your first and last name',
      });
    }

    if (address === '') {
      return this.setState({
        contactErrorMessage: 'Please enter your address',
      });
    }

    if (city === '') {
      return this.setState({
        contactErrorMessage: 'Please enter your city',
      });
    }

    if (phone === '') {
      return this.setState({
        contactErrorMessage: 'Please enter your phone number',
      });
    }

    const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    if (!emailRegex.test(email)) {
      return this.setState({
        contactErrorMessage: 'Please enter a valid email',
      });
    }

    if (email === '') {
      return this.setState({
        contactErrorMessage: 'Please enter your email',
      });
    }

    this.setState({ contactErrorMessage: '' });
    this.setSubmitResume();
  };

  render() {
    return (
      <div id='resume-generator'>
        <header>
          <h2>Resume Generator</h2>
          <button className='submit-resume' onClick={this.validateContactText}>
            {this.state.submitResume ? 'Back' : 'Submit'}
          </button>
        </header>
        <ContactInfo
          contactText={this.state.contactText}
          updateInput={this.updateContactText}
          submitResume={this.state.submitResume}
          contactErrorMessage={this.state.contactErrorMessage}
        />
        <WorkExperience
          workItems={this.state.workItems}
          workText={this.state.workText}
          addWork={this.addWork}
          updateWorkText={this.updateWorkText}
          submitResume={this.state.submitResume}
          editWork={this.editWork}
          workErrorMessage={this.state.workErrorMessage}
        />
        <Education
          educationItems={this.state.educationItems}
          educationText={this.state.educationText}
          addEducation={this.addEducation}
          updateEducationText={this.updateEducationText}
          submitResume={this.state.submitResume}
          editEducation={this.editEducation}
          educationErrorMessage={this.state.educationErrorMessage}
        />
      </div>
    );
  }
}

export default App;
