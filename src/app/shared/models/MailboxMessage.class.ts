export class MailboxMessage {
  public id: number;
  public Date: Date; // DateTime
  public FromName: string; //user or מערכת
  public FromEmail: string; //user or מערכת
  public Topic: string;
  public Content: string;
  public Mobile?: string;
  public Link: string;
  public IsReaden: boolean;
}

