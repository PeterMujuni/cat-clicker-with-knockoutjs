const ViewModel = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('https://exampleUrl.dk');
    this.catLevel = ko.observable('');

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() +1);
        this.implementLevels();
    };

    this.implementLevels = function() {
        if (this.clickCount() < 5) {
            this.catLevel('Infant');
        }else if (this.clickCount() < 10) {
            this.catLevel('Teen');
        }else if (this.clickCount() > 10) {
            this.catLevel('Adult');
        }
    };
}

ko.applyBindings(new ViewModel());