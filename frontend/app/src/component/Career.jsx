import "../style/CareerItem.css";

const Career = (props) => {
  const {careers} = props;

  return (
    <div className="hoge">
      {careers.map(career => (
        <div>
          <p>{career.project_name}</p>
          <p>{career.start_date}</p>
          <p>{career.end_date}</p>
          <p>{career.description}</p>
          <ul>
            {career.technologies.map(tech => (
              <li key={tech.id}>{tech.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
  
export default Career;
