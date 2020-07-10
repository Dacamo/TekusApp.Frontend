import React from 'react';
import { Field, reduxForm } from 'redux-form';

class CreateServiceCountry extends React.Component {

  componentDidMount(){
    this.props.fetchingCountries()
  }

  renderError ({error,touched}){
    if (touched && error) {
      return (
        <div className = 'ui error message invalid-feedback'>
          <div className = 'header'>{error}</div>
        </div>
      );
    }
  }

  renderSelect = ({ input, label, children, meta, placeholder })  => {
    const className = `form-control ${meta.error && meta.touched ? 'is-invalid' : ''}`;
    return (
      <>
        <label>{label}</label>
        <div className="input-group">          
            <select 
              className={className}
              placeholder={placeholder}
              {...input}>
              { children }
            </select>
            {this.renderError(meta)}
        </div>
      </>
    );
  }


  onSubmit = (formValues) => {
    const serviceData = this.props.serviceData
    this.props.creatingServiceCountry({serviceId: serviceData.id, countryId: parseInt(formValues.country)})
  }

  render(){
    
    return (
      <>
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className = 'ui form error'>
          <Field 
            name="country"
            component={this.renderSelect} 
            label="Paises">
            <option value=""selected hidden>-- Seleccione un pais -- </option>
            {this.props.countriesData.map((country) => (
                <option key={country.id} value={country.id}>{country.name}</option>
              ))} 
          </Field>
          <br/>
          <button className='btn btn-success' >
            Agregar
          </button>
        </form>
        <hr/>
      </div>
      </>
    )
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.programaIngreso) {errors.programaIngreso = 'Debe seleccionar una opción';}
    return errors;
  };

export default reduxForm({
  form: 'createServiceCountryForm', validate
})(CreateServiceCountry);
