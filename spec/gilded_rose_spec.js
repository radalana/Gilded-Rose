describe("Gilded Rose", function() {
  it("lowers quality", function() {
    items = [ new Item("foo", 0, 1) ];
    update();
    expect(items[0].quality).toEqual(0);
  });
  it("min boundary: lowers quality", function() {
    items = [ new Item("foo", 0, 0) ];
    update();
    expect(items[0].quality).toEqual(0);
  });
  it("lowers quality by 2 after sell in day", function() {
    items = [ new Item("foo", -1, 3) ];
    update();
    expect(items[0].quality).toEqual(1);
  });
  it("min boundary: lowers quality by 2 after sell in day", function() {
    items = [ new Item("foo", -1, 1) ];
    update();
    expect(items[0].quality).toEqual(0);
  });

  it("sell day decreases", function() {
    items = [ new Item("foo", -1, 1) ];
    update();
    expect(items[0].sell_in).toEqual(-2);
  });

//Aged Brie
  it("Aged Brie getting better before sell in day", function() {
    items = [ new Item("Aged Brie", 0, 49) ];
    update();
    expect(items[0].quality).toEqual(50);
  });
  it("Aged Brie getting better after sell in day and max value", function() {
    items = [ new Item("Aged Brie", -1, 50) ];
    update();
    expect(items[0].quality).toEqual(50);
  });
  

//Backstage passes
  it("'Backstage passes' more than 10 days befor sell in", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 11, 49) ];
    update();
    expect(items[0].quality).toEqual(50);
  });
  it("'Backstage passes' to a TAFKAL80ETC concert  between 10 and 5 days befor sell in", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 48) ];
    update();
    expect(items[0].quality).toEqual(50);
  });
  it("'Backstage passes' between 5 and 1 days befor sell in", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 47) ];
    update();
    expect(items[0].quality).toEqual(50);
  });
  it("'Backstage passes' is never more than 50", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 6, 47) ];
    update();
    update();
    expect(items[0].quality).toEqual(50);
  });
  it("'Backstage passes' in a day sell in and after", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 47) ];
    update();
    expect(items[0].quality).toEqual(0);
  });
  //"Sulfuras":
  it("'Sulfuras' quality and sellIn don't change", function() {
    items = [ new Item("Sulfuras, Hand of Ragnaros", 0, 80) ];
    update();
    expect(items[0].quality).toEqual(80);
    expect(items[0].sell_in).toEqual(0);
  });


  //
  it("updateQualityAndSellIn refactor", function() {
    items = [ new Item("foo", 0, 1) ];
    updateQualityAndSellIn(items[0]);
    expect(items[0].quality).toEqual(0);
  });
  it("updateQualityAndSellIn refactor by Sulfuras'", function() {
    items = [ new Item("Sulfuras", 0, 80) ];
    updateQualityAndSellIn(items[0]);
    expect(items[0].quality).toEqual(80);
  });
  it("updateQualityAndSellIn 2 after sell in day'", function() {
    items = [ new Item("´foo", -1, 3) ];
    updateQualityAndSellIn(items[0]);
    expect(items[0].quality).toEqual(1);
  });

  
  it("update_aged_brie funtion", function() {
    items = [new Item('Aged Brie', 0, 49)];
    update_aged_brie(items[0]);
    expect(items[0].quality).toEqual(50);
  });

  it("function update_backstage more than 10 days", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 11, 49) ];
    update_backstage(items[0]);
    expect(items[0].quality).toEqual(50);
  });
  it("function update_backstage between 5 and 10 days befor sell in", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 48) ];
    update_backstage(items[0]);
    expect(items[0].quality).toEqual(50);
  });
  it("function update_backstage when there are 5 days or less", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 47) ];
    update_backstage(items[0]);
    expect(items[0].quality).toEqual(50);
  });
  it("function update_backstage, quality is never more than 50", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 1, 48) ];
    update_backstage(items[0]);
    expect(items[0].quality).toEqual(50);
  });

  it("function update_backstage, quality is 0 after sell in day", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 48) ];
    update_backstage(items[0]);
    expect(items[0].quality).toEqual(0);
  });

  it("function update_backstage, quality is 0 after sell in day", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 48) ];
    update_backstage(items[0]);
    expect(items[0].quality).toEqual(0);
  });

  it("decrease sell_in function", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 48) ];
    decrease_days(items[0]);
    expect(items[0].sell_in).toEqual(-1);
  });

  it("add function updateConjured", function() {
    items = [new Item("Conjured", 1, 3)];
    updateConjured(items[0]);
    expect(items[0].quality).toEqual(1);
  });
  it("Conjured items degrade in quality twice as fast after sell in day", function() {
    items = [new Item("Conjured Mana Cake", 0, 6)];
    update();
    expect(items[0].quality).toEqual(4);
  });
  it("Conjured items quality does not go below 0", function() {
    items = [new Item("Conjured Mana Cake", 0, 1)];
    update();
    expect(items[0].quality).toEqual(0);
  });
});

