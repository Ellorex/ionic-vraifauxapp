export class Question {
    private id: number;
    private title: string;
    private value: boolean;
    private level: number;
    private category: string;
    private desc_correct: string;
    private desc_not_correct: string;
    private pic_dir: string = '/assets/imgs/questions/';

  constructor(id: number, title: string, value: boolean, level: number, category: string, desc_correct: string, desc_not_correct: string) {
    this.id = id;
    this.title = title;
    this.value = value;
    this.level = level;
    this.category = category;
    this.desc_correct = desc_correct;
    this.desc_not_correct = desc_not_correct;    
  }

  getId() {
    return this.id;
  }
  getTitle() {
    return this.title;
  }
  getValue() {
    return this.value;
  }
  getLevel() {
    return this.level;
  }
  getCategory() {
    return this.category;
  }
  getDescCorrect() {
    return this.desc_correct;
  }
  getDescNotCorrect() {
    return this.desc_not_correct;
  }
  getPicUrl() {
       return this.pic_dir + this.id; 
  }
}