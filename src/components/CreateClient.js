import React from 'react';
import { Field, reduxForm} from 'redux-form'


class CreateClient extends React.Component {

  renderError ({error,touched}){
    if (touched && error) {
      return (
        <div className = 'ui error message invalid-feedback'>
          <div className = 'header'>{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, placeholder, meta })  => {
    const className = `form-control ${meta.error && meta.touched ? 'is-invalid' : ''}`;
    return (
      <>
        <label>{label}</label>
        <div className="input-group">          
            <input 
              className={className}
              placeholder={placeholder} 
              {...input}  />
              {this.renderError(meta)}
        </div>
      </>
    );
  }

  
  onSubmit = (formValues) => {
    this.props.creatingClient(formValues);
  }

  render() {
      return (
        <>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className = 'ui form error'>
          <div className="row mb-3">
            <div className="col">
              <Field 
                name="NIT" 
                component={this.renderInput} 
                label="NIT"
                placeholder="Ingrese el NIT" />
            </div>
            <div className="col">
              <Field 
                name="name" 
                component={this.renderInput} 
                label="Nombre"
                placeholder="Digite el nombre" />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <Field 
              type="email"
                name="email" 
                component={this.renderInput} 
                label="Correo"
                placeholder="Ingrese el correo electrónico"
                />
            </div>            
          </div>
          <button className='btn btn-success btn-sm'>
            Registrar
          </button>
        </form>
        </>
    );
  }
}
const validate = (formValues) => {
  const errors = {};
  if (!formValues.NIT) {errors.NIT = "Este capo no debe estar vacío";}
  if (!formValues.name) {errors.name = "Este capo no debe estar vacío";}
  if (!formValues.email) {errors.email = "Este capo no debe estar vacío";}

  return errors;
}

 export default reduxForm({
  form: 'createClientForm', validate
})(CreateClient);
