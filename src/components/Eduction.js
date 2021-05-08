import '../styles/Education.css';

const ShowError = (props) => {
  const { educationErrorMessage } = props;
  if (educationErrorMessage === '') return null;

  return <div className='education-error'>{educationErrorMessage}</div>;
};

const EndDate = (props) => {
  const { educationText, updateEducationText } = props;
  return (
    <label>
      Last Day *
      <input
        type='text'
        placeholder='Last Day (Required)'
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
    <div>
      <h2>Education</h2>
      <form id='school-form'>
        <label>
          School Name *
          <input
            type='text'
            placeholder='School (Required)'
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
    </div>
  );
};

const EducationItem = (props) => {
  const { education, submitResume, editEducation, i } = props;

  return (
    <div className='saved-education'>
      <h3 className='school-name'>{education.school} </h3>
      {!submitResume && (
        <img
          className='edit-school'
          src='img/edit_24dp.svg'
          alt='Edit School'
          onClick={() => editEducation(i)}
        />
      )}
      <p className='dates-studying'>
        {education.dateStart} {education.dateStart ? '-' : null}{' '}
        {education.currentlyEnrolled ? 'Present' : education.dateEnd}
      </p>
      <p className='saved-school-description'>{education.description}</p>
    </div>
  );
};

const Education = (props) => {
  const {
    educationText,
    educationItems,
    updateEducationText,
    addEducation,
    submitResume,
    editEducation,
    educationErrorMessage,
  } = props;

  return (
    <div id='education'>
      <ShowError educationErrorMessage={educationErrorMessage} />
      {!submitResume && (
        <EducationForm
          educationText={educationText}
          updateEducationText={updateEducationText}
          addEducation={addEducation}
        />
      )}
      {submitResume && educationItems.length > 0 && <h2>Education</h2>}
      {educationItems.map((education, i) => (
        <EducationItem
          key={education.id}
          education={education}
          submitResume={submitResume}
          editEducation={editEducation}
          i={i}
        />
      ))}
    </div>
  );
};

export default Education;
