Links = {   //객체
    setColor: function(color) {
    var links = document.querySelectorAll('a');
        for(i = 0; i < links.length; i++) {
            links[i].style.color = color;
        }
    }
}
Body = {
    setBackgroundColor : function(color) {
        document.querySelector('body').style.backgroundColor = color;
    },
    setColor : function(color) {
        document.querySelector('body').style.color = color;
    }
}

function nightDayHandler(self) {    //함수
    var target = document.querySelector('body');
    if(self.value === 'night') {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = 'day';

        Links.setColor('powderblue');
    } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = 'night';

        Links.setColor('blue');
    }
}