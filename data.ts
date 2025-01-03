export type municipality = {
    name: string;
    code: string;
  };
  
  export type municipalities = {
    deparmentName: string;
    municipalities: municipality[];
  };
  
  export type departments = {
    name: string;
  };
  
  export const allDepartments: departments[] = [
    { name: "Boaco" },
    { name: "Carazo" },
    { name: "Chinandega" },
    { name: "Chontales" },
    { name: "Estelí" },
    { name: "Granada" },
    { name: "Jinotega" },
    { name: "León" },
    { name: "Madriz" },
    { name: "Managua" },
    { name: "Masaya" },
    { name: "Matagalpa" },
    { name: "Nueva Segovia" },
    { name: "Río San Juan" },
    { name: "Rivas" },
    { name: "Atlántico Norte" },
    { name: "Atlántico Sur" },
  ];
  
  export const allMunicipalities: municipalities[] = [
    {
      deparmentName: "Boaco",
      municipalities: [
        { name: "Boaco", code: "361" },
        { name: "Camoapa", code: "362" },
        { name: "Santa Lucía", code: "363" },
        { name: "San José de los Remates", code: "364" },
        { name: "San Lorenzo", code: "365" },
        { name: "Teustepe", code: "366" },
      ],
    },
    {
      deparmentName: "Carazo",
      municipalities: [
        { name: "Jinotepe", code: "041" },
        { name: "Diriamba", code: "042" },
        { name: "San Marcos", code: "043" },
        { name: "Santa Teresa", code: "044" },
        { name: "Dolores", code: "045" },
        { name: "La Paz Carazo", code: "046" },
        { name: "El Rosario", code: "047" },
        { name: "La Conquista", code: "048" },
      ],
    },
    {
      deparmentName: "Chinandega",
      municipalities: [
        { name: "Chinandega", code: "081" },
        { name: "Corinto", code: "082" },
        { name: "El Realejo", code: "083" },
        { name: "Chichigalpa", code: "084" },
        { name: "Posoltega", code: "085" },
        { name: "El Viejo", code: "086" },
        { name: "Puerto Morazán", code: "087" },
        { name: "Somotillo", code: "088" },
        { name: "Villa Nueva", code: "089" },
        { name: "Santo Tomás del Norte", code: "090" },
        { name: "Cinco Pinos", code: "091" },
        { name: "San Francisco del Norte", code: "092" },
        { name: "San Pedro del Norte", code: "093" },
      ],
    },
    {
      deparmentName: "Chontales",
      municipalities: [
        { name: "Juigalpa", code: "121" },
        { name: "Acoyapa", code: "122" },
        { name: "Santo Tomás", code: "123" },
        { name: "Villa Sandino", code: "124" },
        { name: "San Pedro de Lóvago", code: "125" },
        { name: "La Libertad", code: "126" },
        { name: "Santo Domingo", code: "127" },
        { name: "Comalapa", code: "128" },
        { name: "San Francisco Cuapa", code: "129" },
        { name: "El Coral", code: "130" },
      ],
    },
    {
      deparmentName: "Estelí",
      municipalities: [
        { name: "Estelí", code: "161" },
        { name: "Pueblo Nuevo", code: "162" },
        { name: "Condega", code: "163" },
        { name: "San Juan Limay", code: "164" },
        { name: "La Trinidad", code: "165" },
        { name: "San Nicolás", code: "166" },
      ],
    },
    {
      deparmentName: "Granada",
      municipalities: [
        { name: "Granada", code: "201" },
        { name: "Nandaime", code: "202" },
        { name: "Diriomo", code: "203" },
        { name: "Diriá", code: "204" },
      ],
    },
    {
      deparmentName: "Jinotega",
      municipalities: [
        { name: "Jinotega", code: "241" },
        { name: "San Francisco del Norte", code: "242" },
        { name: "San Sebastián Yalí", code: "243" },
        { name: "La Concordia", code: "244" },
        { name: "San José De Bocay", code: "245" },
        { name: "El Cuá Bocay", code: "246" },
        { name: "Santa María Pantasma", code: "247" },
      ],
    },
    {
      deparmentName: "León",
      municipalities: [
        { name: "Leon", code: "281" },
        { name: "El Jicaral", code: "283" },
        { name: "La Paz Centro", code: "284" },
        { name: "Santa Rosa del Peñón", code: "285" },
        { name: "Quetzalguaque", code: "286" },
        { name: "Nagarote", code: "287" },
        { name: "El Sauce", code: "288" },
        { name: "San José Achuapa", code: "289" },
        { name: "Telica", code: "290" },
        { name: "Larreynaga Malpaisillo", code: "291" },
      ],
    },
    {
      deparmentName: "Madriz",
      municipalities: [
        { name: "Somoto", code: "321" },
        { name: "Telpaneca", code: "322" },
        { name: "San Juan Rio Coco", code: "323" },
        { name: "Palacagüina", code: "324" },
        { name: "Yalagüina ", code: "325" },
        { name: "Totogalpa ", code: "326" },
        { name: "San Lucas ", code: "327" },
        { name: "Las Sabanas ", code: "328" },
        { name: "San José de Cusmapa", code: "329" },
      ],
    },
    {
      deparmentName: "Managua",
      municipalities: [
        { name: "Managua", code: "001" },
        { name: "San Rafael Del Sur", code: "002" },
        { name: "Tipitapa", code: "003" },
        { name: "Villa Carlos Fonseca", code: "004" },
        { name: "San Francisco Libre", code: "005" },
        { name: "Mateare", code: "006" },
        { name: "Ticuantepe", code: "007" },
        { name: "Ciudad Sandino", code: "008" },
        { name: "El Crucero", code: "009" },
      ],
    },
    {
      deparmentName: "Masaya",
      municipalities: [
        { name: "Masaya", code: "401" },
        { name: "Nindirí", code: "402" },
        { name: "Tisma", code: "403" },
        { name: "Catarina", code: "404" },
        { name: "San Juan de Oriente", code: "405" },
        { name: "Niquinohomo", code: "406" },
        { name: "Nandasmo", code: "407" },
        { name: "Masatepe", code: "408" },
        { name: "La Concepción", code: "409" },
      ],
    },
    {
      deparmentName: "Matagalpa",
      municipalities: [
        { name: "Matagalpa", code: "441" },
        { name: "San Ramón", code: "442" },
        { name: "Matiguás", code: "443" },
        { name: "Muy Muy", code: "444" },
        { name: "Esquipulas", code: "445" },
        { name: "San Dionisio", code: "446" },
        { name: "San Isidro", code: "447" },
        { name: "Sébaco", code: "448" },
        { name: "Ciudad Darío", code: "449" },
        { name: "Terrabona", code: "450" },
        { name: "Rio Blanco", code: "451" },
        { name: "Tuma La Dalia", code: "452" },
        { name: "Rancho Grande", code: "453" },
      ],
    },
    {
      deparmentName: "Nueva Segovia",
      municipalities: [
        { name: "Ocotal", code: "481" },
        { name: "Santa María", code: "482" },
        { name: "Macuelizo", code: "483" },
        { name: "Dipilto", code: "484" },
        { name: "Ciudad Antigua", code: "485" },
        { name: "Mozonte", code: "486" },
        { name: "San Fernando", code: "487" },
        { name: "El Jícaro", code: "488" },
        { name: "Jalapa", code: "489" },
        { name: "Murra", code: "490" },
        { name: "Quilalí", code: "491" },
        { name: "Wiwilí", code: "492" },
        { name: "Wiwilí Nueva Segovia", code: "493" },
      ],
    },
    {
      deparmentName: "Río San Juan",
      municipalities: [
        { name: "San Carlos", code: "521" },
        { name: "El Castillo", code: "522" },
        { name: "San Miguelito", code: "523" },
        { name: "Morrito", code: "524" },
        { name: "San Juan del Norte", code: "525" },
        { name: "El Almendro", code: "526" },
      ],
    },
    {
      deparmentName: "Rivas",
      municipalities: [
        { name: "Rivas", code: "561" },
        { name: "San Jorge", code: "562" },
        { name: "Buenos Aires", code: "563" },
        { name: "Potosí", code: "564" },
        { name: "Belén", code: "565" },
        { name: "Tola", code: "566" },
        { name: "San Juan del Sur", code: "567" },
        { name: "Cárdenas", code: "568" },
        { name: "Moyogalpa", code: "569" },
        { name: "Altagracia", code: "570" },
      ],
    },
    {
      deparmentName: "Atlántico Sur",
      municipalities: [
        { name: "Bluefields", code: "601" },
        { name: "El Rama", code: "603" },
        { name: "Muelle De Los Buelles", code: "604" },
        { name: "La Cruz del Rio Grande", code: "605" },
        { name: "Prinzapolka", code: "606" },
        { name: "Nueva Guinea", code: "616" },
        { name: "Tortuguero", code: "619" },
        { name: "Kukra Hill", code: "624" },
        { name: "Laguna De Perlas", code: "626" },
        { name: "Desembocadura Rio Grande", code: "627" },
        { name: "El Ayote", code: "628" },
      ],
    },
    {
      deparmentName: "Atlántico Norte",
      municipalities: [
        { name: "Puerto Cabezas", code: "607" },
        { name: "Waspán", code: "608" },
        { name: "Siuna", code: "610" },
        { name: "Bonanza", code: "611" },
        { name: "Rosita", code: "612" },
        { name: "Bocana Paiwás", code: "615" },
        { name: "Waslala", code: "454" },
        { name: "Corn Island", code: "602" },
      ],
    },
  ];
  