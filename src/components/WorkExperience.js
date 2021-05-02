import '../styles/WorkExperience.css';

const EndDate = (props) => {
  const { workText, updateWorkText } = props;
  return (
    <label>
      Last Day *
      <input
        type='text'
        placeholder='Last Day'
        value={workText.dateEnd}
        onChange={(e) => updateWorkText(e, 'dateEnd')}
      />
    </label>
  );
};

const WorkForm = (props) => {
  const { workText, updateWorkText, addWork } = props;
  const showEndDate = workText.currentJob ? null : (
    <EndDate workText={workText} updateWorkText={updateWorkText} />
  );

  return (
    <form id='work-form'>
      <label>
        Company Name *
        <input
          type='text'
          placeholder='Company'
          value={workText.company}
          onChange={(e) => updateWorkText(e, 'company')}
          required
        />
      </label>

      <label className='current-job'>
        Still working there?
        <input
          id='currentJob'
          type='checkbox'
          name='currentJob'
          checked={workText.currentJob}
          onChange={(e) => updateWorkText(e, 'currentJob')}
        />
      </label>

      <label>
        Date Started *
        <input
          type='text'
          placeholder='Date Started'
          value={workText.dateStart}
          onChange={(e) => updateWorkText(e, 'dateStart')}
          required
        />
      </label>

      {showEndDate}

      <label className='job-description'>
        Job Description
        <textarea
          name='jobDescriptuon'
          placeholder='Job Description'
          value={workText.description}
          onChange={(e) => updateWorkText(e, 'description')}
        />
      </label>
      <button type='submit' onClick={addWork}>
        Add Job
      </button>
    </form>
  );
};

const WorkItem = (props) => {
  const { work } = props;

  return (
    <div className='saved-jobs'>
      <h3 className='company-name'>{work.company}</h3>
      <p className='dates-worked'>
        {work.dateStart} - {work.currentJob ? 'Present' : work.dateEnd}
      </p>
      <p className='saved-work-description'>{work.description}</p>
    </div>
  );
};

const WorkExperience = (props) => {
  const { workText, workItems, updateWorkText, addWork } = props;

  return (
    <div id='work-experience'>
      <h2>Work Experience</h2>
      <WorkForm
        workText={workText}
        updateWorkText={updateWorkText}
        addWork={addWork}
      />
      {workItems.map((work) => (
        <WorkItem work={work} />
      ))}
    </div>
  );
};

export default WorkExperience;
