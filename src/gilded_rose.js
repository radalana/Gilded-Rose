function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = []

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));

function decrease_days(item) {
    item.sell_in--;
}
function update_aged_brie(brie) {
  if (!brie.name.startsWith('Aged Brie')) {
    return;
  }
  if (brie.quality < 50) {
      brie.quality++;
  }
  
}
function isQualityMax(item) {
  return item.quality >= 50;
}
function update_backstage(backstage) {
  if (!backstage.name.startsWith('Backstage passes')) {
    return;
  }
  const days = backstage.sell_in;
  if (days <= 0) {
      backstage.quality = 0;
      return;
  }
  if (!isQualityMax(backstage)) {
      backstage.quality++;
  }
  
  if (days <= 10) {
    if (!isQualityMax(backstage)) {
      backstage.quality++;
  }
    if (days <= 5 ) {
      if (!isQualityMax(backstage)) {
        backstage.quality++;
    }
    }
  }
}
function update_quality(item) {
  const name = item.name;
  const sellBy = item.sell_in;

  if (name.startsWith('Sulfuras')) {
      return;
  }
  if (name.startsWith('Aged Brie')) {
      update_aged_brie(item);
      return;
  }
  if (name.startsWith('Backstage passes')) {
      update_backstage(item);
      return;
  }
  if (item.quality > 0) { 
      item.quality--;
      if (sellBy < 0) {
        if (item.quality > 0) { 
          item.quality--;
      }
      }
  }
  
}
function update() { 
  for (var i = 0; i < items.length; i++) {
      update_quality(items[i]);
      decrease_days(items[i]);
  }
}
