export interface IStudent {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  coutry: string;
  birthday: Date;
  gender: string;
  hobbies: string[];
  specialization: ISpecialization[];
}

export interface ISpecialization {
  topicName: string;
  Grades: string;
}
