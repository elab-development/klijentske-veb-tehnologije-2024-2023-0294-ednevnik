export class EmotionalState {
  userID: string;
  stateName: string;
  stateDesc: string;
  color: string;
  date: string;

  constructor(
    userID: string,
    stateName: string,
    stateDesc: string,
    color: string,
    date: string
  ) {
    this.userID = userID;
    this.stateName = stateName;
    this.stateDesc = stateDesc;
    this.color = color;
    this.date = date;
  }
}
