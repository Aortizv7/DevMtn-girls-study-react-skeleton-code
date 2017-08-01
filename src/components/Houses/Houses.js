//imports here...

/*what code goes here?*/ {
    constructor() {
        //what super important line goes here?
        this.state = {
            sortHat: 'https://www.hp-lexicon.org/wp-content/uploads/2016/09/the_sorting_hat_by_sahinduezguen-d47mwt5.png',
            slythCrest: 'https://vignette4.wikia.nocookie.net/harrypotter/images/e/ef/Slytherin%E2%84%A2_Crest_%28Painting%29.png/revision/latest?cb=20091129190321',
            gryffCrest: 'http://vignette1.wikia.nocookie.net/harrypotter/images/f/f2/Gryffindor%E2%84%A2_Crest.png/revision/latest?cb=20091129182119',
            huffCrest: 'https://vignette3.wikia.nocookie.net/harrypotter/images/3/30/Hufflepuff%E2%84%A2_Crest_%28Painting%29.png/revision/latest?cb=20091129184403',
            ravenCrest: 'http://vignette1.wikia.nocookie.net/harrypotter/images/6/6c/Ravenclaw%E2%84%A2_Crest_%28Painting%29.png/revision/latest?cb=20091129184403',
            slytherin: ['Draco Malfoy', 'Blaise Zabini'],
            gryffindor: ['Hermione Granger', 'Ginny Weasley'],
            hufflepuff: ['Ernie MacMillan', 'Cedric Diggory'],
            ravenclaw: ['Luna Lovegood', 'Padma Patil'],
            currentStudent: '',
            q1: '', 
            q2: '', 
            q3: '', 
            q4: ''
        }
    }

    //put update functions here

    sortStudent() {
        //00 gryff (0-10.5, excl.)
        //10 slyth (10.5-20.5, excl)
        //20 huff (20.5-30.5, excl)
        //30 raven (30.5 and up)
        var strAns = '';

        console.log(this.state.q1);
        console.log(this.state.q2);
        console.log(this.state.q3);
        console.log(this.state.q4);
        
        switch (this.state.q1) {
            case 'winter':
                strAns += 's';
                break;
            case 'spring':
                strAns += 'h';
                break;
            case 'summer':
                strAns += 'g';
                break;
            case 'fall':
                strAns += 'rr';
                break;
            default:
                strAns += 'r';
                break;
        }
        switch (this.state.q2) {
            case 'dragon':
                strAns += 's';
                break;
            case 'unicorn':
                strAns += 'h';
                break;
            case 'sphinx':
                strAns += 'gg';
                break;
            case 'phoenix':
                strAns += 'r';
                break;
            default:
                strAns += 'g';
                break;
        }
        switch (this.state.q3) {
            case 'imperius curse':
                strAns += 'ss';
                break;
            case 'protego':
                strAns += 'h';
                break;
            case 'stupefy':
                strAns += 'g';
                break;
            case 'expelliarmus':
                strAns += 'r';
                break;
            default:
                strAns += 's';
                break;
        }
        switch (this.state.q4) {
            case 'forest':
                strAns += 's';
                break;
            case 'kitchens':
                strAns += 'hh';
                break;
            case 'room of requirement':
                strAns += 'g';
                break;
            case 'library':
                strAns += 'r';
                break;
            default:
                strAns += 'h';
                break;
        }
        
        function letterMost(str) {
            let counts = {g: 0, s: 0, h: 0, r: 0};
            for (let i = 0; i < str.length; i++) {
                if(str[i] === 'g') {
                    counts.g += 1;
                } else if(str[i] === 's') {
                    counts.s += 1;
                } else if(str[i] === 'h') {
                    counts.h += 1;
                } else if(str[i] === 'r') {
                    counts.r += 1;
                }
            }
            let max = 'g';
            for (let prop in counts) {
                if (counts[prop] > counts[max]){
                    max = prop;
                }
            }
            return max;
        }
        console.log(strAns);
        // console.log(letterMost(strAns));
        let houseDec = letterMost(strAns);
        if (houseDec === 'g'){
            this.state.gryffindor.push(this.state.currentStudent);
            this.setState({gryffindor: this.state.gryffindor});
        } else if (houseDec === 's') {
            this.state.slytherin.push(this.state.currentStudent);
            this.setState({slytherin: this.state.slytherin});
        } else if (houseDec === 'h') {
            this.state.hufflepuff.push(this.state.currentStudent);
            this.setState({hufflepuff: this.state.hufflepuff});
        } else if (houseDec === 'r') {
            this.state.ravenclaw.push(this.state.currentStudent);
            this.setState({ravenclaw: this.state.ravenclaw});
        }

        // this.setState({currentStudent: '', q1: '', q2: '', q3: '', q4: ''})
    }

    //what important function goes here, and what goes inside?

}

//export me here!
