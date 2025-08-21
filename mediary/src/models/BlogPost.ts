export class BlogPost {
  id: number;
  imgCode: number;
  heading: string;
  cardDesc: string;
  content: string;

  constructor(
    id: number,
    imgCode: number,
    heading: string,
    cardDesc: string,
    content: string
  ) {
    this.id = id;
    this.imgCode = imgCode;
    this.heading = heading;
    this.cardDesc = cardDesc;
    this.content = content;
  }
}
