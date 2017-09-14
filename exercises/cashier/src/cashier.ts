interface Item {
  name: string;
  price: number;
  qty: number;
}

interface CashierAPI {
  addItem: (item: Item) => CashierAPI;
  add: (name: string, price: number, qty?: number) => CashierAPI;
  length: number;
  total: number;
}

export function cashier(): CashierAPI {
  let items: Item[] = [];
  return {
    get length() {
      return items.reduce((tot, curr) => {
        return tot + curr.qty;
      }, 0);
    },
    get total() {
      return (
        items.reduce((tot, curr) => {
          return Math.round(tot + curr.price * curr.qty * 100);
        }, 0) * 0.01
      );
    },
    add(name, price, qty = 1) {
      return this.addItem({ name, price, qty });
    },
    addItem(item: Item) {
      items.push(item);
      return this;
    }
  };
}
