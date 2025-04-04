import { StatementResultingChanges } from "node:sqlite"
import { IsString } from "class-validator";

export class UserCreateDto {
    @IsString()
    nickname: string

    @IsString()
    email: string

    @IsString()
    password: string;

    @IsString()
    role: string
}

export type TUsersUpdateDto = Partial<UserCreateDto>