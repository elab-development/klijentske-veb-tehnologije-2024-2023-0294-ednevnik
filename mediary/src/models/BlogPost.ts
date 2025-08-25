export class BlogPost {
  id: number;
  imgCode: number;
  heading: string;
  cardDesc: string;
  content: string;
  tags: string;

  constructor(
    id: number,
    imgCode: number,
    heading: string,
    cardDesc: string,
    content: string,
    tags: string
  ) {
    this.id = id;
    this.imgCode = imgCode;
    this.heading = heading;
    this.cardDesc = cardDesc;
    this.content = content;
    this.tags = tags;
  }
}
