import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { FirebaseService } from 'src/app/shared/services/firebase.service';
import { register } from 'swiper/element/bundle';

register();
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  form: any;
  sitekey: string = '6LcxyO0pAAAAAO8EKx19Ip5p7-0e4HK-g9CIgIRJ';
  esregistrado: boolean = false;

  favoritos: any = [
    { text: 'Pollo, Cerdo, Embutidos', value: 'COMIDA' },
    { text: 'Capitan América, Iroman, Hulk', value: 'MARVEL' },
    { text: 'Flash, Superman, Aquaman', value: 'DC' },
  ];
  tecnologias: any = [
    {
      title: 'PHP',
      description: `PHP es un lenguaje de código abierto muy popular especialmente adecuado para el desarrollo web y que puede ser incrustado en HTML. echo "¡Hola, soy un script de PHP!"; ?>`,
      image: 'assets/images/php.png',
      url: 'tecnologies/1',
      id: 1,
    },
    {
      title: 'PYTHON',
      description: `Python es un lenguaje de programación ampliamente utilizado en las aplicaciones web, el desarrollo de software, la ciencia de datos y el machine learning (ML).`,
      image: 'assets/images/python.png',
      url: 'tecnologies/2',
      id: 2,
    },
    {
      title: 'DISEÑO UX/UI',
      description: `Aquí es donde entra la UX (experiencia de usuario) y la UI (interfaz de usuario), que tienen la función de que el usuario encuentre lo que busca en el menor tiempo posible y además tenga una buena experiencia al visitar la web.`,
      image: 'assets/images/ux.png',
      url: 'tecnologies/3',
      id: 3,
    },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private firebaseService: FirebaseService
  ) {
    this.buildForm();
  }
  buildForm() {
    this.form = this.formBuilder.group({
      nombre: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
        ],
      ],
      apellido: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
        ],
      ],
      telefono: [
        '',
        [
          Validators.required,
          Validators.minLength(9),
          Validators.maxLength(20),
          Validators.pattern('^\\d+$'),
        ],
      ],
      correo: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
          Validators.email,
        ],
      ],
      favoritos: ['', [Validators.required]],
      aceptaUsoDatos: [false, Validators.requiredTrue],
      aceptaterminos: [false, Validators.requiredTrue],
      recaptcha: ['', Validators.required],
    });
  }
  async enviarFormulario(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      const response = await this.firebaseService.addPerson(value);
      this.esregistrado = true;
    } else {
      this.form.markAllAsTouched();
    }
  }

  get nombreField() {
    return this.form.get('nombre');
  }

  get apellidoField() {
    return this.form.get('apellido');
  }
  get telefonoField() {
    return this.form.get('telefono');
  }
  get correoField() {
    return this.form.get('correo');
  }
  get favoritosField() {
    return this.form.get('favoritos');
  }
  get aceptaUsoDatosField() {
    return this.form.get('aceptaUsoDatos');
  }
  get aceptaterminosField() {
    return this.form.get('aceptaterminos');
  }
}
