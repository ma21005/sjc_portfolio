import "../style/WorkHistory.css";

const WorkHistory = (props) => {
    const {num} = props;
    return (
      <div className="work-history">
        {num}
      </div>
    );
  };
  
export default WorkHistory;