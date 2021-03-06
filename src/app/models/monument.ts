export class Monument {
  id: string;
  information:Informations[];
  longitude: number;
  latitude: number;
  area: string;
  picture?:string;
}

export class Informations {
  language:Language;
  name: String;
  description: String;
  question:Question[];
}

export class Question{
  question: String;
  answer: String;
}

export enum Language {
  NL = 'NL',
  FR = 'FR',
  EN = 'EN',
  DE = 'DE'
}


// IMPORTANT: needed model to get data when adding routeTitle
export class Route {
  routeTitle: string;
  monuments: Monument[]
}
