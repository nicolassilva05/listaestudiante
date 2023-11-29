const readlineSync = require("readline-sync");
const { mostrarListaEstudiantes } = require("./listaestudiante");

const registrarEstudiantes = () => {
  const cantidadEstudiantes = readlineSync.question(
    "Ingresar la cantidad de estudiantes a registrar:"
  );
  const estudiantes = [];

  for (let i = 0; i < cantidadEstudiantes; i++) {
    const nombre = readlineSync.question(`
      Ingrese el nombre del estudiante ${i}:
    `);
    const edad = readlineSync.question(`
      Ingrese la edad del estudiante ${i}:
    `);

    const estudiante = {
      nombre,
      edad,
    };
    estudiantes.push(estudiante);
  }

  mostrarListaEstudiantes(estudiantes);
};
//Iniciar el registro de estudiantes
registrarEstudiantes();