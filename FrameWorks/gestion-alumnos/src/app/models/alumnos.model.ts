//Modelo de datos de cada alumno
export interface Alumno {
    id: number,
    nombre: string,
    email: string,
    edad: number,
    curso: string,
    becado: boolean,
    direccion: {
        calle: string,
        ciudad: string,
    }
}