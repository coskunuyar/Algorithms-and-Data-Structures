const { randomBytes } = require('crypto');

function HashTable(size = 40) {
  this.storage = new Array(size);
  this.salt = randomBytes(12).toString('hex');
}

HashTable.prototype._hash = function (value) {
  let hash = 0;
  const primeNumber = 47;
  const salted = value + this.salt;
  for (let char of salted) {
    hash = (hash * primeNumber + char.charCodeAt(0) - 96) % this.storage.length;
  }
  return Math.abs(hash);
};

HashTable.prototype.set = function (key, value) {
  const index = this._hash(key);
  if (!this.storage[index]) this.storage[index] = [];
  this.storage[index].push([key, value]);
};

HashTable.prototype.get = function (key) {
  const index = this._hash(key);
  if (!this.storage[index]) return;
  let foundValue;
  this.storage[index].forEach((item) => {
    if (item[0] === key) {
      foundValue = item[1];
    }
  });
  return foundValue;
};

HashTable.prototype.keys = function () {
  const keys = [];
  this.storage.forEach((element) => {
    if (element) {
      element.forEach((item) => {
        keys.push(item[0]);
      });
    }
  });
  return keys;
};

HashTable.prototype.values = function () {
  const values = [];
  this.storage.forEach((element) => {
    if (element) {
      element.forEach((item) => {
        values.push(item[1]);
      });
    }
  });
  return values;
};

// const table = new HashTable();
// table.set('name', 'Coskun');
// table.set('surname', 'UYAR');
// console.log(table.keys());
// console.log(table.values());
