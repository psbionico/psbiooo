import {Schema, model} from 'mongoose'

const usuarioSchema = new Schema({
    nombre: {type: String,
        required: true
    },
    edad: {type: Number,
        required: true
    },
    domicilio: {type: String,
        required: true
    },
    correo: {type: String,
        required: true
    },
    numero: {type: Number,
        required: true
    },
    tipodm: {type: String,
        required: true
    }
},{
    versionKey: false
});

export default model('Usuario', usuarioSchema); 