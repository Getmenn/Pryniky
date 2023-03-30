import './table.scss'

const TableHeader: React.FC = () => {

    return (
      <div className="tableRow tableRowHeader">
        <div className="tableCell">Company sig sate</div>
        <div className="tableCell">Company signature name</div>
        <div className="tableCell">Document name</div>
        <div className="tableCell">Document status</div>
        <div className="tableCell">Document type</div>
        <div className="tableCell">Employee number</div>
        <div className="tableCell">Employee sig date</div>
        <div className="tableCell">Employee signature name</div>
      </div>
    )
};
  
export {TableHeader};