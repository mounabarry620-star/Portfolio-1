export interface ContactData {
    nome: string;
    prenom: string;
    message: string;
}
export declare class ContactService {
    handleContactSubmission(data: ContactData): Promise<{
        success: boolean;
        message: string;
    }>;
}
