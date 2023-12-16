import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './student.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async create(createStudentDto: CreateStudentDto) {
    return await this.studentRepository.save(createStudentDto);
  }

  async findAll() {
    return await this.studentRepository.find();
  }

  async findOne(id: number) {
    const student = await this.studentRepository.findOneBy({ id });
    if (!student) {
      throw new NotFoundException('Student Not Found');
    }
    return student;
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    const student = await this.studentRepository.findOneBy({ id });
    if (!student) {
      throw new NotFoundException('Student Not Found');
    }
    return await this.studentRepository.update(id, updateStudentDto);
  }

  async remove(id: number) {
    const student = await this.studentRepository.findOneBy({ id });
    if (!student) {
      throw new NotFoundException('Student Not Found');
    }
    return await this.studentRepository.remove(student);
  }
}
