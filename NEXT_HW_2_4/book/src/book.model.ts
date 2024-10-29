export interface BookDto {
  id: string;
  title: string;
  writer: string;
  date: string;
  isAvailable: boolean;
  createdDt?: Date;
  updatedDt?: Date;
}
