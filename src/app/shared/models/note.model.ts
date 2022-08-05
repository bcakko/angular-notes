import { DateDetailer } from '../helpers/DateDetailer';

export class Note {
  public id: number;
  public heading: string;
  public note: string;
  public date: DateDetailer;

  constructor(id: number, heading: string, note: string, date: DateDetailer) {
    this.id = id;
    this.heading = heading;
    this.note = note;
    this.date = date;
  }
}
