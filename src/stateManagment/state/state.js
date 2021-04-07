import erinGreenAvatar from '../../assets/images/contactAvatar/erinGreenAvatar.jpg';
import fatimaDelgadilloAvatar from '../../assets/images/contactAvatar/fatimaDelgadilloAvatar.jpg';
import fukuyoKazutoshiAvatar from '../../assets/images/contactAvatar/fukuyoKazutoshiAvatar.jpg'
import iiyaVasinAvatar from '../../assets/images/contactAvatar/iiyaVasinAvatar.jpg'
import nonkosiJoyiAvatar from '../../assets/images/contactAvatar/nonkosiJoyiAvatar.jpg'
import oluchiMaziAvatar from '../../assets/images/contactAvatar/oluchiMaziAvatar.jpg'

const initialState = {
    contactListState:[
        {
            id:1,
            fullName:"Erin Green",
            workingSide:"Marketing Manager",
            avatar:erinGreenAvatar,
            status:"ONLINE"
        },
        {
            id:2,
            fullName:"Fatima Delgadillo",
            workingSide:"Front-End Developer",
            avatar:fatimaDelgadilloAvatar,
            status:"ONLINE"

        },
        {
            id:3,
            fullName:"Fukuyo Kzutoshi",
            workingSide:"UX Designer",
            avatar:fukuyoKazutoshiAvatar,
            status:"OFFLINE"

        },
        {
            id:4,
            fullName:"IIya Vasin",
            workingSide:"QA",
            avatar:iiyaVasinAvatar,
            status:"ONLINE"

        },
        {
            id:5,
            fullName:"Nonkosi Joyi",
            workingSide:"Sales Lead",
            avatar:nonkosiJoyiAvatar,
            status:"OFFLINE"
        },
        {
            id:6,
            fullName:"Oluchi MAzi",
            workingSide:"Graphic Designer",
            avatar:oluchiMaziAvatar,
            status:"OFFLINE"
        },
    ]
 
};
export default initialState;