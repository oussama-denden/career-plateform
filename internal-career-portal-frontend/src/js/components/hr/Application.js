import React from 'react';
import Reflux from 'reflux';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import ProjectActions from '../../actions/project-actions';

var Application = React.createClass({

  componentWillMount : function() {
    ProjectActions.getInterests(this.props.params.offerId);
  },

  priceFormatter : function (cell, row){
  return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
},

  render: function(){
    var products = [{
      id: 1,
      name: "Item name 1",
      price: 100
  },{
      id: 2,
      name: "Item name 2",
      price: 100
  }];
    return (
      <BootstrapTable data={products} striped={true} hover={true}>
      <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>Product ID</TableHeaderColumn>
      <TableHeaderColumn dataField="name" dataSort={true}>Product Name</TableHeaderColumn>
      <TableHeaderColumn dataField="price" dataFormat={this.priceFormatter}>Product Price</TableHeaderColumn>
  </BootstrapTable>
    );
  }

});

export default Application;
