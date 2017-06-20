let Bugatti = {
nombre: "BUGATTI VEYRON 16.4",
tablilla: "IGK-857",
color: "Negro y Azul",
millaje: 50000,
año: 2005,
estado: false,
velocidad: 0
prendeCarro: function(){
  if (!this.estado) {
    this.estado = true
  }

  return void;

}
acelerar: function(rate) {
  this.velocidad = this.velocidad * rate;
},

}

Bugatti.prendeCarro();
