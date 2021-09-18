class HashTable {
  constructor(size) {
    this.keyMap = new Array(size);
  }

  hash(key) {
    let total = 0;
    const WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    console.log(total);
    return total;
  }

  set(key, value) {
    const index = this.hash(key);
    // [, , , , , [['hello', 'world']]]
    // [, , , , , [['hello', 'gg'], []]]
    if (this.keyMap[index] === undefined) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    const index = this.hash(key);
    console.log(this.keyMap[index]);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i];
        }
      }
    }
  }

  values() {
    const arr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        console.log(this.keyMap[i]);
        for (let j = 0; j < this.keyMap[i].length; j++) {
          arr.push(this.keyMap[i][j][1]);
        }
      }
    }
    return arr;
  }

  keys() {
    const arr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        console.log(this.keyMap[i]);
        for (let j = 0; j < this.keyMap[i].length; j++) {
          arr.push(this.keyMap[i][j][0]);
        }
      }
    }
    return arr;
  }
}

const ht = new HashTable(4);
ht.set('hello', 'world');
ht.set('dog', 'bark');
ht.set('cat', 'meow');
console.log(ht.get('hello'));
console.log(ht.get('cat'));
console.log(ht.get('dog'));
console.log(ht.values());
console.log(ht.keys());
