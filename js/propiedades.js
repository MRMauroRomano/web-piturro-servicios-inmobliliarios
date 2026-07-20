// ==========================================
// CONFIGURACIÓN Y DATOS DE PROPIEDADES
// ==========================================
const WHATSAPP_NUMBER = "5493517562763";

// ==========================================
// CONFIGURACIÓN DE RUTA BASE DE IMÁGENES
// ==========================================
const LOCAL_IMG_PATH = "./assets/propiedades/propiedades";

const properties = [
  {
    id: 1,
    name: "Casa familiar con Garage",
    type: "casa",
    operation: 'venta',
    price: 90000,
    location: "Colectora Este 333, Justiniano Posse",
    bedrooms: 2,
    bathrooms: 1,
    area: 700,
    description: "Espaciosa casa familiar ideal para familias grandes. Cuenta con amplios jardines y múltiples áreas de entretenimiento.",
    featured: true,
    images: [
      `${LOCAL_IMG_PATH}/CASA-2.png`
    ]
  },
  {
    id: 3,
    name: "Casa familiar con Garage",
    type: "casa",
    operation: 'venta',
    price: 34000,
    location: "Dean Funes 631, Justiniano Posse",
    status:"vendida",
    bedrooms: 1,
    bathrooms: 1,
    area: 100,
    description: "Casa familiar ubicada en excelente ubicación, cuenta con doble garage y patio amplio.",
    
    images: [
      `${LOCAL_IMG_PATH}/CASA 5 (1).png`
    ]
  },
  {
    id: 4,
    name: "Casa Familiar con Local Comercial",
    type: "casa",
    operation: 'venta',
    price: 140000,
    location: "9 de Julio 459, Justiniano Posse",
    bedrooms: 2,
    bathrooms: 1,
    area: 625,
    description: "Casa familiar con excelente ubicación y patio, con local comercial c/baño y excelente ubicación. Ideal para familias grandes.",
    
    images: [
      `${LOCAL_IMG_PATH}/CASA 6 (1).png`
    ]
  },
  {
    id: 7,
    name: "Casa familiar con Piscina",
    type: "casa",
    operation: 'venta',
    price: 180000,
    location: "San Lorenzo, Esq. Walter Luján, Luque",
    bedrooms: 3,
    bathrooms: 2,
    area: 500,
    description: "Casa familiar con amplio patio y piscina, Ideal para familias grandes, cuenta con quincho y patio espacioso.",
    
    images: [
      `${LOCAL_IMG_PATH}/oliva.png`
    ]
  },
  {
    id: 8,
    name: "Casa Familiar en Zona Urbana",
    type: "casa",
    operation: 'venta',
    price: 120000,
    location: "Armengol Tecera 261 (barrio alberdi), Córdoba Capital",
    bedrooms: 4,
    bathrooms: 2,
    area: 500,
    description: "Casa familiar con amplio patio, excelente ubicación, Ideal para familia grande.",
    featured: false,
    images: [
      `/assets/propiedades/propiedades/CASA 10.png`,
      "https://cdncla.lavoz.com.ar/resizeImage/800x450/avisos/aviso_casa/5470582/inmuebles-casa-venta-5470582-14ec2fe7-4151-43d4-96e5-ffc09da14e68.webp",
      "https://cdncla.lavoz.com.ar/resizeImage/800x450/avisos/aviso_casa/5470582/inmuebles-casa-venta-5470582-42831a14-38f5-473d-9224-b770ad680abc.webp",
      "https://cdncla.lavoz.com.ar/resizeImage/800x450/avisos/aviso_casa/5470582/inmuebles-casa-venta-5470582-6be03194-f550-42a1-91ae-deea0b281cb2.webp",
      "https://cdncla.lavoz.com.ar/resizeImage/800x450/avisos/aviso_casa/5470582/inmuebles-casa-venta-5470582-917892a3-3b31-40aa-bb58-04981dc4bbd6.webp",
      "https://cdncla.lavoz.com.ar/resizeImage/800x450/avisos/aviso_casa/5470582/inmuebles-casa-venta-5470582-f5d4d69a-8a2d-416d-ac8f-956cc659fb58.webp",
      "https://cdncla.lavoz.com.ar/resizeImage/800x450/avisos/aviso_casa/5470582/inmuebles-casa-venta-5470582-f6c6a0f9-10ef-4dc6-8e4b-c4e7f315adfa.webp",
      "https://cdncla.lavoz.com.ar/resizeImage/800x450/avisos/aviso_casa/5470582/inmuebles-casa-venta-5470582-53c6121f-ef0d-440e-b7aa-ab6fa0171ded.webp",
    ]
      
  },
  {
    id: 12,
    name: "Terreno en Venta",
    type: "terreno",
    operation: 'venta',
    price: 58000,
    location: "Belgrano 683 - Justiniano Posse",
    bedrooms: 0,
    bathrooms: 0,
    area: 825,
    description: "El terreno cuenta con servicios y con escritura en mano.",

    images: [
      `${LOCAL_IMG_PATH}/terreno.png`,
      `${LOCAL_IMG_PATH}/terreno65mil 2.jpg`,
      `${LOCAL_IMG_PATH}/terreno65mil 3.jpg`,
      `${LOCAL_IMG_PATH}/terreno65mil4.jpg`
    ]
  },
  {
    id: 13,
    name: "Terrenos en Venta",
    type: "terreno",
    operation: 'venta',
    price: 50000,
    location: "Raúl Alfonsin, Juan Manuel de Rosas - Justiniano Posse",
    bedrooms: 0,
    bathrooms: 0,
    area: 0,
    description: "Lote dividido en 3, ubicado en una zona muy tranquila, a metros de rotonda principal y colectora. Cada terreno cuenta con servicios, escritura en mano",
    
    images: [
      `${LOCAL_IMG_PATH}/terrenox31.png`,
      `${LOCAL_IMG_PATH}/terrenox32.png`,
      `${LOCAL_IMG_PATH}/terrenox33.png`
    ]
  },
  {
    id: 15,
    name: "Departamento En Venta B° Jardín",
    type: "departamento",
    operation: 'venta',
    price: 45000,
    location: "Rimini 829 Barrio Jardín Hipodromo - Córdoba Capital",
    bedrooms: 2,
    bathrooms: 1,
    area: 65,
    description: "este hermoso departamento ubicado a metros de Circunvalación y Shopping Paseo del Jockey. El mismo posee acceso por escalera y cuenta con 2 dormitorios, baño completo, living, comedor y cocina integrada con lavadero. Excelente oportunidad de inversión!!!! Apto Crédito Hipotecario!!!!",
    
    images: [
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5471139/inmuebles-departamento-venta-5471139-df77bace-ee9e-4ac1-953e-9d9a9355bbdb.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5471139/inmuebles-departamento-venta-5471139-8ab3f819-2d14-4615-b408-750f8e3cc2f0.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5471139/inmuebles-departamento-venta-5471139-baffde41-25b7-41d7-9a03-9440ec1844e7.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5471139/inmuebles-departamento-venta-5471139-4a15e193-2c63-4e65-86b9-eba9be2b80b6.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5471139/inmuebles-departamento-venta-5471139-8e758494-0751-427b-ac4a-3d3315fb2962.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5471139/inmuebles-departamento-venta-5471139-d06cd4f6-fd13-413b-84de-d92adb83c8ab.webp"
    ]
  },
  {
    id: 17,
    name: "Casa Familiar",
    type: "casa",
    operation: 'venta',
    price: 45000,
    location: "Pasaje 1 de Marzo de 1911, Justiniano Posse",
    bedrooms: 3,
    bathrooms: 1,
    area: 269,
    description: "Casa familiar con amplio patio, excelente ubicación, Ideal para familia grande. Superficie cubierta 92m2, patio, cocina, comedor, living. garaje, lavadero",
    
    images: [
      `${LOCAL_IMG_PATH}/casa pasaje.jpg`
    ]
  },
  {
    id: 18,
    name: "Casa Familiar con Amplio Patio",
    type: "casa",
    operation: 'venta',
    price: 90000,
    location: "Av. Tablada 747 , Justiniano Posse",
    bedrooms: 2,
    bathrooms: 1,
    area: 606,
    description: "Casa familiar con amplio patio, excelente ubicación, Ideal para familia grande. Superficie cubierta 129m2, patios, cocina, comedor, caraje, living, lavadero",
    
    images: [
      `${LOCAL_IMG_PATH}/casa tablada.jpg`
    ]
  },
  {
    id: 20,
    name: "Local Comercial Ideal para Emprendimiento",
    type: "casa",
    operation: 'venta',
    price: 28000,
    location: "9 de Julio 246 - Córdoba Capital",
    status: "vendido",
    bedrooms: 0,
    bathrooms: 0,
    area: 26,
    description: "LOCAL COMERCIAL SOBRE CALLE 9 DE JULIO, GALERIA SHOPPING CENTER PLANETA. MEDIDAS 3,5M DE FRENTE X 3,5M DE FONDO, CON COCHERA Y VIGILANCIA.",
    
    images: [
      `${LOCAL_IMG_PATH}/local-comercial-1.jpg`,
      `${LOCAL_IMG_PATH}/local-comercial-3.jpg`,
      `${LOCAL_IMG_PATH}/local-comercial-4.jpg`,
      `${LOCAL_IMG_PATH}/local-comercial-5.jpg`
    ]
  },
  {
    id: 21,
    name: "Lotes en Venta Potrero de Garay",
    type: "terreno",
    operation: 'venta',
    price: 18000,
    location: "Potrero de Garay - Prov. Córdoba",
    bedrooms: 0,
    bathrooms: 0,
    area: 1000,
    description: "LOCALIZADO EN UNA ZONA TRANQUILA Y CON GRANDES VISTAS. CUENTA CON (20X50), SERVICIOS DE AGUA POTABLE Y ENERGIA ELECTRICA. POSEE ESCRITURA.",
  
    images: [
      `${LOCAL_IMG_PATH}/potrero1.jpg`,
      `${LOCAL_IMG_PATH}/potrero2.jpg`,
      `${LOCAL_IMG_PATH}/potrero3.jpg`,
      `${LOCAL_IMG_PATH}/potrero4.jpg`
    ]
  },
  {
    id: 22,
    name: "Lotes en Venta Barrio Privado",
    type: "terreno",
    operation: 'venta',
    price: 18000,
    location: "Potrero de Garay, camino a San Clemente",
    bedrooms: 0,
    bathrooms: 0,
    area: 3000,
    description: "LOCALIZADO EN UNA ZONA TRANQUILA Y CON GRANDES VISTAS, BARRIO PRIVADO, EXPENSAS ECONÓMICAS,SERVICIOS DE ENERGIA ELECTRICA, AGUA POTABLE Y SEGURIDAD 24HS, AMENITIES: RESTAURANTE, PISCINA, ETC",
    
    images: [
      `${LOCAL_IMG_PATH}/terreno-1.jpg`,
      `${LOCAL_IMG_PATH}/terreno-2.jpg`,
      `${LOCAL_IMG_PATH}/terreno-3.jpg`,
      `${LOCAL_IMG_PATH}/terreno-4.jpg`,
      `${LOCAL_IMG_PATH}/terreno-5.jpg`,
      `${LOCAL_IMG_PATH}/terreno-6.jpg`
    ]
  },
  {
    id: 23,
    name: "Departamento en Ciudad de Cosquin",
    type: "departamento",
    operation: 'venta',
    price: 35000,
    location: "Corriente 674 - Cosquín, Córdoba",
    bedrooms: 2,
    bathrooms: 2,
    area: 65,
    description: "Cuenta con 2 habitaciones amplias y luminosas, living, comedor, cocina separada, balcon con vista a las montañas, patio con lavadero, terraza de 64m2 con asador. A solo una cuadra de la Plaza Prospero Molinna",
    
    images: [
      `${LOCAL_IMG_PATH}/dpto cosquin 1.webp`,
      `${LOCAL_IMG_PATH}/dpto cosquin 2.webp`,
      `${LOCAL_IMG_PATH}/dpto cosquin 3.webp`,
      `${LOCAL_IMG_PATH}/dpto cosquin 4.webp`,
      `${LOCAL_IMG_PATH}/dpto cosquin 5.webp`,
      `${LOCAL_IMG_PATH}/dpto cosquin 6.webp`,
      `${LOCAL_IMG_PATH}/dpto cosquin 7.webp`
    ]
  },
  {
    id: 24,
    name: "Departamento en Nva Córdoba",
    type: "departamento",
    operation: 'alquiler',
    rentPrice: 600000,
    expenses: 160000,
    location: "Independencia 368 - Nueva Córdoba",
    bedrooms: 1,
    bathrooms: 1,
    area: 55,
    description: "MATIAS PITURRO SERVICIOS INMOBILIARIOS EL SIGUIENTE INMUEBLE UBICADO SOBRE CALLE INDEPENDENCIA 368 ENTRE CALLES CORRIENTES Y BV ILLIA. CUENTA CON UN DORMITORIO. COCINA SEPARADA, AMPLIO LIVING COMEDOR CON ACCESO A BALCON. ESCRITURA.",
   
    images: [
      `${LOCAL_IMG_PATH}/dpto independencia 1.webp`,
      `${LOCAL_IMG_PATH}/dpto independencia 2.webp`,
      `${LOCAL_IMG_PATH}/dpto independencia 3.webp`,
      `${LOCAL_IMG_PATH}/dpto independencia 4.webp`
    ]
  },
  {
    id: 25,
    name: "Casa Comercial / Residencial",
    type: "casa",
    operation: 'alquiler',
    rentPrice: 1500000,
    status: "alquilada",
    expenses: 0,
    location: "Pasaje Scabuzzo 35 - Centro de Córdoba",
    bedrooms: 9,
    bathrooms: 5,
    area: 600,
    description: "MATIAS PITURRO SERVICIOS INMOBILIARIOS EL SIGUIENTE INMUEBLE UBICADO SOBRE PASAJE SCABUZZO 35. ENTRE CALLES SARMIENTO Y ONCATIVO. LA MISMA CUENTA CON DOS PLANTAS. PLANTA BAJA: 5 DORMITORIOS, 3 BAÑOS Y COCINA. PLANTA ALTA: TERRAZA. 4 DORMITORIOS, 2 BAÑOS Y COCINA COMPLETA. DESTINO USO RESIDENCIAL O COMERCIAL.",
   
    images: [
      `${LOCAL_IMG_PATH}/casa grande 1.webp`,
      `${LOCAL_IMG_PATH}/casa grande 2.webp`,
      `${LOCAL_IMG_PATH}/casa grande 3.webp`,
      `${LOCAL_IMG_PATH}/casa grande 4.webp`,
      `${LOCAL_IMG_PATH}/casa grande 5.webp`,
      `${LOCAL_IMG_PATH}/casa grande 6.webp`,
      `${LOCAL_IMG_PATH}/casa grande 7.webp`,
      `${LOCAL_IMG_PATH}/casa grande 8.webp`,
      `${LOCAL_IMG_PATH}/casa grande 9.webp`,
      `${LOCAL_IMG_PATH}/casa grande 10.webp`,
      `${LOCAL_IMG_PATH}/casa grande 11.webp`,
      `${LOCAL_IMG_PATH}/casa grande 12.webp`
    ]
  },
  {
    id: 26,
    name: "Departamento en Barrio Guemes",
    type: "departamento",
    operation: 'alquiler',
    status: "alquilado",
    rentPrice: 550000,
    expenses: 120000,
    location: "Marcelo T Alvear 940 - Córdoba Capital",
    bedrooms: 1,
    bathrooms: 1,
    area: 55,
    description: "MATIAS PITURRO SERVICIOS INMOBILIARIOS EL SIGUIENTE DEPARTAMENTO EN ALQUILER: UBICADO EN CALLE MARCELO T ALVEAR 940, BARRIO GUEMES FRENTE A LA CAÑADA...",
    
    images: [
      `${LOCAL_IMG_PATH}/dpto t 1.webp`,
      `${LOCAL_IMG_PATH}/dpto t 2.webp`,
      `${LOCAL_IMG_PATH}/dpto t 3.webp`,
      `${LOCAL_IMG_PATH}/dpto t 4.webp`,
      `${LOCAL_IMG_PATH}/dpto t 5.webp`,
      `${LOCAL_IMG_PATH}/dpto t 6.webp`,
      `${LOCAL_IMG_PATH}/dpto t 7.webp`,
      `${LOCAL_IMG_PATH}/dpto t 8.webp`
    ]
  },
  {
    id: 27,
    name: "Casa a demoler en San Vicente",
    type: "casa",
    operation: 'venta',
    price: 45000,
    location: "LEON 1495 Bº San Vicente - Córdoba Capital",
    bedrooms: 2,
    bathrooms: 2,
    area: 169,
    description: "MATIAS PITURRO SERVICIOS INMOBILIARIOS EL SIGUIENTE INMUEBLE UBICADO SOBRE CALLE LEON ESQUINA ZARAGOZA...",
    
    images: [
      "https://cdncla.lavoz.com.ar/avisos/aviso_casa/5591847/inmuebles-casa-venta-5591847-db14e427-afb4-4259-b111-6f8473794d15.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_casa/5591847/inmuebles-casa-venta-5591847-3f622503-9da9-4d53-90a4-002e4c58481e.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_casa/5591847/inmuebles-casa-venta-5591847-b5daf8ad-bd52-4a31-9ab3-074b72e24fd9.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_casa/5591847/inmuebles-casa-venta-5591847-81989c8f-38f7-40c9-ac9f-122595baf41d.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_casa/5591847/inmuebles-casa-venta-5591847-176c1a8b-c9de-49f9-b67a-364506976ab7.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_casa/5591847/inmuebles-casa-venta-5591847-ead1d6be-ea8b-4f0f-9c62-ffe3162c5248.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_casa/5591847/inmuebles-casa-venta-5591847-d73f60e3-5c95-4a84-a9bd-5733425312b3.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_casa/5591847/inmuebles-casa-venta-5591847-9f3715f6-ed89-4471-9c2d-a778a14cc8d1.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_casa/5591847/inmuebles-casa-venta-5591847-5b962cb2-9e30-42d6-afee-b6cd4ee11b49.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_casa/5591847/inmuebles-casa-venta-5591847-f13d185f-ef11-4479-ae9d-769dca554230.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_casa/5591847/inmuebles-casa-venta-5591847-a833448f-d6f1-4823-a688-e1cf731d521f.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_casa/5591847/inmuebles-casa-venta-5591847-cd64b560-7522-4a0e-b38e-7dde9db907a9.webp"
    ]
  },
  {
    id: 28,
    name: "Terreno en Alta Gracia",
    type: "terreno",
    operation: 'venta',
    price: 20000,
    location: "Los Alerces 100 - Alta Gracia , Córdoba ",
    bedrooms: 0,
    bathrooms: 0,
    featured: true,
    area: 360,
    description: "MATIAS PITURRO SERVICIOS INMOBILIARIOS EL SIGUIENTE INMUEBLE UBICADO EN LA CIUDAD DE ALTA GRACIA...",
    
    images: [
      "https://cdncla.lavoz.com.ar/avisos/aviso_terreno/5596148/inmuebles-terreno-venta-5596148-0b63c8d2-2b6c-4fba-a133-85401395c15a.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_terreno/5596148/inmuebles-terreno-venta-5596148-6144c8b0-6915-4c57-89c1-5f20acf268d3.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_terreno/5596148/inmuebles-terreno-venta-5596148-226ac49a-d0cc-4798-910c-bd9edf1cc465.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_terreno/5596148/inmuebles-terreno-venta-5596148-65eb0662-17c5-4057-9bfc-a052ea6db192.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_terreno/5596148/inmuebles-terreno-venta-5596148-3b3d31b0-f3cc-47f8-8c69-539bd5b7a443.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_terreno/5596148/inmuebles-terreno-venta-5596148-a1346a0b-a78a-471a-a722-5322ec248911.webp"
    ]
  },
  {
    id: 29,
    name: "Departamento en Nva Córdoba",
    type: "departamento",
    operation: 'alquiler',
    rentPrice: 600000,
    expenses: 120000,
    location: "PASAJE CARLUCCI 63 - Nueva Córdoba",
    bedrooms: 1,
    bathrooms: 1,
    area: 55,
    description: "MATIAS PITURRO SERVICIOS INMOBILIARIOS EL SIGUIENTE INMUEBLE UBICADO SOBRE CALLE PASAJE CARLUCCI N°63...",
    
    images: [
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/3890885/inmuebles-departamento-alquileres-3890885-1f2c56c8-a82f-4dd2-bb9b-7b9d23adae14.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/3890885/inmuebles-departamento-alquileres-3890885-073fdc5c-e92f-4134-acab-5aa4614814d3.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/3890885/inmuebles-departamento-alquileres-3890885-ec243ca5-19a6-48fc-b6fc-f3db3cbf8f90.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/3890885/inmuebles-departamento-alquileres-3890885-82bb4eff-661e-44eb-a76e-615e6f46d3a5.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/3890885/inmuebles-departamento-alquileres-3890885-26a10faf-7ed0-4dc1-9867-9185d945963b.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/3890885/inmuebles-departamento-alquileres-3890885-8b43f573-a084-407a-a2b8-3ebcb1ee1dc0.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/3890885/inmuebles-departamento-alquileres-3890885-b82789af-e003-43e5-9c54-d3508c852a51.webp"
    ]
  },
  {
    id: 30,
    name: "Galpón a metros de Av. Patria",
    type: "terreno",
    operation: 'venta',
    price: 85000,
    location: "Charcas 2113 Bº Pueyrredon - Córdoba Capital",
    bedrooms: 2,
    bathrooms: 2,
    area: 315,
    description: "MATIAS PITURRO SERVICIOS INMOBILIARIOS EXCELENTE GALPON UBICADO A METROS DE AV. PATRIA...",
    
    images: [
      "https://cdncla.lavoz.com.ar/avisos/aviso_galpon/4253601/inmuebles-galpon-alquileres-4253601-32938f77-6073-4a1c-b167-07662f02db9f.webp",
      "https://cdncla.lavoz.com.ar/files/avisos/aviso_galpon_deposito/aviso-galpon-deposito--11350239.webp",
      "https://cdncla.lavoz.com.ar/files/avisos/aviso_galpon_deposito/aviso-galpon-deposito--11350240.webp",
      "https://cdncla.lavoz.com.ar/files/avisos/aviso_galpon_deposito/aviso-galpon-deposito--11350241.webp",
      "https://cdncla.lavoz.com.ar/files/avisos/aviso_galpon_deposito/aviso-galpon-deposito--11350242.webp",
      "https://cdncla.lavoz.com.ar/files/avisos/aviso_galpon_deposito/aviso-galpon-deposito--11350243.webp",
      "https://cdncla.lavoz.com.ar/files/avisos/aviso_galpon_deposito/aviso-galpon-deposito--11350244.webp",
      "https://cdncla.lavoz.com.ar/files/avisos/aviso_galpon_deposito/aviso-galpon-deposito--11350245.webp"
    ]
  },
  {
    id: 32,
    name: "Departamento en Carlos Paz",
    type: "departamento",
    operation: 'venta',
    price: 105000,
    location: "Juan B. Justo 210 - Villa Carlos Paz",
    bedrooms: 2,
    bathrooms: 2,
    area: 90,
    description: "MATIAS PITURRO SERVICIOS INMOBILIARIOS EL SIGUIENTE INMUEBLE UBICADO EN VILLA CARLOS PAZ!!!...",
    
    images: [
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5583712/inmuebles-departamento-venta-5583712-19080632-c6bc-4402-90aa-4b8583207c8e.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5583712/inmuebles-departamento-venta-5583712-e70b9e35-22b5-4f4b-a93d-0ec30c4df915.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5583712/inmuebles-departamento-venta-5583712-0ef19b16-5db6-434d-b61a-f89fab555fcf.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5583712/inmuebles-departamento-venta-5583712-e333d565-cb09-4eaf-b9e4-480742446e12.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5583712/inmuebles-departamento-venta-5583712-2f0837e0-00ee-48f8-a410-0a0a89630a9f.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5583712/inmuebles-departamento-venta-5583712-006da610-130d-45de-9be9-6f638a78acd0.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5583712/inmuebles-departamento-venta-5583712-c99c55cc-a62a-4f9a-9ada-a3cba191bb21.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5583712/inmuebles-departamento-venta-5583712-cf8ea92f-5362-40b5-97d4-8a1e9df9a645.webp"
    ]
  },
  {
    id: 33,
    name: "Departamento en Barrio Alberdi",
    type: "departamento",
    operation: 'alquiler',
    rentPrice: 500000,
    expenses: 85000,
    location: "La Rioja 1092, Barrio Alberdi - Córdoba Capital",
    status:"alquilado",
    bedrooms: 1,
    bathrooms: 1,
    area: 45,
    description: "MATIAS PITURRO SERVICIOS INMOBILIARIOS EL SIGUIENTE INMUEBLE UBICADO SOBRE CALLE LA RIOJA...",
   
    images: [
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5583703/inmuebles-departamento-alquileres-5583703-fe0af458-0e58-44ea-bbe4-ecc5351d1a6d.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5583703/inmuebles-departamento-alquileres-5583703-f32a7a2e-3aaa-4edc-8761-fd1e86e1313e.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5583703/inmuebles-departamento-alquileres-5583703-d1bd3b6d-eda6-41d2-b6df-18ad1aba406c.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5583703/inmuebles-departamento-alquileres-5583703-b78e43c0-e8b3-42e9-8869-3406e60845ed.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5583703/inmuebles-departamento-alquileres-5583703-3516ca05-5998-4670-b873-57aa7579ed62.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5583703/inmuebles-departamento-alquileres-5583703-91501d40-7cf8-43ed-a862-4f35a9e02773.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5583703/inmuebles-departamento-alquileres-5583703-06f7f1a1-9888-4683-b8fd-325889e9bf06.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5583703/inmuebles-departamento-alquileres-5583703-8b3050b4-3523-4972-8be8-10390775e176.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5583703/inmuebles-departamento-alquileres-5583703-679b85ab-7608-49fb-8300-64ecb70258e7.webp"
    ]
  },
  {
    id: 34,
    name: "Departamento Monoambiente",
    type: "departamento",
    operation: 'alquiler',
    rentPrice: 400000,
    expenses: 25980,
    status: "alquilado",
    location: "CALAZANS 381 - Córdoba Capital",
    bedrooms: 0,
    bathrooms: 1,
    area: 24,
    description: "MATIAS PITURRO SERVICIOS INMOBILIARIOS ESTE PRESENTA ESTE HERMOSO MONOAMBIENTE...",
    
    images: [
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/4945863/inmuebles-departamento-alquileres-4945863-8d13df48-8c71-45a5-8b51-2ca67113cda9.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/4945863/inmuebles-departamento-alquileres-4945863-d090bfa2-28d0-4f6d-9f0b-b7159e4cc568.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/4945863/inmuebles-departamento-alquileres-4945863-49b8dadf-14dc-4542-8ed1-36d070718915.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/4945863/inmuebles-departamento-alquileres-4945863-1e1d8ad4-48f5-4d45-931d-6a6a6a1de908.webp"
    ]
  },
  {
    id: 35,
    name: "Departamento B° Gral Paz c/cochera",
    type: "departamento",
    operation: 'venta',
    price: 85000,
    location: "CATAMARCA 1052 - Córdoba Capital",
    bedrooms: 1,
    bathrooms: 1,
    area: 65,
    description: "MATIAS PITURRO SERVICIOS INMOBILIARIOS EL SIGUIENTE INMUEBLE PARA LA VENTA UBICADO SOBRE CALLE CATAMARCA 1052...",
    
    images: [
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5563984/inmuebles-departamento-venta-5563984-c0306018-6152-480f-a583-1b6b932e5790.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5563984/inmuebles-departamento-venta-5563984-153b46ee-40f2-4df8-9f62-865e178087f4.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5563984/inmuebles-departamento-venta-5563984-161963d7-0be0-4836-84d3-551d52b2ebd1.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5563984/inmuebles-departamento-venta-5563984-24989aba-a870-44a1-8dda-93033275440f.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5563984/inmuebles-departamento-venta-5563984-4a41949d-ce25-405a-8a84-9f0f46550961.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5563984/inmuebles-departamento-venta-5563984-6ea9ae2d-f0fa-4753-9439-40479d44827e.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5563984/inmuebles-departamento-venta-5563984-c6d82f24-a573-4b29-b05b-5b6f971a397c.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5563984/inmuebles-departamento-venta-5563984-667ef824-e6ed-46ed-ab37-712af46b9e69.webp"
    ]
  },
  {
    id: 36,
    name: "Departamento en Nva Córdoba",
    type: "departamento",
    operation: 'venta',
    price: 75000,
    location: "Paraná 353 - Córdoba Capital",
    bedrooms: 1,
    bathrooms: 1,
    area: 65,
    description: "MATIAS PITURRO SERVICIOS INMOBILIARIOS EL SIGUIENTE DEPARTAMENTO UBICADO SOBRE CALLE PARANA 353...",
  
    images: [
      "https://cdncla.lavoz.com.ar/files/avisos/aviso_departamento/aviso-departamento--5140269.webp",
      "https://cdncla.lavoz.com.ar/files/avisos/aviso_departamento/aviso-departamento--5140271.webp",
      "https://cdncla.lavoz.com.ar/files/avisos/aviso_departamento/aviso-departamento-alquileres-11158070.webp",
      "https://cdncla.lavoz.com.ar/files/avisos/aviso_departamento/aviso-departamento-alquileres-11158064.webp",
      "https://cdncla.lavoz.com.ar/files/avisos/aviso_departamento/aviso-departamento-alquileres-11158065.webp",
      "https://cdncla.lavoz.com.ar/files/avisos/aviso_departamento/aviso-departamento-alquileres-11158067.webp",
      "https://cdncla.lavoz.com.ar/files/avisos/aviso_departamento/aviso-departamento-alquileres-11158068.webp",
      "https://cdncla.lavoz.com.ar/files/avisos/aviso_departamento/aviso-departamento-alquileres-11158071.webp",
      "https://cdncla.lavoz.com.ar/files/avisos/aviso_departamento/aviso-departamento-alquileres-11158072.webp",
      "https://cdncla.lavoz.com.ar/files/avisos/aviso_departamento/aviso-departamento-alquileres-11158073.webp"
    ]
  },
  {
    id: 37,
    name: "Departamento en Nva Córdoba",
    type: "departamento",
    operation: 'venta',
    price: 130000,
    location: "Obispo Salguero 599 - Córdoba Capital",
    bedrooms: 2,
    bathrooms: 2,
    area: 93,
    description: "MATIAS PITURRO SERVICIOS INMOBILIARIOS TE PRESENTA EL SIGUIENTE DEPARTAMENTO UBICADO SOBRE CALLE OBISPO SALGUERO...",
   
    images: [
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/1343929/inmuebles-departamento-alquileres-1343929-238c9550-d9cf-471f-aba6-04d2564be193.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/1343929/inmuebles-departamento-alquileres-1343929-c1896de9-7188-4d6c-86f0-46a9fdfae474.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/1343929/inmuebles-departamento-alquileres-1343929-64f2abc5-d95c-4d4a-9386-c98881b9e13a.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/1343929/inmuebles-departamento-alquileres-1343929-f60d385a-a676-4e52-a833-fcfc35af8d6a.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/1343929/inmuebles-departamento-alquileres-1343929-4abf5937-23e1-4591-a530-ff681c53d4bf.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/1343929/inmuebles-departamento-alquileres-1343929-4203d013-a6b8-4317-85db-7be27cfdf243.webp"
    ]
  },
  {
    id: 38,
    name: "Departamento en Complejo Cerrado",
    type: "departamento",
    operation: 'venta',
    price: 55000,
    location: "Av. Monseñor Pablo Cabrera 1980 - Córdoba Capital",
    bedrooms: 3,
    bathrooms: 1,
    area: 70,
    description: "MATIAS PITURRO SERVICIOS INMOBILIARIOS EL SIGUIENTE INMUEBLE: DEPARTAMENTO UBICADO SOBRE AV. MONSEÑOR PABLO CABRERA 1980...",

    images: [
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5590579/inmuebles-departamento-venta-5590579-18be141f-8495-4cba-9bf6-8bd97b69a4ee.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5590579/inmuebles-departamento-venta-5590579-0d3db1b4-05bf-43ca-9c12-43cb4f19e719.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5590579/inmuebles-departamento-venta-5590579-f0e4becd-b070-4c81-b90b-5b41e619b68c.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5590579/inmuebles-departamento-venta-5590579-b67c77a6-8be9-4319-af98-a1a9e1b42980.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5590579/inmuebles-departamento-venta-5590579-c6b311a7-6bab-47ed-a63d-ba691a28e51b.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5590579/inmuebles-departamento-venta-5590579-1ee56bca-fb74-4dd9-8b57-6ad4ee403afc.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5590579/inmuebles-departamento-venta-5590579-f377e4f1-ff9a-4e59-b458-2804e0184300.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5590579/inmuebles-departamento-venta-5590579-1d464c48-d0be-47a5-a3ec-b9d05e5fda55.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5590579/inmuebles-departamento-venta-5590579-63d24f4b-3056-4890-b729-9c83dd8304ee.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5590579/inmuebles-departamento-venta-5590579-805623d9-4bc4-4370-add9-2f9b64b04f02.webp"
    ]
  },
  {
    id: 39,
    name: "Casa Familiar en Venta",
    type: "casa",
    operation: 'venta',
    price: 55000,
    location: "Santa Fe 414 - Luque",
    status:"vendida",
    bedrooms: 2,
    bathrooms: 1,
    area: 480,
    description: "MATIAS PITURRO SERVICIOS INMOBILIARIOS EL SIGUIENTE INMUEBLE: DEPARTAMENTO UBICADO SOBRE LA CALLE SANTA FE EN LUQUE...",

    images: [
      `/assets/propiedades/propiedades/santa fe luque.jpeg`
    ]
  },
  {
    id: 40,
    name: "Departamento en Nueva Córdoba",
    type: "departamento",
    operation: 'alquiler',
    rentPrice: 630000,
    expenses: 200000,
    location: "Obispo Salguero 724 - Bº Nueva Córdoba",
    status:"alquilado",
    bedrooms: 1,
    bathrooms: 1,
    area: 54,
    description: "MATIAS PITURRO SERVICIOS INMOBILIARIOS TE PRESENTA EL SIGUIENTE INMUEBLE UBICADO SOBRE CALLE OBISPO SALGUERO 724...",
    
    images: [
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5607266/inmuebles-departamento-alquileres-5607266-b8a777a9-5240-48d7-b2d2-6cc553a5860c.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5607266/inmuebles-departamento-alquileres-5607266-d31ee26c-0385-4d2d-8601-093ca480ed33.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5607266/inmuebles-departamento-alquileres-5607266-18c05ae2-8847-4090-b9e7-549bc8e435f5.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5607266/inmuebles-departamento-alquileres-5607266-18b33360-28ea-47da-bc62-1d9e2e5a25a8.webp"
    ]
  },
  {
    id: 41,
    name: "Departamento en Nueva Córdoba",
    type: "departamento",
    operation: 'alquiler',
    rentPrice: 600000,
    expenses: 79000,
    location: "INDEPENDENCIA 541 - Bº Nueva Córdoba",
    bedrooms: 1,
    bathrooms: 1,
    area: 60,
    description: "MATIAS PITURRO SERVICIOS INMOBILIARIOS PRESENTA EL SIGUIENTE INMUEBLE UBICADO EN PLENA NUEVA CORDOBA...",
   
    images: [
      "https://cdncla.lavoz.com.ar/files/avisos/aviso_departamento/aviso-departamento--8976523.webp",
      "https://cdncla.lavoz.com.ar/files/avisos/aviso_departamento/aviso-departamento--8976522.webp",
      "https://cdncla.lavoz.com.ar/files/avisos/aviso_departamento/aviso-departamento--8976524.webp",
      "https://cdncla.lavoz.com.ar/files/avisos/aviso_departamento/aviso-departamento--8976525.webp"
    ]
  },
  
  {
    id: 43,
    name: "Departamento en Nva Córdoba",
    type: "departamento",
    operation: 'venta',
    price: 95000,
    location: "Bv. Illia 542 - Nueva Córdoba",
    bedrooms: 1,
    bathrooms: 1,
    area: 64,
    description: "MATIAS PITURRO SERVICIOS INMOBILIARIOS TE PRESENTA EL SIGUIENTE INMUEBLE UBICADO SOBRE CALLE BV. ILLIA...",
   
    images: [
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5578906/inmuebles-departamento-alquileres-5578906-92121e66-2771-477b-869b-238b4859fa24.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5578906/inmuebles-departamento-alquileres-5578906-46cd0977-14bc-4009-824d-89e528baf5f9.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5578906/inmuebles-departamento-alquileres-5578906-f7ccdafc-3d42-4dc4-afbc-0bbc1de4c3be.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5578906/inmuebles-departamento-alquileres-5578906-21843883-246a-4575-bcc2-a0d217488a31.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5578906/inmuebles-departamento-alquileres-5578906-ef84442a-31a4-46f3-97e9-4dd3487bfcef.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/5578906/inmuebles-departamento-alquileres-5578906-40dba5fc-3efd-4039-8109-509f6c1cdc95.webp"
    ]
  },
  {
    id: 44,
    name: "Monoambiente en Barrio Guemes",
    type: "departamento",
    operation: 'alquiler',
    rentPrice: 280000,
    expenses: 40000,
    location: "Simón Bolivar 429 - B° Guemes",
    status:"alquilado",
    bedrooms: 1,
    bathrooms: 0,
    area: 26,
    description: "MATAS PITURRO SERVICIOS INMOBILIARIOS TE PRESENTA EL SIGUIENTE INMUEBLE UBICADO EN CALLE SIMON BOLIVAR Nº429...",
    
    images: [
      "https://cdncla.lavoz.com.ar/files/avisos/aviso_departamento/aviso-departamento-alquileres-11633107.webp",
      "https://cdncla.lavoz.com.ar/files/avisos/aviso_departamento/aviso-departamento-alquileres-11633123.webp",
      "https://cdncla.lavoz.com.ar/files/avisos/aviso_departamento/aviso-departamento-alquileres-11633114.webp",
      "https://cdncla.lavoz.com.ar/files/avisos/aviso_departamento/aviso-departamento-alquileres-11633098.webp",
      "https://cdncla.lavoz.com.ar/files/avisos/aviso_departamento/aviso-departamento-alquileres-11633099.webp"
    ]
  },
  {
    id: 45,
    name: "Departamento En Venta B° Gral Paz",
    type: "departamento",
    operation: 'venta',
    price: 140000,
    location: "Roma 351 - B° Gral Paz",
    bedrooms: 2,
    bathrooms: 2,
    area: 70,
    description: "MATAS PITURRO SERVICIOS INMOBILIARIOS TE PRESENTA EL SIGUIENTE DEPARTAMENTO EN BARRIO GENERAL PAZ...",
   
    images: [
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/4293291/inmuebles-departamento-alquileres-4293291-0e1a9860-23b9-4785-9de9-a383395e94b8.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/4293291/inmuebles-departamento-alquileres-4293291-bb24f027-a368-42eb-a841-316cf53c452a.webp",
      "https://cdncla.lavoz.com.ar/files/avisos/aviso_departamento/aviso-departamento--11489371.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/4293291/inmuebles-departamento-alquileres-4293291-ec761f65-c24a-49f7-8162-efd4234d8376.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/4293291/inmuebles-departamento-alquileres-4293291-552af6e5-561c-45a1-ade5-987a40d4f77a.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/4293291/inmuebles-departamento-alquileres-4293291-3ba63a31-0398-4ff6-880a-516614061740.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/4293291/inmuebles-departamento-alquileres-4293291-c3ccd1ef-f084-424e-aa19-9b9060b2ae41.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/4293291/inmuebles-departamento-alquileres-4293291-242e92e6-aa8c-40e5-952d-b9a983b9b7f5.webp",
      "https://cdncla.lavoz.com.ar/avisos/aviso_departamento/4293291/inmuebles-departamento-alquileres-4293291-d97d76e2-b290-431f-8eaa-860d9fcba202.webp"
    ]
  },
  {
    id: 46,
    name: "Departamento en Nueva Córdoba",
    type: "departamento",
    operation: 'alquiler',
    rentPrice: 800000,
    expenses: 115000,
    location: "Pasaje Carlucci 13 - Nueva Córdoba",

    bedrooms: 2,
    featured: true,
    bathrooms: 2,
    area: 85,
    description: "MATIAS PITURRO SERVICIOS INMOBILIARIOS TE PRESENTA EL SIGUIENTE INMUEBLE EN ALQUILER...",

    images: [
      "https://cdncla.lavoz.com.ar/resizeImage/800x450/avisos/aviso_departamento/4203332/inmuebles-departamento-alquileres-4203332-cdb341b6-6d5e-4248-bf1a-e9c10d747927.webp",
      "https://cdncla.lavoz.com.ar/resizeImage/800x450/files/avisos/aviso_departamento/aviso-departamento--11158305.webp",
      "https://cdncla.lavoz.com.ar/resizeImage/800x450/avisos/aviso_departamento/4203332/inmuebles-departamento-alquileres-4203332-e0ab3205-60a0-4ad6-998e-783d9eb77ee1.webp",
      "https://cdncla.lavoz.com.ar/resizeImage/800x450/avisos/aviso_departamento/4203332/inmuebles-departamento-alquileres-4203332-5727237e-4ad1-43f6-96cb-850d984b69c6.webp",
      "https://cdncla.lavoz.com.ar/resizeImage/800x450/avisos/aviso_departamento/4203332/inmuebles-departamento-alquileres-4203332-4e58a046-134c-4067-9506-05ae2d40a7fc.webp",
      "https://cdncla.lavoz.com.ar/resizeImage/800x450/avisos/aviso_departamento/4203332/inmuebles-departamento-alquileres-4203332-d53bc606-1940-4250-9a66-5d5ebee44acb.webp",
      "https://cdncla.lavoz.com.ar/resizeImage/800x450/avisos/aviso_departamento/4203332/inmuebles-departamento-alquileres-4203332-7bb89348-eb85-4090-bf1a-fa24f86233b7.webp"
    ]
  },
  {
    id: 47,
    name: "Departamento en Nva Córdoba",
    type: "departamento",
    operation: 'venta',
    price: 85000,
    location: "Obispo Salguero 599 - Córdoba Capital",
    bedrooms: 1,
    bathrooms: 1,
    area: 65,
    description: "MATIAS PITURRO SERVICIOS INMOBILIARIOS TE PRESENTA EL SIGUIENTE INMUEBLE UBICADO SOBRE CALLE OBISPO SALGUERO...",

    images: [
      "https://cdncla.lavoz.com.ar/resizeImage/800x450/avisos/aviso_departamento/5507987/inmuebles-departamento-alquileres-5507987-bf0846fc-ee17-4be3-bffe-1f6c245bf47e.webp",
      "https://cdncla.lavoz.com.ar/resizeImage/800x450/avisos/aviso_departamento/5507987/inmuebles-departamento-alquileres-5507987-ac778aa7-9d4a-4a8b-aa05-b0e874bfcb14.webp",
      "https://cdncla.lavoz.com.ar/resizeImage/800x450/avisos/aviso_departamento/5507987/inmuebles-departamento-alquileres-5507987-4eedbc11-d322-4f07-a28e-403f80d0df83.webp",
      "https://cdncla.lavoz.com.ar/resizeImage/800x450/avisos/aviso_departamento/5507987/inmuebles-departamento-alquileres-5507987-cef32904-84f3-4a9f-8ae1-800a784a5a9f.webp",
      "https://cdncla.lavoz.com.ar/resizeImage/800x450/avisos/aviso_departamento/5507987/inmuebles-departamento-alquileres-5507987-1553ba37-1c1a-40f7-a5a9-bb6603baee9a.webp",
      "https://cdncla.lavoz.com.ar/resizeImage/800x450/avisos/aviso_departamento/5507987/inmuebles-departamento-alquileres-5507987-a8db0d5f-e5a7-4811-8347-2c40c370feba.webp"
    ]
  },

  {
    id: 48,
    name: "Departamento en B° Gral Paz",
    type: "departamento",
    operation: 'alquiler',
    rentPrice: 480000,
    expenses: 120000,
    location: "Fray Mamerto Esquiu 432, General Paz, Córdoba, Córdoba",
    bedrooms: 1,
    bathrooms: 1,
    area: 50,
    description: "MATIAS PITURRO SERVICIOS INMOBILIARIOS PRESENTA EL SIGUIENTE INMUEBLE: EXCELENTE DEPARTAMENTO UBICADO SOBRE CALLE FRAY MAMERTO ESUQIU Nº432, ENTRE CALLES CATAMARCA Y SARMIENTO. CUENTA CON UN DORMITORIO CON PLACARD, BAÑO COMPLETO, COCINA SEMI INTEGRADA Y AMPLIO LIVING COMEDOR CON SALIDA A BALCON. SE ENCUENTRA EN UNA ZONA PRIVILEGIADA, A METROS DE PLAZA ALBERDI, HIPERMERCADO, CLINICA PRIVADA REINA FABIOLA, FACULTAD CATOLICA DE CORDOBA. EL EDIFICIO POSEE CAMARAS DE SEGURIDAD.",

    images: ["https://cdncla.lavoz.com.ar/resizeImage/800x450/avisos/aviso_departamento/4453861/inmuebles-departamento-alquileres-4453861-a4e6a976-059f-4d17-86dd-733d2b43002a.webp",
        "https://cdncla.lavoz.com.ar/resizeImage/800x450/avisos/aviso_departamento/4453861/inmuebles-departamento-alquileres-4453861-c7e625fd-fcf1-4d10-91bc-374b8d81c64f.webp",
        "https://cdncla.lavoz.com.ar/resizeImage/800x450/avisos/aviso_departamento/4453861/inmuebles-departamento-alquileres-4453861-fa352ea9-f368-4755-80fd-e6e7f051bbc7.webp",
        "https://cdncla.lavoz.com.ar/resizeImage/800x450/avisos/aviso_departamento/4453861/inmuebles-departamento-alquileres-4453861-650c1695-466b-43f3-bf70-60119f495bae.webp",
      "https://cdncla.lavoz.com.ar/resizeImage/800x450/avisos/aviso_departamento/4453861/inmuebles-departamento-alquileres-4453861-5c15c12b-0c5d-4a37-bebd-9587b7f2bf60.webp",
      "https://cdncla.lavoz.com.ar/resizeImage/800x450/avisos/aviso_departamento/4453861/inmuebles-departamento-alquileres-4453861-8d28206c-8db7-4615-9ec0-ab0f91bee7b1.webp"  
    ]
  },

  {
    id: 49,
    name: "Duplex en Nva Córdoba",
    type: "departamento",
    operation: 'alquiler',
    rentPrice: 680000,
    expenses: 300000,
    location: "Av. Velez Sarsfield 1426, Nueva Córdoba",
    bedrooms: 1,
    bathrooms: 1,
    area: 65,
    description: "MATIAS PITURRO SERVICIOS INMOBILIARIOS PRESENTA EL SIGUIENTE INMUEBLE: DEPARTAMENTO TIPO DUPLEX UBICADO SOBRE CALLE AV. VELEZ SARSFIELD, EXCELENTE ZONA. CUENTA EN PLANTA BAJA CON COCINA AMOBLADA, LIVING COMEDOR CON SALIDA A GRAN BALCON. ACCESO A PLANTA ALTA POR ESCALERA DONDE SE ENCUENTRA EL DORMITORIO CON BAÑO EN SUITE Y PLACAR VESTIDOR. PISO ALTO. GRAN VISTA A LA CIUDAD DE CORDOBA Y SIERRAS DE LA MISMA.-",
   
    images: ["https://cdncla.lavoz.com.ar/resizeImage/800x450/avisos/aviso_departamento/4250508/inmuebles-departamento-alquileres-4250508-18ae61f1-3ce6-40eb-ab1f-5108247e9020.webp",
        "https://cdncla.lavoz.com.ar/resizeImage/800x450/avisos/aviso_departamento/4250508/inmuebles-departamento-alquileres-4250508-b6888689-363a-497b-b430-604a52d9655d.webp",
        "https://cdncla.lavoz.com.ar/resizeImage/800x450/avisos/aviso_departamento/4250508/inmuebles-departamento-alquileres-4250508-b610fab9-5403-4be7-ad26-29fedb116963.webp",
        "https://cdncla.lavoz.com.ar/resizeImage/800x450/avisos/aviso_departamento/4250508/inmuebles-departamento-alquileres-4250508-ad5b8810-097a-4082-9ea2-bb4d953da0fc.webp",
      "https://cdncla.lavoz.com.ar/resizeImage/800x450/avisos/aviso_departamento/4250508/inmuebles-departamento-alquileres-4250508-5f8478f6-edc3-4543-a07e-0c88b8d06b16.webp",
      "https://cdncla.lavoz.com.ar/resizeImage/800x450/avisos/aviso_departamento/4250508/inmuebles-departamento-alquileres-4250508-ee5183d7-ef96-4115-81f2-a16930815b99.webp",
      "https://cdncla.lavoz.com.ar/resizeImage/800x450/avisos/aviso_departamento/4250508/inmuebles-departamento-alquileres-4250508-a12de2e8-ac84-428a-8127-7590bf7941e1.webp" 
    ]
  },

  

  {
    id: 51,
    name: "Departamento en Pleno Centro",
    type: "departamento",
    operation: 'alquiler',
    rentPrice: 650000,
    expenses: 200000,
    location: "Justo Jose De Urquiza 193, Centro, Córdoba",
    bedrooms: 2,
    bathrooms: 1,
    area: 70,
    description: "MATIAS PITURRO SERVICIOS INMOBILIARIOS TE PRESENTA EL SIGUIENTE INMUEBLE UBICADO SOBRE CALLE URQUIZA ESQUINA COLON. EXCELENTE ZONA PARA QUIENES BUSCAN COMODIDAD Y CERCANIA A SU TRABAJO. CUENTA CON 2 DORMITORIOS, AMPLIO ESTAR COMEDOR CON BALCON. COCINA SEPARADA. LAVADERO. BAÑO Y DOBLE PUERTA DE INGRESO.",
    
    images: ["https://cdncla.lavoz.com.ar/resizeImage/800x450/avisos/aviso_departamento/5631296/inmuebles-departamento-alquileres-5631296-ca00777f-611a-466b-ab62-86821cd3ec98.webp",
        "https://cdncla.lavoz.com.ar/resizeImage/800x450/avisos/aviso_departamento/5631296/inmuebles-departamento-alquileres-5631296-790eb3d6-3712-4d49-abd9-e81a0e38e335.webp",
        "https://cdncla.lavoz.com.ar/resizeImage/800x450/avisos/aviso_departamento/5631296/inmuebles-departamento-alquileres-5631296-10fa2d77-8e33-4d58-8740-0ddc41ff6f2d.webp",
        "https://cdncla.lavoz.com.ar/resizeImage/800x450/avisos/aviso_departamento/5631296/inmuebles-departamento-alquileres-5631296-95f749d1-04c6-4053-baf8-7a9d72f905cc.webp",
      "https://cdncla.lavoz.com.ar/resizeImage/800x450/avisos/aviso_departamento/5631296/inmuebles-departamento-alquileres-5631296-df9a9dd1-1aa1-43b2-857d-34b9668db18a.webp",
      
    ]
  },

 {
    id: 52,
    name: "Casa familiar Espaciosa",
    type: "casa",
    operation: 'venta',
    status:"vendida",
    price: 0,
    location: "Luque - Córdoba",
    
    images: [
      "/assets/propiedades/propiedades/luquecasa.jpeg",
      
    ]
  },
  

];





// ==========================================
// FUNCIONES HELPERS
// ==========================================
function formatPrice(property) {
  if (property.operation === "venta") {
    return `USD ${property.price ? property.price.toLocaleString() : ''}`;
  }
  if (property.operation === "alquiler") {
    return `$${property.rentPrice ? property.rentPrice.toLocaleString() : ''}`;
  }
  return "";
}

function getWhatsAppLink(property) {
  const price = formatPrice(property);
  const message = encodeURIComponent(
    `Hola, estoy interesado en esta propiedad:\n\nNombre: ${property.name}\nUbicación: ${property.location}\nPrecio: ${price}\nDormitorios: ${property.bedrooms}\nBaños: ${property.bathrooms}\nSuperficie: ${property.area} m²\n\n¿Podrían brindarme más información?`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

function capitalize(text) {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// ==========================================
// TARJETA COMPACTA DE LA GRILLA
// ==========================================
function createPropertyCardHTML(property) {
  const isTerreno = property.type === 'terreno';
  const priceFormatted = formatPrice(property);
  const whatsappUrl = getWhatsAppLink(property);
  const mainImage = property.images && property.images.length > 0 
    ? property.images[0] 
    : 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800';

  const isVenta = property.operation === 'venta';

  // 1. Lógica del cartel de Vendida / Alquilada
  const statusBanner = property.status === 'alquilado' 
    ? `<div class="status-banner banner-alquilado">ALQUILADO</div>`
    : property.status === 'vendida'
    ? `<div class="status-banner banner-vendida">VENDIDA</div>`
    : property.status === "vendido"
    ? `<div class="status-banner banner-vendido">VENDIDO</div>`
     : property.status === "alquilada"
    ? `<div class="status-banner banner-alquilada">ALQUILADA</div>`
    : '';

  return `
    <article class="property-card ${property.status ? 'status-' + property.status : ''}" data-id="${property.id}">
      <div class="card-image-wrapper">
        <img src="${mainImage}" alt="${property.name}" class="property-img" loading="lazy" referrerpolicy="no-referrer" />
        
        <!-- 2. Cartel renderizado sobre la imagen -->
        ${statusBanner}

        <div class="badges-top-left">
          <span class="badge badge-type">${capitalize(property.type)}</span>
          <span class="badge ${isVenta ? 'badge-sale' : 'badge-rent'}">
            ${isVenta ? 'En Venta' : 'En Alquiler'}
          </span>
        </div>

        ${property.featured && !property.status ? `<span class="badge badge-featured">Destacada</span>` : ''}
      </div>

      <div class="card-body">
        <div class="location">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span>${property.location}</span>
        </div>

        <h3 class="property-title">${property.name}</h3>
        <div class="price">${priceFormatted}</div>

        <div class="features-row">
          ${!isTerreno ? `
            <div class="feature-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M2 4v16M2 8h20M22 4v16M2 17h20"></path>
              </svg>
              <span>${property.bedrooms} hab.</span>
            </div>
            <div class="feature-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 6h6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path>
              </svg>
              <span>${property.bathrooms} baños</span>
            </div>
          ` : ''}

          <div class="feature-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"></path>
            </svg>
            <span>${property.area > 0 ? `${property.area} m²` : 'Consultar'}</span>
          </div>
        </div>

        <div class="card-actions">
          <button type="button" class="btn-more open-modal-btn" data-id="${property.id}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            </svg>
            Ver más
          </button>
          
          <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp-icon" aria-label="WhatsApp">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/>
            </svg>
          </a>
        </div>
      </div>
    </article>
  `;
}

// ==========================================
// VENTANA MODAL (VER MÁS)
// ==========================================
function openPropertyModal(propertyId) {
  const property = properties.find(p => p.id === Number(propertyId));
  if (!property) return;

  const isTerreno = property.type === 'terreno';
  const priceFormatted = formatPrice(property);
  const whatsappUrl = getWhatsAppLink(property);
  
  // Arreglo de imágenes
  const images = property.images && property.images.length > 0 
    ? property.images 
    : ['https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800'];

  let currentIndex = 0;

  let overlay = document.getElementById('propertyModalOverlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'propertyModalOverlay';
    overlay.className = 'property-modal-overlay';
    document.body.appendChild(overlay);
  }

  // Generar miniaturas si hay más de 1 foto
  const thumbnailsHTML = images.length > 1 ? `
    <div class="modal-thumbnails-wrapper">
      ${images.map((imgUrl, index) => `
        <img 
          src="${imgUrl}" 
          alt="Foto ${index + 1}" 
          class="modal-thumb ${index === 0 ? 'active' : ''}" 
          data-index="${index}"
          referrerpolicy="no-referrer"
        />
      `).join('')}
    </div>
  ` : '';

  // Flechas de navegación (solo si hay más de 1 foto)
  const navArrowsHTML = images.length > 1 ? `
    <button type="button" class="slider-arrow arrow-prev" id="prevImgBtn" aria-label="Anterior">&#10094;</button>
    <button type="button" class="slider-arrow arrow-next" id="nextImgBtn" aria-label="Siguiente">&#10095;</button>
  ` : '';

  overlay.innerHTML = `
    <div class="modal-card">
      <button type="button" class="btn-close-modal" id="closeModalBtn" aria-label="Cerrar">&times;</button>
      
      <div class="modal-image-col">
        <div class="main-image-container">
          <img src="${images[0]}" alt="${property.name}" id="modalMainImage" class="modal-img" referrerpolicy="no-referrer" />
          ${navArrowsHTML}
          <div class="badges-wrapper">
            <span class="badge-type">${capitalize(property.type)}</span>
            ${property.status ? `<span class="badge-status status-${property.status}">${capitalize(property.status)}</span>` : ''}
          </div>
        </div>
        ${thumbnailsHTML}
      </div>

      <div class="modal-info-col">
        <div class="modal-location">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span>${property.location}</span>
        </div>

        <h2 class="modal-title">${property.name}</h2>
        <div class="modal-price">
          ${priceFormatted}
          ${property.expenses ? `<span class="modal-expenses">+ $${property.expenses.toLocaleString()} expensas</span>` : ''}
        </div>

        <div class="modal-features-grid ${isTerreno ? 'terreno-grid' : ''}">
          ${!isTerreno ? `
            <div class="feature-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#004D40" stroke-width="2">
                <path d="M2 4v16M2 8h20M22 4v16M2 17h20"></path>
              </svg>
              <span class="feature-value">${property.bedrooms}</span>
              <span class="feature-label">Habitaciones</span>
            </div>

            <div class="feature-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#004D40" stroke-width="2">
                <path d="M9 6h6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path>
              </svg>
              <span class="feature-value">${property.bathrooms}</span>
              <span class="feature-label">Baños</span>
            </div>
          ` : ''}

          <div class="feature-box ${isTerreno ? 'full-width-box' : ''}">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#004D40" stroke-width="2">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"></path>
            </svg>
            <span class="feature-value">${property.area > 0 ? property.area : 'Consultar'}</span>
            <span class="feature-label">Metros²</span>
          </div>
        </div>

        <div class="modal-description">
          <h3>Descripción</h3>
          <p>${property.description}</p>
        </div>

        <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn-whatsapp-modal">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
          Consultar por WhatsApp
        </a>
      </div>
    </div>
  `;

  overlay.style.display = 'flex';
  document.body.style.overflow = 'hidden';

  // Lógica de cambio de imagen
  const mainImgElement = document.getElementById('modalMainImage');
  const thumbs = overlay.querySelectorAll('.modal-thumb');

  function updateSlide(index) {
    if (index < 0) index = images.length - 1;
    if (index >= images.length) index = 0;
    currentIndex = index;

    if (mainImgElement) {
      mainImgElement.src = images[currentIndex];
    }

    thumbs.forEach(t => {
      if (Number(t.dataset.index) === currentIndex) {
        t.classList.add('active');
        t.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } else {
        t.classList.remove('active');
      }
    });
  }

  // Clic en flechas
  const prevBtn = document.getElementById('prevImgBtn');
  const nextBtn = document.getElementById('nextImgBtn');

  if (prevBtn) {
    prevBtn.onclick = (e) => {
      e.stopPropagation();
      updateSlide(currentIndex - 1);
    };
  }

  if (nextBtn) {
    nextBtn.onclick = (e) => {
      e.stopPropagation();
      updateSlide(currentIndex + 1);
    };
  }

  // Clic en miniaturas
  thumbs.forEach(thumb => {
    thumb.onclick = (e) => {
      e.stopPropagation();
      updateSlide(Number(thumb.dataset.index));
    };
  });

  // Evento cerrar
  const closeBtn = document.getElementById('closeModalBtn');
  if (closeBtn) {
    closeBtn.onclick = (e) => {
      e.stopPropagation();
      closeModal();
    };
  }

  overlay.onclick = (e) => {
    if (e.target === overlay) closeModal();
  };
}

function closeModal() {
  const overlay = document.getElementById('propertyModalOverlay');
  if (overlay) overlay.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// ==========================================
// FILTRADO Y RENDERIZADO GENERAL
// ==========================================
function renderCatalog(filterType = 'todos', filterOperation = 'todos', filterLocation = 'todas') {
  const container = document.getElementById('propertiesGrid') || document.getElementById('propertiesContainer');
  const resultsCount = document.getElementById('resultsCount');

  if (!container) return;

  const filteredProperties = properties.filter((property) => {
    const matchesType = filterType === 'todos' || property.type === filterType;
    const matchesOperation = filterOperation === 'todos' || property.operation === filterOperation;

    const locLower = property.location.toLowerCase();
    let matchesLocation = true;
    if (filterLocation === 'justiniano-posse') {
      matchesLocation = locLower.includes('justiniano posse');
    } else if (filterLocation === 'cordoba') {
      matchesLocation = locLower.includes('córdoba') || locLower.includes('cordoba');
    }

    return matchesType && matchesOperation && matchesLocation;
  });

  if (resultsCount) {
    resultsCount.innerHTML = `Mostrando <strong>${filteredProperties.length}</strong> propiedades`;
  }

  if (filteredProperties.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem; grid-column: 1/-1;">
        <h3 style="font-family: var(--font-serif, serif); color: #0c382e;">No se encontraron propiedades</h3>
        <p style="color: #64748b; margin-top: 0.5rem;">Intenta cambiar los filtros de búsqueda.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filteredProperties
    .map((property) => createPropertyCardHTML(property))
    .join('');

  document.querySelectorAll('.open-modal-btn').forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      openPropertyModal(btn.dataset.id);
    };
  });
}

// Inicializar apenas cargue la página
function init() {
  renderCatalog();

  const filterForm = document.getElementById('filterForm');
  if (filterForm) {
    filterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const typeSelect = document.getElementById('filterType');
      const statusSelect = document.getElementById('filterStatus');
      const locationSelect = document.getElementById('filterLocation');

      const selectedType = typeSelect ? typeSelect.value : 'todos';
      const selectedStatus = statusSelect ? statusSelect.value : 'todos';
      const selectedLocation = locationSelect ? locationSelect.value : 'todas';

      renderCatalog(selectedType, selectedStatus, selectedLocation);
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}