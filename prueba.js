let jsonSupermercados = {
    "Supermercados": [
      {
        "Nombre": "Lidl",
        "Dirección": "Calle María Estuardo ",
        "Horario": "09:00-21:30",
        "Secciones": [
          {
            "Nombre": "Carniceria",
            "Productos": [
              {
                "Producto": "Filete de Ternera",
                "Tipo": "Añojo",
                "Oferta": false,
                "Precio": 4.85,
                "UnidadMedida": "Gramos",
                "Vigencia": "21/03/22 a 27/05/22",
                "ProductoConsumoHabitual": true,
                "Adquirido": false
              },
              {
                "Producto": "Pollo",
                "Tipo": "Campero",
                "Oferta": true,
                "Precio": 7.25,
                "UnidadMedida": "Gramos",
                "Vigencia": "27/03/22 a 30/05/22",
                "ProductoConsumoHabitual": true,
                "Adquirido": true
              }
            ]
          },
          {
            "Nombre": "Drogeria",
            "Productos": [
              {
                "Producto": "Champú",
                "Tipo": "Pantene",
                "Oferta": false,
                "Precio": 3.75,
                "UnidadMedida": "Mililitros",
                "Vigencia": "05/01/22 a 27/05/24",
                "ProductoConsumoHabitual": true,
                "Adquirido": true
              },
              {
                "Producto": "Legía",
                "Tipo": "Conejo",
                "Oferta": true,
                "Precio": 0.99,
                "UnidadMedida": "Mililitros",
                "Vigencia": "01/03/19 a 30/05/25",
                "ProductoConsumoHabitual": true,
                "Adquirido": false
              }
            ]
          }
        ]
      },
  
      {
        "Nombre": "Mercadona",
        "Dirección": "Carretera de Nijar",
        "Horario": "09:30-21:30",
        "Secciones": [
          {
            "Nombre": "Carniceria",
            "Productos": [
              {
                "Producto": "Taco de Lomo",
                "Tipo": "Cerdo",
                "Oferta": true,
                "Precio": 6.99,
                "UnidadMedida": "Gramos",
                "Vigencia": "24/03/22 a 229/05/22",
                "ProductoConsumoHabitual": true,
                "Adquirido": false
              },
              {
                "Producto": "Codorniz",
                "Tipo": "Granja",
                "Oferta": false,
                "Precio": 5.15,
                "UnidadMedida": "Gramos",
                "Vigencia": "05/04/22 a 28/05/22",
                "ProductoConsumoHabitual": false,
                "Adquirido": false
              }
            ]
          },
          {
            "Nombre": "Drogueria",
            "Productos": [
              {
                "Producto": "Detergente",
                "Tipo": "Ariel",
                "Oferta": true,
                "Precio": 7.15,
                "UnidadMedida": "Mililitros",
                "Vigencia": "2 Años",
                "ProductoConsumoHabitual": true,
                "Adquirido": true
              },
              {
                "Producto": "Gel afeitado",
                "Tipo": "Gillette",
                "Oferta": false,
                "Precio": 3.5,
                "UnidadMedida": "Mililitros",
                "Vigencia": "1 Año",
                "ProductoConsumoHabitual": false,
                "Adquirido": true
              }
            ]
          }
        ]
      }
    ]
  };
  

  console.log(jsonSupermercados);

  document.write(`<ul>`)
  for (i=0; i < jsonSupermercados.Supermercados.length; i++){
    document.write(`<li>`)
    document.write('Nombre Supermercado: ' + jsonSupermercados.Supermercados[i].Nombre);
    document.write(`</li>`)

    document.write(`<ul>`)
    for (j=0; j < jsonSupermercados.Supermercados[i].Secciones.length; j++){
        document.write(`<li>`)
        document.write('Seccion: ' + jsonSupermercados.Supermercados[i].Secciones[j].Nombre);
        document.write(`</li>`)

        document.write(`<ul>`)
        for (z=0; z < jsonSupermercados.Supermercados[i].Secciones[j].Productos.length; z++){
            document.write(`<li>`)
            if (jsonSupermercados.Supermercados[i].Secciones[j].Productos[z].Oferta){
                document.write('Producto: ' + jsonSupermercados.Supermercados[i].Secciones[j].Productos[z].Producto + ' (' + jsonSupermercados.Supermercados[i].Secciones[j].Productos[z].Precio + ' EUR)');
                document.write(`<img src='./oferta.png'/ width='3%' height='2%'>`);
            } else {
                document.write('Producto: ' + jsonSupermercados.Supermercados[i].Secciones[j].Productos[z].Producto + ' (' + jsonSupermercados.Supermercados[i].Secciones[j].Productos[z].Precio + ' EUR)');
            }
            document.write(`</li>`)
        }
        document.write(`</ul>`)
    }
    document.write(`</ul>`)
    document.write(`<br>`)

  }
  document.write(`</ul>`)