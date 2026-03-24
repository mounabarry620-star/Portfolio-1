import { Injectable } from '@nestjs/common';

export interface ContactData {
  nome: string;
  prenom: string;
  message: string;
}

@Injectable()
export class ContactService {
  async handleContactSubmission(data: ContactData) {
    // Logic for sending email (e.g., using Nodemailer or an API like Resend)
    console.log('Nouveau message reçu:', data);
    
    // For now, simulate success. In a real scenario, we would use a Mailer service.
    return { success: true, message: 'Message reçu par le serveur' };
  }
}
