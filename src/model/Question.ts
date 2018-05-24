export class Question {
    id: number;
    title: string;
    value: boolean;
    level: number;
    category: string;
    desc_correct: string;
    desc_not_correct: string;
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

  getPicUrl() {
       return this.pic_dir + this.id; 

}
}