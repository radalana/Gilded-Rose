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

function update_aged_brie(brie) {
  if (!brie.name.startsWith('Aged Brie')) {
    return;
  }
  if (brie.quality < 50) {
      brie.quality++;
  }
}
function decrease_quality(item) {
  const name = item.name;
  const sellBy = item.sell_in;

  if (name.startsWith('Sulfuras')) {
      return;
  }
  if (name.startsWith('Aged Brie')) {
      update_aged_brie(item);
      return;
  }
  if (item.quality > 0) { 
      item.quality--;
  }
  if (sellBy < 0) {
    if (item.quality > 0) { 
      item.quality--;
  }
  }
    
  
}
function update() { 
  for (var i = 0; i < items.length; i++) {
    if (items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            decrease_quality(items[i]);
      
    } else { //'Aged Brie' OR 'Backstage passes to a TAFKAL80ETC concert'
        items[i].quality = items[i].quality + 1 //increase quality 
        if (items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
          if (items[i].sell_in < 11) { // up 10th day
            if (items[i].quality < 50) { //if less than 50 then inrease
              items[i].quality = items[i].quality + 1
            }
          }
          if (items[i].sell_in < 6) { //if left 5 days
            if (items[i].quality < 50) { //check if max 50
              items[i].quality = items[i].quality + 1 
            }
          }
        }
      // 50 max
    }
    if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
      items[i].sell_in = items[i].sell_in - 1; //by all item decrease sell in days
    }
    
      if (items[i].name != 'Aged Brie') {
        if (items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        } else {//'Backstage passes to a TAFKAL80ETC concert'
          items[i].quality = items[i].quality - items[i].quality
        }
      } else { //Agied Brie after sell in day
        if (items[i].quality < 50) {
          items[i].quality = items[i].quality + 1
        }
      }
    
  }
}
