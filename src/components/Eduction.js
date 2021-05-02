import '../styles/Education.css';

const EndDate = (props) => {
  const { educationText, updateEducationText } = props;
  return (
    <label>
      Last Day *
      <input
        type='text'
        placeholder='Last Day'
        value={educationText.dateEnd}
        onChange={(e) => updateEducationText(e, 'dateEnd')}
      />
    </label>
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
    <form id='school-form'>
      <label>
        School Name *
        <input
          type='text'
          placeholder='School'
          value={educationText.school}
          onChange={(e) => updateEducationText(e, 'school')}
          required
        />
      </label>

      <label className='currently-enrolled'>
        Still studying there?
        <input
          id='currentlyEnrolled'
          type='checkbox'
          name='currentlyEnrolled'
          checked={educationText.currentlyEnrolled}
          onChange={(e) => updateEducationText(e, 'currentlyEnrolled')}
        />
      </label>

      <label>
        {educationText.currentlyEnrolled === false
          ? 'Date Started'
          : 'Date Started *'}
        <input
          type='text'
          placeholder='Date Started'
          value={educationText.dateStart}
          onChange={(e) => updateEducationText(e, 'dateStart')}
          required
        />
      </label>

      {showEndDate}

      <label className='school-description'>
        School Description
        <textarea
          name='schoolDescriptuon'
          placeholder='School Description'
          value={educationText.description}
          onChange={(e) => updateEducationText(e, 'description')}
        />
      </label>
      <button type='submit' onClick={addEducation}>
        Add School
      </button>
    </form>
  );
};

const EducationItem = (props) => {
  const { education } = props;

  return (
    <div className='saved-education'>
      <h3 className='school-name'>{education.school} </h3>
      <p className='dates-studying'>
        {education.dateStart} {education.dateStart ? '-' : null}{' '}
        {education.currentlyEnrolled ? 'Present' : education.dateEnd}
      </p>
      <p className='saved-school-description'>{education.description}</p>
    </div>
  );
};

const Education = (props) => {
  const { educationText, educationItems, updateEducationText, addEducation } = props;

  return (
    <div id='education'>
      <h2>Education</h2>
      <EducationForm
        educationText={educationText}
        updateEducationText={updateEducationText}
        addEducation={addEducation}
      />
      {educationItems.map((education) => (
        <EducationItem key={education.id} education={education} />
      ))}
    </div>
  );
};

export default Education;
