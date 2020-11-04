import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { UserAuth } from '../auth/decorators/auth.decorator';
import { Usr } from '../auth/decorators/user.decorator';
import { FileInterceptor } from '../file-fields/interceptors/file.interceptor';
import { MulterFile } from '../file/interfaces/multer-file.interface';
import { User } from '../user/user.entity';
import { FileAttachmentService } from './file-attachment.service';

@Controller('attachment')
export class FileAttachmentController {
  constructor(private readonly attachmentService: FileAttachmentService) {}

  @UserAuth('file-attachment', 'create:own')
  @Post(':name')
  @UseInterceptors(FileInterceptor())
  upload(@UploadedFile() file: MulterFile, @Usr() user: User) {
    return this.attachmentService.create(file.fieldname, file, user);
  }

  @UserAuth('file-attachment', 'read:any')
  @Get()
  findAll(@Query('field') field?: string) {
    const where = field ? { field: { name: field } } : {};

    return this.attachmentService.findAll(where, ['file']);
  }

  @UserAuth('file-attachment', 'read:any')
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.attachmentService.findOneOrFail(id, ['file']);
  }

  @UserAuth('file-attachment', 'read:own')
  @Get('user/me/:field')
  findOwn(@Usr() user: User, @Param('field') field: string) {
    return this.attachmentService.findAll(
      { field: { name: field }, user: { id: user.id } },
      ['file'],
    );
  }

  @UserAuth('file-attachment', 'read:any')
  @Get('user/:id')
  findByUser(@Param('id') id: number) {
    return this.attachmentService.findAll({ user: { id } }, ['file']);
  }
}