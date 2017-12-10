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

exports.createPermissionsToken = (vnombre, vdescription) => {
  return {
    // Propiedades
    name: vnombre,
    description: vdescription
  }
}