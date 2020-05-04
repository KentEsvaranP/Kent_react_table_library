import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DataTableApp from './DataTableApp';
const dataTable = document.querySelector('data-table');
ReactDOM.render(<DataTableApp search={dataTable.dataset.search} sort={dataTable.dataset.sort} />, dataTable);
