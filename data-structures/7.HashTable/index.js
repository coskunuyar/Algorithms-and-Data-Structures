class HashTable{
  constructor(size = 40){
    this.storage = new Array(size);
    this.salt = Math.random().toString().replace('.','');
  }

  _hash(key){
    key += this.salt;
    const prime_number = 31;
    let hash = 0;
    key.split('').forEach(char => {
      hash = (hash*prime_number + char.charCodeAt(0) - 96) % this.storage.length;
    })
    return Math.abs(hash);
  }

  set(key , value){
    const index = this._hash(key);
    if(!this.storage[index]) this.storage[index] = [];
    this.storage[index].push({ key , value });
  }

  get(key){
    const index = this._hash(key);
    let foundItem;
    this.storage[index].forEach(item => {
      if(item.key === key) foundItem = item;
    })
    return foundItem;
  }

  keys(){
    const keys = [];
    this.storage.forEach(items => {
      items.forEach(item => {
        keys.push(item.key);
      })
    })
    return keys;
  }

  values(){
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
