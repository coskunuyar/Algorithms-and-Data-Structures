interface TableItem{
  key: string;
  value: any;
}

class HashTable{
  storage: TableItem[][];
  salt: string;

  constructor(size = 40){
    this.storage = new Array(size);
    this.salt = Math.random().toString().replace('.','');
  }

  private _hash(key: string): number{
    key += this.salt;
    const prime_number = 31;
    let hash = 0;
    key.split('').forEach(char => {
      hash = (hash*prime_number + char.charCodeAt(0) - 96) % this.storage.length;
    })
    return Math.abs(hash);
  }

  // Average O(1)
  public set(key: string , value: any){
    const index = this._hash(key);
    if(!this.storage[index]) this.storage[index] = [];
    this.storage[index].push({ key , value });
  }

  // Average O(1)
  public get(key: string ): TableItem{
    const index = this._hash(key);
    let foundItem;
    this.storage[index].forEach(item => {
      if(item.key === key) foundItem = item;
    })
    return foundItem;
  }

  // Average O(N^2)
  public keys(): string[]{
    const keys = [];
    this.storage.forEach(items => {
      items.forEach(item => {
        keys.push(item.key);
      })
    })
    return keys;
  }

  // Average O(N^2)
  public values(): any[]{
    const values = [];
    this.storage.forEach(items => {
      items.forEach(item => {
        values.push(item.value);
      })
    })
    return values;
  }
}

const table = new HashTable();
table.set('name','coskun');
table.set('surname','uyar');

console.log(table.get('name'));
console.log(table.get('surname'));

console.log(table.keys());
console.log(table.values());
