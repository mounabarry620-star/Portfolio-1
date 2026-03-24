import { ContactService } from './contact.service';
import type { ContactData } from './contact.service';
export declare class ContactController {
    private readonly contactService;
    constructor(contactService: ContactService);
    submit(body: ContactData): Promise<{
        success: boolean;
        message: string;
    }>;
}
