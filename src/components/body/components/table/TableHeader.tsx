import './table.scss'

const TableHeader: React.FC = () => {

    return (
      <div className="tableRow tableRowHeader">
        <div className="tableCell">Дата подписи компании</div>
        <div className="tableCell">Подпись компании</div>
        <div className="tableCell">Название документа</div>
        <div className="tableCell">Статус документа</div>
        <div className="tableCell">Тип документа</div>
        <div className="tableCell">Номер</div>
        <div className="tableCell">Дату подписи сотрудника</div>
        <div className="tableCell">Подпись сотрудника</div>
      </div>
    )
};
  
export {TableHeader};