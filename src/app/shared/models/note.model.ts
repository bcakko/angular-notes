export class Note {
  public id: number;
  public heading: string;
  public note: string;

  constructor(id: number, heading: string, note: string) {
    this.id = id;
    this.heading = heading;
    this.note = note;
  }
}