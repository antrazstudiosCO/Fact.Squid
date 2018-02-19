// usuario del tipo BD
exports.createUser = (vid, videntificacion, vtipoidentificacion, vprimernombre, vsegundonombre, vprimerapellido, vsegundoapellido, vusername, vpassword, vidcargo, vfechanacimiento, vimagenperfil, vidoficina, visactive, vcreatedtime, vcreateduser, vupdatedtime, vupdateduser) => {
  return {
    // Propiedades
    id: vid,
    identificacion: videntificacion,
    tipoidentificacion: vtipoidentificacion,
    primernombre: vprimernombre,
    segundonombre: vsegundonombre,
    primerapellido: vprimerapellido,
    segundoapellido: vsegundoapellido,
    username: vusername,
    password: vpassword,
    idcargo: vidcargo,
    fechanacimiento: vfechanacimiento,
    imagenperfil: vimagenperfil,
    idoficina: vidoficina,
    isactive: visactive,
    createdtime: vcreatedtime,
    createduser: vcreateduser,
    updatedtime: vupdatedtime,
    updateduser: vupdateduser,
    // Procedimientos
    getFullName () {
      return this.primernombre + ' ' + this.segundonombre + ' ' + this.primerapellido + ' ' + this.segundoapellido
    }
  }
}

// Usuario del tipo TOKEN
exports.createUserToken = (vid, videntificacion, vtipoidentificacion, vprimernombre, vsegundonombre, vprimerapellido, vsegundoapellido, vusername, vcargo, vfechanacimiento, vimagenperfil, voficina, visactive, vpermissions) => {
  return {
    // Propiedades
    id: vid,
    identificacion: videntificacion,
    tipoidentificacion: vtipoidentificacion,
    primernombre: vprimernombre,
    segundonombre: vsegundonombre,
    primerapellido: vprimerapellido,
    segundoapellido: vsegundoapellido,
    username: vusername,
    cargo: vcargo,
    fechanacimiento: vfechanacimiento,
    imagenperfil: 'data:image/png;base64, ' + vimagenperfil.toString('base64').replace('data:image/png;base64, ', ''),
    oficina: voficina,
    isactive: visactive,
    permissions: vpermissions,
    // Procedimientos
    getFullName () {
      return this.primernombre + ' ' + this.segundonombre + ' ' + this.primerapellido + ' ' + this.segundoapellido
    },
    verifyPermission (namePermission) {
      let access = false
      for (var i = 0; i < this.permissions.length; i++) {
        if (this.permissions[i].name === namePermission) {
          access = true
        } else if (this.permissions[i].name === 'ROOT') {
          access = true
        }
      }
      return access
    }
  }
}

// Permisos otorgados a los usuarios
exports.createPermissionsToken = (vnombre, vdescription) => {
  return {
    // Propiedades
    name: vnombre,
    description: vdescription
  }
}

// Tipos de identificacion
exports.createTiposIdentificacion = (vid, vnombre, vdescripcion) => {
  return {
    id: vid,
    nombre: vnombre,
    descripcion: vdescripcion
  }
}

// Clase principal de Tercero
exports.createTerceros = (vid, vtipoidentificacion, videntificacion, vactive) => {
  return {
    id: vid,
    tipoidentificacion: vtipoidentificacion,
    identificacion: videntificacion,
    active: vactive
  }
}

// Tipode tercero juridico -> para empresas
exports.createTercerosJuridica = (vid, vnombre, vrepresentantelegal, vtercero) => {
  return {
    id: vid,
    nombre: vnombre,
    representantelegal: vrepresentantelegal,
    tercero: vtercero
  }
}

// Tipo de tercero natural -> para personas
exports.createTercerosNatural = (vid, vprimernombre, vsegundonombre, vprimerapellido, vsegundoapellido, vtercero) => {
  return {
    id: vid,
    primernombre: vprimernombre,
    segundonombre: vsegundonombre,
    primerapellido: vprimerapellido,
    segundoapellido: vsegundoapellido,
    tercero: vtercero,
    getFullName () {
      let name = this.primernombre
      if (this.segundonombre) {
        name = name + ' ' + this.segundonombre
      }
      name = name + ' ' + this.primerapellido
      if (this.segundoapellido) {
        name = name + ' ' + this.segundoapellido
      }
      return name
    }
  }
}

// Direcciones asociadas a un tercero
exports.createDireccion = (vid, vtipodireccion, vdependencia, vdireccion, vdireccionjson, vciudad, vwebstring, visactive) => {
  let jquery = require('jquery')
  vdireccionjson = jquery.parseJSON(vdireccionjson)
  return {
    id: vid,
    tipodireccion: vtipodireccion,
    dependencia: vdependencia,
    direccion: vdireccion,
    direccionjson: vdireccionjson,
    ciudad: vciudad,
    webstring: vwebstring,
    isactive: visactive
  }
}

// Tipos de direcciones
exports.createTipoDireccion = (vid, vnombre, vreqdependencia, vreqhorario, visactive) => {
  return {
    id: vid,
    nombre: vnombre,
    reqdependencia: vreqdependencia,
    reqhorario: vreqhorario,
    isactive: visactive
  }
}

// Ciudades asociados a los departamentos
exports.createCiudad = (vid, vnombre, vdepartamento) => {
  return {
    id: vid,
    nombre: vnombre,
    departamento: vdepartamento
  }
}

// Departamentos asociados a las direcciones
exports.createDepartamento = (vid, vnombre, vpais) => {
  return {
    id: vid,
    nombre: vnombre,
    pais: vpais
  }
}

// Paises asociados a las direcciones
exports.createPais = (vid, vnombre) => {
  return {
    id: vid,
    nombre: vnombre
  }
}

// Horarios asociados a las direcciones
exports.createHorario = (vid, viddireccion, vdiainicio, vdiafinal, vhorainicio, vhorafinal) => {
  return {
    id: vid,
    iddireccion: viddireccion,
    diainicio: vdiainicio,
    diafinal: vdiafinal,
    horainicio: vhorainicio,
    horafinal: vhorafinal
  }
}

// Contactos asociados a las direcciones
exports.createContacto = (vid, viddireccion, vnombre, vcargo, visactive) => {
  return {
    id: vid,
    iddireccion: viddireccion,
    nombre: vnombre,
    cargo: vcargo,
    isactive: visactive
  }
}

// Emails asociados a los contactos
exports.createContactoEmail = (vid, vmail, visdefault, vidcontacto) => {
  return {
    id: vid,
    mail: vmail,
    isdefault: visdefault,
    idcontacto: vidcontacto
  }
}

// Telefonos asociados a los contactos
exports.createContactoTelefono = (vid, vtipo, vnumero, vext, vidcontacto) => {
  return {
    id: vid,
    tipo: vtipo,
    numero: vnumero,
    ext: vext,
    idcontacto: vidcontacto
  }
}

// Notificaciones a mostrarse al usuario
exports.createNotifications = (vkey, vcontent, vfrom, vkind, vtime, vtype, vstate) => {
  return {
    key: vkey,
    content: vcontent,
    from: vfrom,
    kind: vkind,
    time: new Date(vtime),
    type: vtype,
    state: vstate
  }
}

// Noticias que se muestran en el Feed
exports.createNotices = (vkey, vorigin, voriginicon, vdate, vauthor, vimgsrc, vtitle, vdescription, vcontent, vbanner, visOutStanding, vlink) => {
  return {
    key: vkey,
    origin: vorigin,
    origin_icon: voriginicon,
    date: vdate,
    author: vauthor,
    imgsrc: vimgsrc,
    title: vtitle,
    description: vdescription,
    content: vcontent,
    banner: vbanner,
    isOutstanding: visOutStanding,
    link: vlink
  }
}

// Facturas de la DB
exports.createFacturas = (vid, vripsnumero, vnumero, vfecha, vregimen, vvalorfactura, vregimenRender = 0) => {
  // validacion del regimen segun estructura de los RIPS
  // console.log(vregimen)
  // let vregimenRender
  if (vregimen === '1' || vregimen === 1) {
    vregimenRender = 'CONTRIBUTITVO'
  } else if (vregimen === '2' || vregimen === 2) {
    vregimenRender = 'SUBSIDIADO'
  } else if (vregimen === '3' || vregimen === 3) {
    vregimenRender = 'VINCULADO'
  } else if (vregimen === '4' || vregimen === 4) {
    vregimenRender = 'PARTICULAR'
  } else if (vregimen === '5' || vregimen === 5) {
    vregimenRender = 'OTRO'
  } else if (vregimen === '6' || vregimen === 6) {
    vregimenRender = 'DESPLAZADO CONTRIBUTIVO'
  } else if (vregimen === '7' || vregimen === 7) {
    vregimenRender = 'DESPLAZADO SUBSIDIADO'
  } else if (vregimen === '8' || vregimen === 8) {
    vregimenRender = 'DESPLAZADO NO ASEGURADO'
  }
  return {
    id: vid,
    ripsnumero: vripsnumero,
    numero: vnumero,
    fecha: vfecha,
    regimen: vregimen,
    regimenRender: vregimenRender,
    valorfactura: vvalorfactura,
    stateDB: 'SINVERIFICAR'
  }
}

// Estructuras bases de archivos RIPS
// ESTRUCTURA DEL ARCHIVO CT
// el orden correcto del contenido de este archivo es el siguiente:
// 1. Archivo de usuarios: US
// 2. Archivo de Transacciones: AF
// 3. Archivo de Consultas: AC
// 4. Archivo de procedimientos: AP
// 5. Archivo de urgencias : AU
// 6. Archivo de hospitalizaciones : AH
// 7. Archivo de recien nacidos
// 8. Archivo de medicamentos
// 9. Archivo de otros servicios
exports.createCTfile = (vcodigoprestador, vfecharemision, vcodigoarchivo, vtotalregistros) => {
  return {
    codigoPrestador: vcodigoprestador, // Numero de doce digitos -> se valida formato, longitud
    fechaRemision: vfecharemision, // fecha de envio de los datos dd/mm/aaaa -> se valida formato, la fecha no puede ser superior a la actual
    codigoArchivo: vcodigoarchivo, // dos caracteres para identificar el tipo de archivo, seis caracteres como maximo para el numero de remision del archivo, se valida que los nombres no se encuentren repetidos
    totalRegistros: vtotalregistros // El numero de registros que contiene el respectivo archivo -> se valida coincidencia
  }
}

// ESTRUCTURA DEL ARCHIVO AF
// este archivo contiene las facturas del envio o paquete
exports.createAFfile = (vcodigoprestador, vrazonsocial, vtipoidentificacion, vnumeroidentificacion, vnumerofactura, vfechaexpedicionfactura, vfechainicio, vfechafinal, vcodigoentidadadm, vnombreentidadadm, vnumerocontrato, vplanbeneficios, vnumeropoliza, vvalorcopago, vvalorcomision, vvalordescuentos, vvalorpagar) => {
  // deserializar fecha
  let tempDate = vfechaexpedicionfactura.split('/')
  vfechaexpedicionfactura = new Date(tempDate[2] + '-' + tempDate[1] + '-' + tempDate[0])
  // evaluar el numero de caracteres del numero de factura y convertir el item al tipo de factura de dinamica
  let vnumerofacturaReal = ''
  if (vnumerofactura.length === 10) {
    vnumerofacturaReal = 'HUSE0000' + vnumerofactura.replace('HUSE', '')
  }
  // Convertir valores de texto en valores numericos
  vvalorpagar = parseFloat(vvalorpagar)
  return {
    codigoPrestador: vcodigoprestador, // Numero de doce digitos -> se valida formato, longitud
    razonSocial: vrazonsocial, // Nombre completo de la entidad emisora -> no debe estar vacio
    tipoIdentificacion: vtipoidentificacion, // Tipo de documento emisora -> NI: NIT, CC: Cedula Ciudadania, CE: Cedula Extranjeria, PA: Pasaporte
    numeroIdentificacion: vnumeroidentificacion, // Numero de identificacion emisora -> No mas de 16 caracteres sin guion
    numeroFactura: vnumerofactura,
    numeroFacturaReal: vnumerofacturaReal, // numero de la factura -> no debe estar vacio,
    fechaExpedicionFactura: vfechaexpedicionfactura, // fecha de expedicion de la factura -> formtatodd/mm/aaaa no debe ser mayor a la fecha de remision
    fechaInicio: vfechainicio, // fecha de inicio del periodo reportado -> La fecha no sea mayor a la actual, no sea mayor a la final
    fechaFinal: vfechafinal, // fecha de fin del periodo reportado -> La fecha no sea mayor a la actual, no sea menor a la fecha inicial
    codigoEntidadAdm: vcodigoentidadadm, // codigo identificador del EAPB -> longitudmax 6 caracteres
    nombreEntidadAdm: vnombreentidadadm, // nombre completo de la entidad administradora -> no puede estar vacio
    numeroContrato: vnumerocontrato, // numero del contrato -> solo si aplica (PUEDE ESTAR VACIO)
    planBeneficios: vplanbeneficios, // numero del plan de beneficios -> solo si aplica (PUEDE ESTAR VACIO)
    numeroPoliza: vnumeropoliza, // numero de poliza -> solo si aplica (PUEDE ESTAR VACIO)
    valorCopago: vvalorcopago, // valor del copago -> No debe estar vacio, no puede ser negativo formato #.##
    valorComision: vvalorcomision, // valor de la comision -> No debe estar vacio, no puede ser negativo formto #.##
    valorDescuentos: vvalordescuentos, // valor de losdescuentos -> No debe estar vacio, no puede ser negativo formato #.##
    valorPagar: vvalorpagar // valor a neto a pagar -> valor total de la factura, no puede estar vacio, formato #.##
  }
}

// ESTRUCTURA DEL ARCHIVO US
// este archivo contiene los datos de los usuarios atentidos
exports.createUSfile = (vtipoidentificacion, vnumeroidentificacion, vcodigoentidadadm, vtipousuario, vprimerapellido, vsegundoapellido, vprimernombre, vsegundonombre, vedad, vunidadmedida, vsexo, vcodigodepartamentoresidenciahabitual, vcodigomunicipioresidenciahabitual, vzonaresidencia) => {
  return {
    tipoIdentificacion: vtipoidentificacion, // Tipo de identificacion,
    // -> condiciones de valicacion:
    // CC: Cedula ciudanania: longitud max: 10, numerico
    // CE: Cedula de Extranjeria, longitud max: 6, mixto
    // CD: Carnet Diplomatico, longitud max: 16, mixto
    // PA: Pasaporte, longitud max: 16, mixto
    // RC: RegistroCivil, longitud max: 11, mixto
    // TI: Tarjeta de identidad, longitud max: 11, numerico
    // CN: Certificado Nacido vivo, longitud max: 9, mixto
    // SC: salvoconducto, longitud max: 16, mixto
    // AS: Adulto sin identificar, longiutd max: 10, mixto
    // MS: menor sin identificar, longitud max: 12, mixto
    numeroIdentificacion: vnumeroidentificacion, // numero de identificacion -> no estar vacio
    codigoEntidadAdm: vcodigoentidadadm, // codigo de entidad administradora -> no estar vacia minimo 6 digitos
    tipoUsuario: vtipousuario, // tipo de usuario,
    // 1 = Contributivo
    // 2 = Subsidiado
    // 3 = Vinculado
    // 4 = Particular
    // 5 = Otro
    // 6 = Desplazado con afiliacion al regimen contributivo
    // 7 = Desplazado con afiliacion al regimen subsidiado
    // 8 = Desplazado no asegurado
    // validacion que el valor este dentro de los items permitidos
    primerApellido: vprimerapellido, // Primer apellido del usuario -> se verifica contenido
    segundoApellido: vsegundoapellido, // Segundo apellido -> NO SE EVALUA
    primerNombre: vprimernombre, // Primer nombre del usuario -> se verifica contenido
    segundoNombre: vsegundonombre, // Segundo nombre del usuario -> NO SE EVALUA
    edad: vedad, // Edad del usuario -> depende del rango de unidad de media:
    // Si la unidad de medida es 1 : el rango es 1 a 120 años
    // Si la unidad de medida es 2 : el rango es 1 a 11 meses
    // Si la unidad de medida es 3 : el rango es 1 a 29 dias
    unidadMedida: vunidadmedida, // Rango de medida para la edad del usuario:
    // 1 = años
    // 2 = meses
    // 3 = dias
    sexo: vsexo, // Sexo del usuario -> M: Masculino, F: Femenino
    codigoDepartamentoResidenciaHabitual: vcodigodepartamentoresidenciahabitual, // valor dependen directamente de la tabla de DIVIPOLA,
    codigoMunicipioResidenciaHabitual: vcodigomunicipioresidenciahabitual, // valor dependen directamente de la tabla de DIVIPOLA,
    zonaResidencia: vzonaresidencia // zona de residencia -> U: Urbana, R: Rural
  }
}

// ESTRUCTURA DEL ARCHIVO AC
// este archivo cotiene las consultas realizadas por los distintos profesionales de la salud
exports.createACfile = (vnumerofactura, vcodigoprestador, vtipoidentificacion, vnumeroidentificacion, vfechaconsulta, vnumeroautorizacion, vcodigoconsulta, vfinalidadconsulta, vcausaexterna, vcodigodiagnostico, vcodigodiagnosticorelacionado1, vcodigodiagnosticorelacionado2, vcodigodiagnosticorelacionado3, vtipodiagnosticoprincipal, vvalorconsulta, vvalorcuotamoderadora, vvalorpagar) => {
  return {
    numeroFactura: vnumerofactura, // numero de la factura a la que pertence la consulta -> debe existir en el archivo de trasacciones
    codigoPrestador: vcodigoprestador, // numero de doce digitos -> se valida formato, longitud
    tipoIdentificacion: vtipoidentificacion, // tipo de identificacion -> igual a la regla de usuarios
    numeroIdentificacion: vnumeroidentificacion, // numero de identificacion -> igual a la regla de usuarios
    fechaConsulta: vfechaconsulta, // fecha de la consulta -> formato dd/mm/aaaa, no supere fecha actual
    numeroAutorizacion: vnumeroautorizacion, // numero de autorizacion -> en caso que debe tener autorizacion adjunta
    codigoConsulta: vcodigoconsulta, // codigo de la consulta -> segun tabla de codigos CUPS actualizada
    finalidadConsulta: vfinalidadconsulta, // motivo por el cual se realizo la consulta ->
    // 01 = Atencion del parto (puerperio),
    // 02 = Atencion al recien nacido,
    // 03 = Atencion en planificiacion familiar,
    // 04 = Deteccion de alteraciones de crecimiento y desarrollo del menor de 10 años
    // 05 = Deteccion de alteraciones del desarrollo joven
    // 06 = Deteccion de alteraciones de embarazo
    // 07 = Deteccion de alteraciones del adulto
    // 08 = Deteccion de alteraciones de agudez visual
    // 09 = Deteccion de enfermedad profesional
    // 10 = No aplica
    // Referencia cruzada: si la finalidad esta en el rango de 1 a 8 el diagnostico principal debe ser "Z"
    // y el primer diagnostico relacionado puede ser un codigo correspondiente a una patologia oun signo o sintoma.
    // Si la finalidad es 10 el diagnostico no puede tener con codigo "Z"
    causaExterna: vcausaexterna, // causas que originaron la atencion ->
    // 01 = Accidente de trabajo,
    // 02 = Accidente de transito,
    // 03 = Accidente rábico,
    // 04 = Accidente ofídico,
    // 05 = Otro tipo de accidente,
    // 06 = Evento castastrofico,
    // 07 = Lesion por agresion,
    // 08 = Lesion auto infligida,
    // 09 = Sospecha de maltrato fisico,
    // 10 = Sospecha de abuso sexual,
    // 11 = Sospecha de violencia sexual,
    // 12 = Sospecha de maltrato emocional,
    // 13 = Enfermedad general,
    // 14 = Enfermedad laboral,
    // 15 = Otra
    codigoDiagnostico: vcodigodiagnostico, // Campo obligatorio, codigo alfanumerico de 4 digitos
    codigoDiagnosticoRelacionado1: vcodigodiagnosticorelacionado1, // codigo alfanumerico de 4 digitos
    codigoDiagnosticoRelacionado2: vcodigodiagnosticorelacionado2, // codigo alfanumerico de 4 digitos
    codigoDiagnosticoRelacionado3: vcodigodiagnosticorelacionado3, // codigo alfanumerico de 4 digitos
    tipoDiagnosticoPrincipal: vtipodiagnosticoprincipal, // Se evalua sea un valor permitido:
    // 1 = Impresion diagnostica
    // 2 = Confirmado nuevo
    // 3 = Confirmado repetitivo
    valorConsulta: vvalorconsulta, // valor cobrado por el servicio -> nunerico max 15 digitos
    valorCuotaModeradora: vvalorcuotamoderadora, // valor pagado por el usuario -> numerico max 15 digitos
    valorPagar: vvalorpagar // valor a pagar por la administradora -> numerico max 15 digitos
  }
}

// ESTRUCTURA DEL ARCHIVO AP
// este archivo procedimientos diagnosticos
exports.createAPfile = (vnumerofactura, vcodigoprestador, vtipoidentificacion, vnumeroidentificacion, vfechaprocedimiento, vnumeroautorizacion, vcodigoprocedimiento, vambito, vfinalidadProcedimiento, vpersonalatiende, vdiagnosticoprincipal, vdiagnositicorelacionado, vcomplicacion, vreaactoquirurgico, vvalorprocedimiento) => {
  return {
    numeroFactura: vnumerofactura, // numero de la factura a la que pertence la consulta -> debe existir en el archivo de trasacciones
    codigoPrestador: vcodigoprestador, // numero de doce digitos -> se valida formato, longitud
    tipoIdentificacion: vtipoidentificacion, // tipo de identificacion -> igual a la regla de usuarios
    numeroIdentificacion: vnumeroidentificacion, // numero de identificacion -> igual a la regla de usuarios
    fechaProcedimiento: vfechaprocedimiento, // fecha del procedimiento -> igual regla para la consulta
    numeroAutorizacion: vnumeroautorizacion, // numero de la autorizacion -> igual regla para la consulta
    codigoProcedimiento: vcodigoprocedimiento, // numero del procedimiento segun CUPS
    ambito: vambito, // tiposervicio en que esta siendo atentido el usuario
    // 1 = ambulatorio
    // 2 = hospitalario
    // 3 = urgencias
    finalidadProcedimiento: vfinalidadProcedimiento, // finalidad con la que se realizo el procedimiento
    // 1 = Diagnostico
    // 2 = Terapeutico
    // 3 = Proteccion especifica
    // 4 = Deteccion temprana de enfermedad general
    // 5 = Deteccion temprana de enfermedad laboral
    personalAtiende: vpersonalatiende, // solo se usa cuando el procedimiento es "Atencion del parto"
    // 1 = Medico Especialista
    // 2 = Medico General
    // 3 = Enfermera
    // 4 = Auxiliar de enfermeria
    // 5 = Otro
    diagnosticoPrincipal: vdiagnosticoprincipal,
    diagnosticoRelacionado: vdiagnositicorelacionado,
    complicacion: vcomplicacion,
    reaActoQuirurgico: vreaactoquirurgico,
    valorProcedimiento: vvalorprocedimiento
  }
}

// ESTRUCTURA DEL ARCHIVO AU
// Componen los datos de urgencias
exports.createAUfile = (vnumerofactura, vcodigoprestador, vtipoidentificacion, vnumeroidentificacion, vfechaingreso, vhoraingreso, vnumeroautorizacion, vcausaexterna, vdiagnosticosalida, vdiagnosticosalida1, vdiagnosticosalida2, vdiagnosticosalida3, vdestinousuariosalida, vestadousuariosalida, vcausabasicamuerteurgencias, vfechasalidausuarioobservacion, vhorasalidausuarioobservacion) => {
  return {
    numeroFactura: vnumerofactura, // numero de la factura a la que pertence la consulta -> debe existir en el archivo de trasacciones
    codigoPrestador: vcodigoprestador, // numero de doce digitos -> se valida formato, longitud
    tipoIdentificacion: vtipoidentificacion, // tipo de identificacion -> igual a la regla de usuarios
    numeroIdentificacion: vnumeroidentificacion, // numero de identificacion -> igual a la regla de usuarios
    fechaIngreso: vfechaingreso, // fecha de ingreso del usuario a obsservacion -> dd/mm/aaaa
    horaIngreso: vhoraingreso, // hora de ingreso del usuario a observacion -> hh:mm (militar)
    numeroAutorizacion: vnumeroautorizacion, // numero de autorizacion
    causaExterna: vcausaexterna, // causas externas que originaron la atencion ->
    // 01 = Accidente de trabajo
    // 02 = Accidente de transito
    // 03 = Accidente rabico
    // 04 = Accidente ofidico
    // 05 = Otro tipo de accidente
    // 06 = Evento catastrofico
    // 07 = Lesion por agresion
    // 08 = Lesion auto infligida
    // 09 = Sospecha de maltrato fisico
    // 10 = sospecha de abuso sexual
    // 11 = Sospecha de violencia sexual
    // 12 = Sospecha de maltrato emocional
    // 13 = Enfermedad general
    // 14 = Enfermedad laboral
    // 15 = Otra
    diagnosticoSalida: vdiagnosticosalida, // campo obligatorio
    diagnosticoSalida1: vdiagnosticosalida1, // campo obligatorio
    diagnosticoSalida2: vdiagnosticosalida2, // campo obligatorio
    diagnosticoSalida3: vdiagnosticosalida3, // campo obligatorio
    destinoUsuarioSalida: vdestinousuariosalida, // Que paso con el usuario al momento de darle de alta
    // 1 = Alta de urgencias,
    // 2 = Remision a otro nivel complejidad
    // 3 = hospitalizacion
    estadoUsuarioSalida: vestadousuariosalida, // Señalar el estado binario de la salida del usuario
    // 1 = vivo
    // 2 = muerto
    causaBasicaMuerteUrgencias: vcausabasicamuerteurgencias, // causa basica de la muerte del paciente en urgencias segun tabla CIE
    fechaSalidaUsuarioObservacion: vfechasalidausuarioobservacion, // formato fecha dd/mm/aaaa, no puede ser anterior a la fecha de ingreso
    horaSalidaUsuarioObservacion: vhorasalidausuarioobservacion // formato hh:mm, valores conjuntos deben ser anteriores a la fecha y hora de ingreso
  }
}

// ESTRUCTURA DEL ARCHIVO AH
// Componen los datos de hospitalizacion
// exports.createAHfile = () => {
//   return {
//     numeroFactura: vnumerofactura, // numero de la factura a la que pertence la consulta -> debe existir en el archivo de trasacciones
//     codigoPrestador: vcodigoprestador, // numero de doce digitos -> se valida formato, longitud
//     tipoIdentificacion: vtipoidentificacion, // tipo de identificacion -> igual a la regla de usuarios
//     numeroIdentificacion: vnumeroidentificacion, // numero de identificacion -> igual a la regla de usuarios
//     viaIngreso: vviaingreso, // Urgencias:
//   }
// }
