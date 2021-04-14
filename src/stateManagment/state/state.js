import erinGreenAvatar from '../../assets/images/contactAvatar/erinGreenAvatar.jpg';
import fatimaDelgadilloAvatar from '../../assets/images/contactAvatar/fatimaDelgadilloAvatar.jpg';
import fukuyoKazutoshiAvatar from '../../assets/images/contactAvatar/fukuyoKazutoshiAvatar.jpg';
import iiyaVasinAvatar from '../../assets/images/contactAvatar/iiyaVasinAvatar.jpg';
import nonkosiJoyiAvatar from '../../assets/images/contactAvatar/nonkosiJoyiAvatar.jpg';
import oluchiMaziAvatar from '../../assets/images/contactAvatar/oluchiMaziAvatar.jpg';
import ameliaBoondAvatar from '../../assets/images/contactAvatar/ameliaBoondAvatar.jpg';
import emmaGellerAvatar from '../../assets/images/contactAvatar/emmaGellerAvatar.jpg';
import simonWalkerAvatar from '../../assets/images/contactAvatar/simonWalkerAvatar.jpg';
import johnHarrisAvatar from '../../assets/images/contactAvatar/johnHarrisAvatar.jpg';

const initialState = {
  groupState: [],

  contactListState: [
    {
      id: 1,
      fullName: 'Erin Green',
      workingSide: 'Marketing Manager',
      avatar: erinGreenAvatar,
      status: 'ONLINE',
    },
    {
      id: 2,
      fullName: 'Fatima Delgadillo',
      workingSide: 'Front-End Developer',
      avatar: fatimaDelgadilloAvatar,
      status: 'ONLINE',
    },
    {
      id: 3,
      fullName: 'Fukuyo Kzutoshi',
      workingSide: 'UX Designer',
      avatar: fukuyoKazutoshiAvatar,
      status: 'OFFLINE',
    },
    {
      id: 4,
      fullName: 'IIya Vasin',
      workingSide: 'QA',
      avatar: iiyaVasinAvatar,
      status: 'ONLINE',
    },
    {
      id: 5,
      fullName: 'Nonkosi Joyi',
      workingSide: 'Sales Lead',
      avatar: nonkosiJoyiAvatar,
      status: 'OFFLINE',
    },
    {
      id: 6,
      fullName: 'Oluchi Mazi',
      workingSide: 'Graphic Designer',
      avatar: oluchiMaziAvatar,
      status: 'OFFLINE',
    },
    {
      id: 7,
      fullName: 'amelia Boond',
      workingSide: 'Manager HR',
      avatar: ameliaBoondAvatar,
      status: 'ONLINE',
    },
    {
      id: 8,
      fullName: 'Emma Geller',
      workingSide: 'Back-End Developer',
      avatar: emmaGellerAvatar,
      status: 'OFFLINE',
    },
    {
      id: 9,
      fullName: 'Simon Walker',
      workingSide: 'ios Developer',
      avatar: simonWalkerAvatar,
      status: 'OFFLINE',
    },
    {
      id: 10,
      fullName: 'john Harris',
      workingSide: 'Digital Marketing Specialist',
      avatar: johnHarrisAvatar,
      status: 'ONLINE',
    },
  ],
};
export default initialState;
