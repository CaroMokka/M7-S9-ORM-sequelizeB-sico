import sequelize from "./conexion.js"
import { Persona } from "./models/Personas.entity.js"

sequelize.sync({alter: true}).then( async ()=> {
    console.log("Conexión a base de datos éxitosa")

    //Listar personas
    // const personas = await Persona.findAll()
    // console.log(personas)

    //Buscar persona
    // const persona = await Persona.findByPk(3)
    // console.log(persona)

    //Buscar persona con filtros
    // const persona = await Persona.findAll({
    //     where: {
    //         rut: "11.222.222-3"
    //     }
    // })
    // console.log(persona)

    const persona = await Persona.findOne({
        order: [
            ["rut", "DESC"]
        ]
    })
    console.log(persona)


    //Registrar personas
    // await Persona.create({
    //     rut: "11.222.222-3",
    //     nombre: "Carolina",
    //     apellido: "Araya"
    // })
    // await Persona.create({
    //     rut: "3.456.123.-7",
    //     nombre: "María",
    //     apellido: "González"
    // })
    
    //Actualizar personas
    // const persona = await Persona.findByPk(1)
    // persona.apellido = "Araya González"
    // persona.save()

    //Eliminar personas
    // const persona = await Persona.findByPk(1)
    // await persona.destroy()
})