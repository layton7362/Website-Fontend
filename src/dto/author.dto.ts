import { BigTextDTO } from "./bigtext.dto";

export class AuthorDTO {
  name!: string;
  surname!: string;
  email!: string;
  start!: Date
  texts!: BigTextDTO[];
}
