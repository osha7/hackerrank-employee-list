import React from 'react';

class EmployeesList extends React.Component {

  componentDidMount = () => {
    console.log("componentDidMount", this.props)
  }

  state = {
    searchTerm: '',
    employees: this.props
  }

  filterOnChange = (e) => {
    // console.log(e.target.value)
    this.setState({
      searchTerm: e.target.value
    })
  //  this.filteredEmployees()
  }

  // filteredEmployees = () => {
  //   // console.log("filtered", this.state.employees)
  //   const newEmployees = this.state.employees
    
  //   // console.log(newEmployees)
  //   // debugger
  //   const newArray = newEmployees.employees.filter(employee => employee.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))

  //   this.setState(prevState => ({
  //     employees: prevState.newArray
  //   }))

    // console.log("after", this.state.employees)

      // this.setState( prevState => ({
      //  employees: prevState.employees.filter(employee => employee.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
      // }))
  // }



  render() {
    const { employees } = this.state.employees;
    return (
      <React.Fragment>
        <div className="controls">
          <input type="text" value={this.state.searchTerm} onChange={this.filterOnChange} className="filter-input" data-testid="filter-input" />
        </div>
        <ul className="employees-list">
          { employees
          .filter(employee => (
            employee.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
          ))
          .map(employee => (
            <li key={employee.name} data-testid="employee">{employee.name}</li>
          ))
          }
        </ul>
      </React.Fragment>
    );
  }
}

export default EmployeesList;
