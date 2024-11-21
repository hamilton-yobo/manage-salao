import { Table, Button } from 'rsuite';
import "rsuite/dist/rsuite.min.css";

const { Column, HeaderCell, Cell } = Table;

const TableComponent = ({ data, config, actions, onRowClick }) => {
  return (
    <Table
      height={400}
      data={data}
      onRowClick={onRowClick}
    >
      {config.map((c, key)=>(
      <Column key={key} flexGrow={!c.width ? 1 : 0 } width={c.width} align="center" fixed={c.fixed}>
        <HeaderCell>{c.label}</HeaderCell>
        {!c.content ? (<Cell dataKey={c.key}/>) : (<Cell dataKey={c.content}/>)}
      </Column>))}

      <Column width={150} align="right">
        <HeaderCell>Acções</HeaderCell>
        <Cell>{(item) => actions(item)}</Cell>
      </Column>))
    </Table>
  );
};

export default TableComponent;
