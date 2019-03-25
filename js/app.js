const Cat = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('https://exampleUrl.dk');
    this.nickNames = ko.observableArray(['Nick','Topgun','King','Tiger']);
    this.level = ko.computed(function() {
        let level;
        let clicks = this.clickCount();

        if (clicks < 1) {
            level = 'Newborn';
        }else if (clicks < 5) {
            level = 'Infant';
        }else if (clicks < 10) {
            level = 'Teen';
        }else if (clicks > 9) {
            level = 'Adult';
        }
        
        return level;
    }, this);
};

const ViewModel = function() {
    let self = this;
    this.currentCat = ko.observable(new Cat());

    this.incrementCounter = function() {
        self.currentCat().clickCount(self.currentCat().clickCount() +1);
    };
}

ko.applyBindings(new ViewModel());