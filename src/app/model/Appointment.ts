import { Time } from "@angular/common";

export class Appointment {

    id?: number;
    fecha?: string;
    hora?: string; // Angular does not have a Time type, so we'll use string
    cedula?: string
    id_medico?: number;
    estado?: boolean;

    //Revisar bien el id de usuario y medico porque capaz tengo que pasar el objeto entero

}


