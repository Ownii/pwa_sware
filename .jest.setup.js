import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

global.timeTravel = function timeTravel(gen, count, value) {
    [...new Array(count - 1)].forEach(() => gen.next());
    return gen.next(value).value;
};

global.API_TARGET = 'API_TARGET';