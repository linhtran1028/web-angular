export class Todo {
  id: string;
  title: string;
  content: string;
  createAt: string;
  status: string;

  constructor(id: string, title: string, content: string, createAt: string, status: string) {
    (this.id = id),
    (this.title = title),
    (this.content = content),
    (this.createAt = createAt);
    (this.status = status)
  }
}
