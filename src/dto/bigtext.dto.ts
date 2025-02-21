import { AuthorDTO } from "./author.dto";

export class BigTextDTO {

    text!: string;
    date!: Date;
    author!: AuthorDTO;
}

export class GetBigTextDTO {

    text!: string;
    date!: Date;
    author!: AuthorDTO;
}