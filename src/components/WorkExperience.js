import '../styles/WorkExperience.css';

const EndDate = (props) => {
  const { workText, updateWorkText } = props;
  return (
    <span>
      <label htmlFor='dateEnd'>Last Day</label>
      <input
        id='dateEnd'
        type='text'
        value={workText.dateEnd}
        onChange={(e) => updateWorkText(e, 'Date End')}
      />
    </span>
  );
};

const WorkForm = (props) => {
  const { workText, updateWorkText, addWork } = props;
  const showEndDate = workText.currentJob ? null : (
    <EndDate workText={workText} updateWorkText={updateWorkText} />
  );

  return (
    <form>
      <label htmlFor='company'>Company Name</label>
      <input
        id='company'
        type='text'
        placeholder='Company'
        value={workText.company}
        onChange={(e) => updateWorkText(e, 'Company')}
        required
      />

      <label htmlFor='currentJob'>Still working there?</label>
      <input
        id='currentJob'
        type='checkbox'
        name='currentJob'
        checked={workText.currentJob}
        onChange={(e) => updateWorkText(e, 'Current Job')}
      />

      <label htmlFor='dateStart'>Date Started</label>
      <input
        id='dateStart'
        type='text'
        value={workText.dateStart}
        onChange={(e) => updateWorkText(e, 'Date Start')}
        required
      />

      {showEndDate}

      <label htmlFor='jobDescription'>Job Description</label>
      <textarea
        id='jobDescription'
        name='jobDescriptuon'
        placeholder='Job Description'
        value={workText.description}
        onChange={(e) => updateWorkText(e, 'Description')}
      />
      <button type='submit' onClick={addWork}>
        Add Job
      </button>
    </form>
  );
};

const WorkItem = (props) => {
  const { work } = props;

  return (
    <div>
      <p>
        <span>{work.company}</span> {work.dateStart} -{' '}
        {work.currentJob ? 'Present' : work.dateEnd}
      </p>
      <p>{work.description}</p>
    </div>
  );
};

const WorkExperience = (props) => {
  const { workText, workItems, updateWorkText, addWork } = props;

  return (
    <div>
      <h1>Work Experience</h1>
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
