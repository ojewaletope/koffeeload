import { EventEmitter, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Coffee } from '../interfaces/interface';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  data = [
    {
      id: 1,
      name: 'Cappuccino',
      price: 20,
      img: 'assets/img/capuccino.png',
      code: 'GRAMHKPODS-30',
      description:
        'Colombia Caturra coffee is famous for its dark fruit aromas and flavour of blackberry and cherry. It also features notes of toasted almond and toasted sourdough.',
    },
    {
      id: 2,
      name: 'C. Macchiatto',
      price: 20,
      img: 'assets/img/macchiatto.png',
      code: 'GRAMHKPODS-31',
      description:
        'Colombia Caturra coffee is famous for its dark fruit aromas and flavour of blackberry and cherry. It also features notes of toasted almond and toasted sourdough.',
    },
    {
      id: 3,
      name: 'Corretto',
      price: 25,
      img: 'assets/img/correto.png',
      code: 'GRAMHKPODS-32',
      description:
        'Colombia Caturra coffee is famous for its dark fruit aromas and flavour of blackberry and cherry. It also features notes of toasted almond and toasted sourdough.',
    },
    {
      id: 4,
      name: 'Cappuccino',
      price: 20,
      img: 'assets/img/capuccino.png',
      code: 'GRAMHKPODS-33',
      description:
        'Colombia Caturra coffee is famous for its dark fruit aromas and flavour of blackberry and cherry. It also features notes of toasted almond and toasted sourdough.',
    },
    {
      id: 5,
      name: 'C. Macchiatto',
      price: 20,
      img: 'assets/img/macchiatto.png',
      code: 'GRAMHKPODS-34',
      description:
        'Colombia Caturra coffee is famous for its dark fruit aromas and flavour of blackberry and cherry. It also features notes of toasted almond and toasted sourdough.',
    },
    {
      id: 6,
      name: 'Corretto',
      price: 25,
      img: 'assets/img/correto.png',
      code: 'GRAMHKPODS-35',
      description:
        'Colombia Caturra coffee is famous for its dark fruit aromas and flavour of blackberry and cherry. It also features notes of toasted almond and toasted sourdough.',
    },
    {
      id: 7,
      name: 'Cappuccino',
      price: 20,
      img: 'assets/img/capuccino.png',
      code: 'GRAMHKPODS-36',
      description:
        'Colombia Caturra coffee is famous for its dark fruit aromas and flavour of blackberry and cherry. It also features notes of toasted almond and toasted sourdough.',
    },
    {
      id: 8,
      name: 'C. Macchiatto',
      price: 20,
      img: 'assets/img/macchiatto.png',
      code: 'GRAMHKPODS-37',
      description:
        'Colombia Caturra coffee is famous for its dark fruit aromas and flavour of blackberry and cherry. It also features notes of toasted almond and toasted sourdough.',
    },
    {
      id: 9,
      name: 'Corretto',
      price: 25,
      img: 'assets/img/correto.png',
      code: 'GRAMHKPODS-38',
      description:
        'An intense sweetness coupled with rich flavours of roasted hazelnut and vanilla spice make the Brazil Yellow Bourbon a truly unmissable blend.',
    },
  ];
  addToCart: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  getData(): Observable<Coffee[]> {
    return of(this.data).pipe(
      tap(),
      map((item) => {
        return item.slice(0, 3);
      })
    );
  }
  getShopData(): Observable<Coffee[]> {
    return of(this.data).pipe(
      tap(),
      map((data) => {
        return data;
      })
    );
  }
  getSingleData(id: number): Observable<Coffee> {
    return of(this.data).pipe(
      tap(),
      map((data) => {
        return data.find((item) => {
          return item.id === +id;
        });
      })
    );
  }

  async addItems(item: Coffee) {
    const items = [];
    items.push(item);
    await localStorage.setItem('products', JSON.stringify(items));
  }

  async getItems() {
    return JSON.parse(localStorage.getItem('products'));
  }
}
