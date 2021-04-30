import '../styles/Education.css';

const EndDate = (props) => {
  const { educationText, updateEducationText } = props;
  return (
    <span>
      <label htmlFor='dateEnd'>Last Day</label>
      <input
        id='dateEnd'
        type='text'
        value={educationText.dateEnd}
        onChange={(e) => updateEducationText(e, 'Date End')}
      />
    </span>
  );
};

const EducationForm = (props) => {
  const { educationText, updateEducationText, addEducation } = props;
  const showEndDate = educationText.currentlyEnrolled ? null : (
    <EndDate
      educationText={educationText}
      updateEducationText={updateEducationText}
    />
  );

  return (
    <form>
      <label htmlFor='school'>School Name</label>
      <input
        id='school'
        type='text'
        placeholder='School'
        value={educationText.school}
        onChange={(e) => updateEducationText(e, 'School')}
        required
      />

      <label htmlFor='currentlyEnrolled'>Still studying there?</label>
      <input
        id='currentlyEnrolled'
        type='checkbox'
        name='currentlyEnrolled'
        checked={educationText.currentlyEnrolled}
        onChange={(e) => updateEducationText(e, 'Currently Enrolled')}
      />

      <label htmlFor='dateStart'>Date Started</label>
      <input
        id='dateStart'
        type='text'
        value={educationText.dateStart}
        onChange={(e) => updateEducationText(e, 'Date Start')}
        required
      />

      {showEndDate}

      <label htmlFor='schoolDescription'>Job Description</label>
      <textarea
        id='schoolDescription'
        name='schoolDescriptuon'
        placeholder='School Description'
        value={educationText.description}
        onChange={(e) => updateEducationText(e, 'Description')}
      />
      <button type='submit' onClick={addEducation}>
        Add School
      </button>
    </form>
  );
};

const EducationItem = (props) => {
  const { education } = props;

  return (
    <div>
      <p>
        <span>{education.school}</span> {education.dateStart} -{' '}
        {education.currentJob ? 'Present' : education.dateEnd}
      </p>
      <p>{education.description}</p>
    </div>
  );
};

const Education = (props) => {
  const { educationText, educationItems, updateEducationText, addEducation } = props;

  return (
    <div>
      <h1>Education</h1>
      <EducationForm
        educationText={educationText}
        updateEducationText={updateEducationText}
        addEducation={addEducation}
      />
      {educationItems.map((education) => (
        <EducationItem education={education} />
      ))}
    </div>
  );
};

export default Education;
