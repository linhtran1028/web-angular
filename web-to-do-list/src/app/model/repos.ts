export class Repos {
  id: string;
  name: string;
  html_url: string;
  description: string;

  constructor(id: string, name: string, html_url: string, description: string) {
    (this.id = id),
    (this.name = name),
    (this.html_url = html_url),
    (this.description = description);
  }
}
