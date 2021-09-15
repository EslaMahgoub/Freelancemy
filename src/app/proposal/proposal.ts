export class Proposal {
  constructor(
    public id?: number,
    public customer?: string,
    public portfolio_url: string = 'http//',
    public tools?: string,
    public estimated_hours: number = 0,
    public hourly_rate: number = 0,
    public weeks_to_complete?: number,
    public client_email?: string,
  ) {}
}

// 15, 'My Company', 'https://github.com/EslaMahgoub/', 'Ruby On Rails', 
// 150, 120, 15, eslamkhaledtawfik@gmail.com