import { MockList } from 'graphql-tools';
import casual from 'casual';
// Enable mocking in vue.config.js with `"pluginOptions": { "enableMocks": true }`
// Customize mocking: https://www.apollographql.com/docs/graphql-tools/mocking.html#Customizing-mocks

const getRandom = (array) => {return array[Math.floor(Math.random() * array.length)]};

const jobFunction = () => { return getRandom([
    'Medior Front-end Developer',
    'Junior .NET Developer',
    'Senior Full-stack Developer',
    'Project Coordinator',
    'Professional Clown',
    'CEO',
    'MILF Commander',
    'Chocolate Beer Specialist',
    'Pornography Historian',
    'Smarties Expert',
    'Head of Potatoes',
    'Bread Scientist',
    'Freelance Sperm Donor',
    'Snake Milker',
    'Genius',
    'Master of Disaster'
])};

const name = () => { return getRandom([
    'Aldert Vaandering',
    'Colin IJpelaan',
    'Remco Nonnekes',
    'Hans-Peter Hilbert',
    'Joanneke Wefers Bettink',
    'Jade Schuurmans',
    'Niels Peeren',
    'Martijn Broeksma',
    'Laurens Hartz',
    'Tony Roelofson',
    'Amina Ali',
    'Maarten Alleman',
    'George Bush',
    'Perry van den Bunt',
    'Jerney Pawiroredjo',
])};

const imageGalleries = [
    'https://stevensegallery.com',
    'https://www.placecage.com',
    'https://www.placecage.com/c',
    'https://www.placecage.com/gif',
    'https://fillmurray.com'
];

const randomImage = (width = 800, height = 600) => {
    return imageGalleries[Math.floor(Math.random() * imageGalleries.length)] + `/${width}/${height}`
};

export default {
    Query: () => ({
        blogposts: () => new MockList([1,20]),
        employees: () => new MockList([6,12])
    }),

    Author: () => ({
        name: name(),
        title: jobFunction(),
        avatar: randomImage(150, 150),
        blogposts: () => new MockList([0,6])
    }),

    BlogPost: () => ({
        title: casual.sentence,
        slug: casual.words(Math.random() * Math.floor(4)).split(' ').join('-').toLowerCase(),
        content: casual.text,
        createdOn: Date.now()
    }),
}
