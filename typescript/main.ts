export enum ageKind {
  adults = 'Взрослые',
  children = 'Дети'
}
export enum genderKind {
  male = 'Мужской',
  female = 'Женский'
}
export enum personType {
  client = 'Клиент',
  trainer = 'Тренер'
}

export interface clientsList {
  idPerson: number,
  personSurname: string,
  personName: string,
  personPatronymic: string,
  personPhone: string,
  idCard: number
}
export interface trainersList {
  idPerson: number,
  personSurname: string,
  personName: string,
  personPatronymic: string,
  personPhone: string,
  idGroup: number,
  groupName: string
}
export interface groupsList {
  idGroup: number,
  groupName: string,
  ageKind: string,
  sportKind: string,
  hallKind: string,
  personSurname: string,
  personName: string,
  personPatronymic: string,
  personPhone: string
}


