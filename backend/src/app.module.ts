import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './projects/projects.module';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [ProjectsModule, ContactModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
