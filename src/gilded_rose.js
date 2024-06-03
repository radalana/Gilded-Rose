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


function decrease_quality(item) {
  const name = item.name;
  if (name.startsWith('Sulfuras')) {
    return;
  }
  if (item.quality > 0) {
    item.quality--;
  }
}
function update_quality() {
  for (var i = 0; i < items.length; i++) {
    if (items[i].name != 'Aged Brie' && items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
      if (items[i].quality > 0) {
            decrease_quality(items[0]);
      }
    } else { //'Aged Brie' OR 'Backstage passes to a TAFKAL80ETC concert'
      if (items[i].quality < 50) { 
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
      }// 50 max
    }
    if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
      items[i].sell_in = items[i].sell_in - 1; //by all item decrease sell in days
    }
    if (items[i].sell_in < 0) {// afte sell day
      if (items[i].name != 'Aged Brie') {
        if (items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
          if (items[i].quality > 0) {
            if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
              items[i].quality = items[i].quality - 1 //'Aged Brie', 'Backstage passes to a TAFKAL80ETC concert'
            }
          }
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
}
