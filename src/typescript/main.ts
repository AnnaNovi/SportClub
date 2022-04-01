export enum ageKind {
  adults = 'Взрослые',
  children = 'Дети'
}
export enum hallKind {
  largeHall = 'Большой',
  smallHall = 'Малый'
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

export interface paymentList {
  date: string,
  idCard: number,
  client: string
}
export interface cardInfoModal {
  idCard: number,
  cardKind: string,
  cardPrice: number,
  groupName: string,
  trainer: string
}
export interface groupInfoModal {
  groupName: string,
  ageKind: string,
  sportKind: string,
  hallKind: string
}
export interface studentsInfoModal {
  idCard: number,
  client: string
}

export interface scheduleInfoModal {
  idSchedule: number,
  idGroup: number,
  groupName: string,
  hallKind: string,
  timeStart: number,
  timeEnd: number,
  lessonRepeat: boolean,
  lessonDay: number | null,
  lessonDate: Date | null
}

