export class EmotionalState {
  id: string;
  userID: string;
  created_at: string;
  stateName: string;
  stateDesc: string;
  color: string;
  date: string;

  constructor(object: EmotionalState) {
    this.id = object.id;
    this.userID = object.userID;
    this.created_at = object.created_at;
    this.stateName = object.stateName;
    this.stateDesc = object.stateDesc;
    this.color = object.color;
    this.date = object.date;
  }
}
