const initialCats = [
    {
        clickCount : 0,
        name : 'Freddy',
        imgSrc : 'img/22252709_010df3379e_z.jpg',
        nicknames : ['Kik','Moms','Skat']
    },
    {
        clickCount : 0,
        name : 'James',
        imgSrc : 'img/434164568_fea0ad4013_z.jpg',
        nicknames : ['Jambo','Tarzan']
    },
    {
        clickCount : 0,
        name : 'Jonny',
        imgSrc : 'img/1413379559_412a540d29_z.jpg',
        nicknames : ['Rambo', 'Arnold']
    },
    {
        clickCount : 0,
        name : 'Cage',
        imgSrc : 'img/4154543904_6e2428c421_z.jpg',
        nicknames : ['Guk', 'Gak']
    },
    {
        clickCount : 0,
        name : 'Andrea',
        imgSrc : 'img/9648464288_2516b35537_z.jpg',
        nicknames : ['Huhu', 'Fufu']
    },
    {
        clickCount : 0,
        name : 'Topgun',
        imgSrc : 'img/thirdCat.jpg',
        nicknames : ['Jack', 'Fire']
    }
]

const Cat = function(data) {
    this.clickCount = data.clickCount;
    this.name = data.name;
    this.imgSrc = data.imgSrc;
    this.imgAttribution = data.imgAttribution;
    this.nickNames = data.nicknames;
    
    this.level = ko.computed(function() {
        let level = '';
        let clicks = this.clickCount;

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
    this.catName = ko.observableArray([]);
    this.catList = ko.observableArray([]);

    initialCats.forEach(function(catItem) {
        self.catList.push((new Cat(catItem)));
    });
    
    this.currentCat = ko.observable(this.catList()[0]);

    this.catList().forEach(function(cat) {
        self.catName.push(cat.name);
    });

    console.log();

    this.incrementCounter = function() {
        self.currentCat().clickCount = self.currentCat().clickCount +1;
    };

    this.changeCat = (data) => {

        for (let index = 0; index < self.catList().length; index++) {
            const element = self.catList()[index];
            
            if (element.name === data) {
                self.currentCat(element);
            }
            
        }       
    }
}

ko.applyBindings(new ViewModel());