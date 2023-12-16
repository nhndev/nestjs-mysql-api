import { ApiProperty } from "@nestjs/swagger";

export class CreateStudentDto {
    @ApiProperty()
    fullName: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    address: string;
}
