export class Testimonial {
  id: number;
  imgCode: number;
  fullName: string;
  desc: string;

  constructor(id: number, imgCode: number, fullName: string, desc: string) {
    this.id = id;
    this.imgCode = imgCode;
    this.fullName = fullName;
    this.desc = desc;
  }
}
