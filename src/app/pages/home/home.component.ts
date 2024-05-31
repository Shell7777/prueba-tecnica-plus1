import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  form: any;
  favoritos: any = [
    {text: 'Pollo, Cerdo, Embutidos', value: 'COMIDA'},
    {text: 'Capitan América, Iroman, Hulk', value: 'MARVEL'},
    {text: 'Flash, Superman, Aquaman', value: 'DC'},
  ];
  constructor(
    private formBuilder: FormBuilder) {
    this.buildForm();
  }
  buildForm() {
    this.form = this.formBuilder.group({
      nombre: ['',
        [Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20)]],
      apellido: ['',
        [Validators.required,Validators.minLength(2),Validators.maxLength(20)]],
      telefono: ['',
        [Validators.required,
          Validators.minLength(9),
          Validators.maxLength(20),
          Validators.pattern('^\\d+$')
        ]],
      correo: ['',
        [Validators.required,Validators.minLength(2),Validators.maxLength(50),Validators.email]],
      favoritos: ['',
        [Validators.required]],
      aceptaUsoDatos: [false, Validators.requiredTrue],
      aceptaterminos: [false, Validators.requiredTrue]
    });
  }
  enviarFormulario(event:Event){
    event.preventDefault();
    if (this.form.valid){
      const value = this.form.value;
      console.log(value);
      
    }
  }

  get nombreField(){
    return this.form.get('nombre');
  }

  get apellidoField(){
    return this.form.get('apellido');
  }
  get telefonoField(){
    return this.form.get('telefono');
  }
  get correoField(){
    return this.form.get('correo');
  }
  get favoritosField(){
    return this.form.get('favoritos');
  }
  get aceptaUsoDatosField(){
    return this.form.get('aceptaUsoDatos');
  }
  get aceptaterminosField(){
    return this.form.get('aceptaterminos');
  }
}
