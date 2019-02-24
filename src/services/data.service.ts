import {Data} from "../models/data.model";

export class DatasService {

  livresList: Data[] = [
    {
      name: 'Harry Pother',
      description: 'Magie',
      isLend: true
    },
    {
      name: 'Dbz',
      description: 'Fighting Manga',
      isLend: true
    },
    {
      name: 'Naruto',
      description: 'Ninja Manga',
      isLend: false
    }
  ];

  cdsList: Data[] = [
    {
      name: 'Rihanna',
      description: 'HipHop',
      isLend: false
    },
    {
      name: 'Narcos',
      description: 'Netflix',
      isLend: true
    },
    {
      name: 'Gangsta Paradise',
      description: 'From Coolio',
      isLend: false
    }
  ];

}

