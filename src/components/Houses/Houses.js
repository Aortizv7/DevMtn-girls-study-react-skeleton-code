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
        var sum = 0;
        switch (this.state.q1) {
            case 'winter':
                sum += 10;
                break;
            case 'spring':
                sum += 20;
                break;
            case 'summer':
                sum += 0;
                break;
            case 'fall':
                sum += 30;
                break;
            default:
                sum += (Math.random*40);
                break;
        }
        switch (this.state.q2) {
            case 'dragon':
                sum += 10;
                break;
            case 'unicorn':
                sum += 20;
                break;
            case 'sphinx':
                sum += 0;
                break;
            case 'phoenix':
                sum += 30;
                break;
            default:
                sum += (Math.random*40);
                break;
        }
        switch (this.state.q3) {
            case 'imperius curse':
                sum += 10;
                break;
            case 'protego':
                sum += 20;
                break;
            case 'stupefy':
                sum += 0;
                break;
            case 'expelliarmus':
                sum += 30;
                break;
            default:
                sum += (Math.random*40);
                break;
        }
        switch (this.state.q4) {
            case 'forest':
                sum += 10;
                break;
            case 'kitchens':
                sum += 20;
                break;
            case 'room of requirement':
                sum += 0;
                break;
            case 'library':
                sum += 30;
                break;
            default:
                sum += (Math.random*40);
                break;
        }
        
        if (sum / 4 <= 5 ){
            this.state.gryffindor.push(this.state.currentStudent);
            this.setState({gryffindor: this.state.gryffindor});
        } else if (sum / 4 > 5 && sum / 4 <= 18) {
            this.state.slytherin.push(this.state.currentStudent);
            this.setState({slytherin: this.state.slytherin});
        } else if (sum / 4 > 18 && sum / 4 <= 22) {
            this.state.hufflepuff.push(this.state.currentStudent);
            this.setState({hufflepuff: this.state.hufflepuff});
        } else if (sum / 4 > 22) {
            this.state.ravenclaw.push(this.state.currentStudent);
            this.setState({ravenclaw: this.state.ravenclaw});
        }

        this.setState({currentStudent: '', q1: '', q2: '', q3: '', q4: ''})
    }

    //what important function goes here, and what goes inside?

}

//export me here!
