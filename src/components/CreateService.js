import React from 'react';
import { Field, reduxForm} from 'redux-form'


class CreateService extends React.Component {

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
    this.props.creatingService({...formValues, clientId: this.props.clientData.id});
  }

  render() {
      return (
        <>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className = 'ui form error'>
          <div className="row mb-3">
            <div className="col">
              <Field 
                name="name" 
                component={this.renderInput} 
                label="Nombre del Servicio"
                placeholder="Ingrese el nombre" />
            </div>
            <div className="col">
              <Field 
                name="hourValue" 
                component={this.renderInput} 
                label="Valor por hora"
                placeholder="Digite el valor de la hora" />
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
  if (!formValues.name) {errors.name = "Este capo no debe estar vacío";}
  if (!formValues.hourValor) {errors.email = "Este capo no debe estar vacío";}

  return errors;
}

 export default reduxForm({
  form: 'createServiceForm', validate
})(CreateService);
