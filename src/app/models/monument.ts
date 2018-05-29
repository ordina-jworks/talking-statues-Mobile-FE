export class Monument {
  id: any;
  information:Information[];
  longitude: number;
  latitude: number;
  area: String
}

export class Information {
  language:Language;
  name: String;
  description: String;
  questions:Question[];
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


/* monument {
_id , /* MongoDB identifier
information  {
  language [enum] *,  /* NL, FR, EN, DE
name [string] *,
description [string] *,
  question {
  question [string] *,
  answer [string] *
}
},
longitude [double] *,
latitude [double] *,
area [string] *
}*/
