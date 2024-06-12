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
function is_expired(item) {
  return item.sell_in < 0;
}
function isQualityMax(item) {
  return item.quality >= 50;
}
function isQualityPositive(item) {
  return item.quality > 0;
}
function update_aged_brie(brie) {
  if (!brie.name.startsWith('Aged Brie')) {
    return;
  }
  if (brie.quality < 50) {
      brie.quality++;
  }
}
function updateRegularItem(item, degrationRate=1) {
  if (item.quality - degrationRate < 0) {
      item.quality = 0;
      return;
  } 
    item.quality-=degrationRate;
    if (is_expired(item)) {
      if (isQualityPositive(item)) { 
        item.quality-=degrationRate;
    }
    }
}

function isBacstageObject(item) {
  return item.name.startsWith('Backstage passes');
}
function isExpiredOrZeroDays(backstage) {
  return is_expired(backstage) || backstage.sell_in == 0;
}

function increaseQuality(item) {
  if (!isQualityMax(backstage)) {
    backstage.quality++;
}
}
function update_backstage(backstage) {
  if (!isBacstageObject(backstage)) {
    return;
  }
  const days = backstage.sell_in;
  if (isExpiredOrZeroDays(backstage)) {
      backstage.quality = 0;
      return;
  }
  
  increaseQuality(backstage);
  if (days <= 10) {
   increaseQuality(backstage);
    if (days <= 5 ) {
      increaseQuality(backstage);
    }
  }
}

function updateConjured(item) {
  if (!item.name.startsWith('Conjured')) {
    return;
  }
  const degrationRate = 2;
  if (item.quality - degrationRate < 0) {
      item.quality = 0;
  }else {
    updateRegularItem(item, degrationRate);
  }
}
function updateQualityAndSellIn(item) {
  const name = item.name;
  if (name.startsWith('Sulfuras')) {
      return;
  } else if (name.startsWith('Aged Brie')) {
      update_aged_brie(item);
  }else if (name.startsWith('Backstage passes')) {
      update_backstage(item);
  } else if (name.startsWith('Conjured')) {
      updateConjured(item); 
  } else {
      updateRegularItem(item);
  }

  decrease_days(item);
}
function update() { 
  for (var i = 0; i < items.length; i++) {
      updateQualityAndSellIn(items[i]);
  }
}
