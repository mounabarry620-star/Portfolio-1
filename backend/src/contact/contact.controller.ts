import { Controller, Post, Body } from '@nestjs/common';
import { ContactService } from './contact.service';
import type { ContactData } from './contact.service';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  async submit(@Body() body: ContactData) {
    return this.contactService.handleContactSubmission(body);
  }
}
