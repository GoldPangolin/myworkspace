import { Component } from '@angular/core';
import { adminData } from './mock-data/data';
import { BehaviorSubject } from 'rxjs';
import axios from 'axios';

@Component({
  selector: 'myworkspace-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent {

  passwordAlert: BehaviorSubject<boolean> = new BehaviorSubject(false);
  usersData: any[] = [];
  filterText: string = "";
  filterSelect: string = 'user_name';
  url = '';
  api_key: string ='123';
  headers = new Request(this.url, {
    headers: {
      Authorization: '',
    }
  })
  socialLinks?: any;
  socialData?: { facebook: string[]; tiktok: string[]; instagram: string[]; snapchat: string[]; twitter: string[]; linkedin: string[]; github: string[]; youtube: string[]; pinterest: string[]; };
  /**
   *
   */
  constructor() {
    this.usersData = adminData;
  }

  toggleCompromised() {
    console.log(this.passwordAlert.value);
    
    this.passwordAlert.value ? 
      this.passwordAlert.next(false) : 
      this.passwordAlert.next(true);
  }

  trackById(user: any): number {
    return user.id;
  }

  get filteredUsers() {
    if (this.filterSelect === 'user_name'){
      return this.usersData.filter(user => user.user_name.toLowerCase().includes(this.filterText.toLowerCase()));
    }
    if(this.filterSelect === 'email') {
      return this.usersData.filter(user => user.email.toLowerCase().includes(this.filterText.toLowerCase()));
    }
    if(this.filterSelect === 'compromised') {
      return this.usersData.filter(user => user.compromised === true);      
    }
    return this.usersData;
  }

  async customGet() {
    const options = {
      method: 'GET',
      url: 'https://social-links-search.p.rapidapi.com/search-social-links',
      params: {
        query: 'John Smith',
        social_networks: 'facebook,tiktok,instagram,snapchat,twitter,youtube,linkedin,github,pinterest'
      },
        headers: {

        }
      };
      console.log('custom get hit');
      
      try {
        // const response: any = await axios.request(options);
        const response = {
          "status": "OK",
          "request_id": "b1526451-33b9-473c-ac60-e90a5e0541f3",
          "data": {
            "facebook": [
              "https://www.facebook.com/Cristiano",
              "https://www.facebook.com/CR7BITW",
              "https://www.facebook.com/Official.CrisPrince",
              "https://www.facebook.com/TheLegendCR7Forever",
              "https://www.facebook.com/CRF7RM",
              "https://www.facebook.com/OficialRonaldoPage",
              "https://www.facebook.com/RonaldoUpdate",
              "https://www.facebook.com/TheBoyFromMadeira",
              "https://www.facebook.com/minicristianoronaldoJr",
              "https://www.facebook.com/cr7cronaldofans",
              "https://www.facebook.com/cristianoronaldofanclub11"
            ],
            "tiktok": [
              "https://www.tiktok.com/@juve_cristiano",
              "https://www.tiktok.com/@.cristianocr7ronaldo",
              "https://www.tiktok.com/@santiagocanale369",
              "https://www.tiktok.com/@cristiano.ronaldo__.___"
            ],
            "instagram": [
              "https://www.instagram.com/cristiano",
              "https://www.instagram.com/___.cristiano.___",
              "https://www.instagram.com/cristiano.ronaldo7_",
              "https://www.instagram.com/timeronaldo",
              "https://www.instagram.com/teamcronaldo",
              "https://www.instagram.com/lcrisjrl",
              "https://www.instagram.com/cristianojunction",
              "https://www.instagram.com/cr7goatx"
            ],
            "snapchat": [
              "https://www.snapchat.com/add/xronald3",
              "https://www.snapchat.com/add/rlhdyn17",
              "https://www.snapchat.com/add/n.4wz",
              "https://www.snapchat.com/add/badassbrownfish",
              "https://www.snapchat.com/add/samiddas",
              "https://www.snapchat.com/add/cr7sa"
            ],
            "twitter": [
              "https://twitter.com/cristiano",
              "https://twitter.com/cristianoxtra_",
              "https://twitter.com/teamcronaldo",
              "https://twitter.com/cristianocr7com",
              "https://twitter.com/pierrebesson"
            ],
            "linkedin": [
              "https://www.linkedin.com/company/cristiano-ronaldo-cr7",
              "https://www.linkedin.com/in/cristiano-ronaldo-7761b752",
              "https://www.linkedin.com/in/cristiano-ronaldo-67a6a4a9",
              "https://www.linkedin.com/in/cristiano-ronaldo-4882b229",
              "https://www.linkedin.com/in/fifagames",
              "https://www.linkedin.com/in/cristiano-ronaldo-266775aa",
              "https://www.linkedin.com/in/cristiano-ronaldo-10b522a7",
              "https://www.linkedin.com/company/cr7",
              "https://www.linkedin.com/in/cristiano-ronaldo-9ba735174",
              "https://www.linkedin.com/in/cristiano-ronaldo-832a14b1",
              "https://www.linkedin.com/in/cristiano-ronaldo-designer-31853825",
              "https://www.linkedin.com/in/cristiano-ronaldo-life-423b4916b",
              "https://www.linkedin.com/in/cristiano-ronaldo-4570a318a",
              "https://www.linkedin.com/in/cristiano-ronaldo-62217532"
            ],
            "github": [
              "https://github.com/BBC1197"
            ],
            "youtube": [
              "https://www.youtube.com/channel/UCku564mUHuB84j3O4zT1dbw"
            ],
            "pinterest": [
              "https://www.pinterest.com/czavaletal",
              "https://www.pinterest.com/feroz_here",
              "https://www.pinterest.com/kingscor45",
              "https://www.pinterest.com/faizankhurshid38",
              "https://www.pinterest.com/joao_GPR",
              "https://www.pinterest.com/soccerolivera",
              "https://www.pinterest.com/amp",
              "https://www.pinterest.com/diazbrandon0615",
              "https://www.pinterest.com/jordan723",
              "https://www.pinterest.com/mnmorais",
              "https://www.pinterest.com/bur_iq",
              "https://www.pinterest.com/MahmoudAtefMA",
              "https://www.pinterest.com/elvecinoxd23",
              "https://www.pinterest.com/lenorapiceno"
            ]
          }
        }
          this.socialData = response['data'];
          this.socialLinks = Object.keys(response['data']);
          console.log(this.socialLinks);
          
      } catch (error) {
        console.error(error);
      }
  }

}
