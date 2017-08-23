export class Images {
  public category: string;
  public imageSrc: string[];

  constructor(category: string, imageSrc: string[]) {
    this.category = category;
    this.imageSrc = imageSrc;
  }
}
