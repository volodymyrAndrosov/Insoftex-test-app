import React from "react";
import { connect } from "react-redux";
import { columns } from "../../configs/tableColumnConfig";
import Table from "../Table/Table";

const mapStateToProps = state => {
  const { selectedRows } = state;

  return { selectedRows };
};

const SelectedRowsPage = props => {
  const { selectedRows: activeRows } = props;
  const { selectedRows } = activeRows;
  const mapOriginalValuesFromSelectedRows = selectedRows.map(item => item.original);

  if (!mapOriginalValuesFromSelectedRows?.length) return <div>You dont have any selected rows</div>;

  return <Table data={mapOriginalValuesFromSelectedRows} columns={columns} />;
};

export default connect(mapStateToProps)(SelectedRowsPage);
